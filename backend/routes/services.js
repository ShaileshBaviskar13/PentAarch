const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const Contact = require('../models/Contact');
const { authenticateToken, requireAdmin, optionalAuth } = require('../middleware/auth');
const { validateService, validateObjectId, validateQueryParams } = require('../middleware/validation');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/services/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB
  },
  fileFilter: fileFilter
});

// @route   GET /api/services
// @desc    Get all active services
// @access  Public
router.get('/', validateQueryParams, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const featured = req.query.featured === 'true';
    const sort = req.query.sort || '-createdAt';

    // Build filter
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (featured) filter.isFeatured = true;

    const skip = (page - 1) * limit;

    const services = await Service.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Service.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: {
        services,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: total,
          itemsPerPage: limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        }
      }
    });

  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/services/featured
// @desc    Get featured services
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const services = await Service.findFeatured().limit(6);

    res.json({
      success: true,
      data: {
        services
      }
    });

  } catch (error) {
    console.error('Get featured services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured services',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/services/categories
// @desc    Get all service categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Service.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);

    res.json({
      success: true,
      data: {
        categories: categories.map(cat => ({
          name: cat._id,
          count: cat.count
        }))
      }
    });

  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/services/:slug
// @desc    Get service by slug
// @access  Public
router.get('/:slug', optionalAuth, async (req, res) => {
  try {
    const service = await Service.findOne({ 
      slug: req.params.slug, 
      isActive: true 
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Increment view count
    await service.incrementViewCount();

    res.json({
      success: true,
      data: {
        service
      }
    });

  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   POST /api/services/:id/inquiry
// @desc    Submit service inquiry
// @access  Public
router.post('/:id/inquiry', validateObjectId, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Increment inquiry count
    await service.incrementInquiryCount();

    // Create contact inquiry
    const contact = new Contact({
      name: req.body.name || 'Service Inquiry',
      email: req.body.email,
      phone: req.body.phone,
      subject: `Inquiry for ${service.name}`,
      message: req.body.message || `I'm interested in your ${service.name} service.`,
      service: service.category,
      budget: req.body.budget,
      timeline: req.body.timeline,
      source: 'service-inquiry'
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully. We will contact you soon!',
      data: {
        inquiryId: contact._id,
        serviceId: service._id
      }
    });

  } catch (error) {
    console.error('Service inquiry error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   POST /api/services
// @desc    Create new service (admin only)
// @access  Private (Admin)
router.post('/', authenticateToken, requireAdmin, validateService, upload.array('images', 10), async (req, res) => {
  try {
    const serviceData = req.body;
    
    // Handle uploaded images
    if (req.files && req.files.length > 0) {
      serviceData.images = req.files.map((file, index) => ({
        url: `/uploads/services/${file.filename}`,
        alt: serviceData.imageAlts?.[index] || serviceData.name,
        isPrimary: index === 0
      }));
    }

    // Parse features if provided as string
    if (typeof serviceData.features === 'string') {
      try {
        serviceData.features = JSON.parse(serviceData.features);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Invalid features format'
        });
      }
    }

    const service = new Service(serviceData);
    await service.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: {
        service
      }
    });

  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create service',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   PUT /api/services/:id
// @desc    Update service (admin only)
// @access  Private (Admin)
router.put('/:id', authenticateToken, requireAdmin, validateObjectId, upload.array('images', 10), async (req, res) => {
  try {
    const serviceData = req.body;
    
    // Handle uploaded images
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((file, index) => ({
        url: `/uploads/services/${file.filename}`,
        alt: serviceData.imageAlts?.[index] || serviceData.name,
        isPrimary: index === 0
      }));
      
      serviceData.images = [...(serviceData.existingImages || []), ...newImages];
    }

    // Parse features if provided as string
    if (typeof serviceData.features === 'string') {
      try {
        serviceData.features = JSON.parse(serviceData.features);
      } catch (e) {
        return res.status(400).json({
          success: false,
          message: 'Invalid features format'
        });
      }
    }

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      serviceData,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service updated successfully',
      data: {
        service
      }
    });

  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   DELETE /api/services/:id
// @desc    Delete service (admin only)
// @access  Private (Admin)
router.delete('/:id', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service deleted successfully'
    });

  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete service',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   PUT /api/services/:id/status
// @desc    Toggle service active status (admin only)
// @access  Private (Admin)
router.put('/:id/status', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const { isActive, isFeatured } = req.body;

    const updateData = {};
    if (typeof isActive === 'boolean') updateData.isActive = isActive;
    if (typeof isFeatured === 'boolean') updateData.isFeatured = isFeatured;

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service status updated successfully',
      data: {
        service: {
          id: service._id,
          name: service.name,
          isActive: service.isActive,
          isFeatured: service.isFeatured
        }
      }
    });

  } catch (error) {
    console.error('Update service status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service status',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;

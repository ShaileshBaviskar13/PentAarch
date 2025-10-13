const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const User = require('../models/User');
const { authenticateToken, requireAdmin } = require('../middleware/auth');
const { validateContactForm, validateObjectId, validateQueryParams } = require('../middleware/validation');
const nodemailer = require('nodemailer');

// Email transporter configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', validateContactForm, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      service,
      budget,
      timeline
    } = req.body;

    // Create contact inquiry
    const contact = new Contact({
      name,
      email: email.toLowerCase(),
      phone,
      subject,
      message,
      service,
      budget,
      timeline,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await contact.save();

    // Send notification email to admin (optional)
    try {
      const transporter = createEmailTransporter();
      
      const mailOptions = {
        from: process.env.EMAIL_FROM || 'PentaArch <noreply@pentaarch.com>',
        to: process.env.EMAIL_USER,
        subject: `New Contact Inquiry: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Inquiry</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>Timeline:</strong> ${timeline}</p>
            </div>
            <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3>Message</h3>
              <p style="line-height: 1.6;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>Inquiry ID:</strong> ${contact._id}<br>
                <strong>Submitted:</strong> ${contact.createdAt.toLocaleString()}
              </p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the request if email sending fails
    }

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully. We will contact you soon!',
      data: {
        inquiryId: contact._id,
        submittedAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact inquiries (admin only)
// @access  Private (Admin)
router.get('/', authenticateToken, requireAdmin, validateQueryParams, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || '-createdAt';
    const status = req.query.status;
    const service = req.query.service;

    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (service) filter.service = service;

    const skip = (page - 1) * limit;

    const contacts = await Contact.find(filter)
      .populate('assignedTo', 'firstName lastName email')
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Contact.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: {
        contacts,
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
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch inquiries',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/contact/:id
// @desc    Get specific contact inquiry (admin only)
// @access  Private (Admin)
router.get('/:id', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'firstName lastName email')
      .populate('notes.addedBy', 'firstName lastName');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.json({
      success: true,
      data: {
        contact
      }
    });

  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   PUT /api/contact/:id/status
// @desc    Update contact inquiry status (admin only)
// @access  Private (Admin)
router.put('/:id/status', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const { status } = req.body;

    if (!['new', 'contacted', 'in-progress', 'completed', 'closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: {
        contact: contact.getSummary()
      }
    });

  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update status',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   PUT /api/contact/:id/assign
// @desc    Assign contact inquiry to user (admin only)
// @access  Private (Admin)
router.put('/:id/assign', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const { assignedTo } = req.body;

    // Verify assigned user exists
    if (assignedTo) {
      const user = await User.findById(assignedTo);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'Assigned user not found'
        });
      }
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { assignedTo },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.json({
      success: true,
      message: 'Assignment updated successfully',
      data: {
        contact: contact.getSummary()
      }
    });

  } catch (error) {
    console.error('Assignment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update assignment',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   POST /api/contact/:id/notes
// @desc    Add note to contact inquiry (admin only)
// @access  Private (Admin)
router.post('/:id/notes', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const { note } = req.body;

    if (!note || note.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Note is required'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          notes: {
            note: note.trim(),
            addedBy: req.user._id
          }
        }
      },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.json({
      success: true,
      message: 'Note added successfully',
      data: {
        contact: contact.getSummary()
      }
    });

  } catch (error) {
    console.error('Add note error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add note',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact inquiry (admin only)
// @access  Private (Admin)
router.delete('/:id', authenticateToken, requireAdmin, validateObjectId, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }

    res.json({
      success: true,
      message: 'Inquiry deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;

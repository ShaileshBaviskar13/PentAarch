const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Security middleware
app.use(helmet());
app.use(compression());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Mock API endpoints for testing without MongoDB
app.post('/api/auth/register', (req, res) => {
  console.log('Registration attempt:', req.body);
  res.json({
    success: true,
    message: 'User registered successfully (mock)',
    data: {
      user: {
        id: 'mock-user-id',
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: 'user'
      },
      token: 'mock-jwt-token'
    }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login attempt:', req.body);
  res.json({
    success: true,
    message: 'Login successful (mock)',
    data: {
      user: {
        id: 'mock-user-id',
        firstName: 'Mock',
        lastName: 'User',
        email: req.body.email,
        role: 'user'
      },
      token: 'mock-jwt-token'
    }
  });
});

app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({
    success: true,
    message: 'Your inquiry has been submitted successfully. We will contact you soon! (mock)',
    data: {
      inquiryId: 'mock-inquiry-id',
      submittedAt: new Date().toISOString()
    }
  });
});

app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    data: {
      services: [
        {
          id: '1',
          name: 'Interior Design & Execution',
          slug: 'interior-design-execution',
          category: 'interior-design',
          description: 'Transform your space with our comprehensive interior design services.',
          shortDescription: 'Complete interior design solutions from concept to completion.',
          isActive: true,
          isFeatured: true
        },
        {
          id: '2',
          name: 'Decorative Wall Painting',
          slug: 'decorative-wall-painting',
          category: 'wall-painting',
          description: 'Transform your walls into works of art with our premium decorative painting services.',
          shortDescription: 'Premium decorative wall finishes including PU deco, velvet paint, and marble textures.',
          isActive: true,
          isFeatured: true
        }
      ],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 2,
        itemsPerPage: 10,
        hasNextPage: false,
        hasPrevPage: false
      }
    }
  });
});

app.get('/api/services/featured', (req, res) => {
  res.json({
    success: true,
    data: {
      services: [
        {
          id: '1',
          name: 'Interior Design & Execution',
          slug: 'interior-design-execution',
          category: 'interior-design',
          description: 'Transform your space with our comprehensive interior design services.',
          shortDescription: 'Complete interior design solutions from concept to completion.',
          isActive: true,
          isFeatured: true
        },
        {
          id: '2',
          name: 'Decorative Wall Painting',
          slug: 'decorative-wall-painting',
          category: 'wall-painting',
          description: 'Transform your walls into works of art with our premium decorative painting services.',
          shortDescription: 'Premium decorative wall finishes including PU deco, velvet paint, and marble textures.',
          isActive: true,
          isFeatured: true
        }
      ]
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Mock Backend Server running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
  console.log(`📡 API Base: http://localhost:${PORT}/api`);
  console.log(`\n✅ Mock API endpoints available:`);
  console.log(`   POST /api/auth/register`);
  console.log(`   POST /api/auth/login`);
  console.log(`   POST /api/contact`);
  console.log(`   GET  /api/services`);
  console.log(`   GET  /api/services/featured`);
});

module.exports = app;

const { body, param, query, validationResult } = require('express-validator');

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  next();
};

// User registration validation
const validateUserRegistration = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
  
  handleValidationErrors
];

// User login validation
const validateUserLogin = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  
  handleValidationErrors
];

// Contact form validation
const validateContactForm = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  
  body('service')
    .optional()
    .isIn(['interior-design', 'wall-painting', 'metallic-epoxy', 'civil-contracting', 'vastu-consultation', 'other'])
    .withMessage('Invalid service type'),
  
  body('budget')
    .optional()
    .isIn(['under-5lakh', '5-10lakh', '10-20lakh', '20-50lakh', 'above-50lakh', 'not-specified'])
    .withMessage('Invalid budget range'),
  
  body('timeline')
    .optional()
    .isIn(['immediate', '1-3months', '3-6months', '6-12months', 'flexible', 'not-specified'])
    .withMessage('Invalid timeline'),
  
  handleValidationErrors
];

// Service validation
const validateService = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Service name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Service name must be between 2 and 100 characters'),
  
  body('category')
    .isIn(['interior-design', 'wall-painting', 'metallic-epoxy', 'civil-contracting', 'vastu-consultation'])
    .withMessage('Invalid service category'),
  
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Description must be between 10 and 2000 characters'),
  
  body('shortDescription')
    .trim()
    .notEmpty()
    .withMessage('Short description is required')
    .isLength({ min: 10, max: 300 })
    .withMessage('Short description must be between 10 and 300 characters'),
  
  body('features')
    .optional()
    .isArray()
    .withMessage('Features must be an array'),
  
  body('features.*.title')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Feature title is required')
    .isLength({ max: 100 })
    .withMessage('Feature title cannot exceed 100 characters'),
  
  body('features.*.description')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Feature description is required')
    .isLength({ max: 500 })
    .withMessage('Feature description cannot exceed 500 characters'),
  
  handleValidationErrors
];

// MongoDB ObjectId validation
const validateObjectId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid ID format'),
  
  handleValidationErrors
];

// Query parameter validation
const validateQueryParams = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  query('sort')
    .optional()
    .isIn(['createdAt', '-createdAt', 'name', '-name', 'status', '-status'])
    .withMessage('Invalid sort parameter'),
  
  handleValidationErrors
];

module.exports = {
  handleValidationErrors,
  validateUserRegistration,
  validateUserLogin,
  validateContactForm,
  validateService,
  validateObjectId,
  validateQueryParams
};

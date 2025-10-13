const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  service: {
    type: String,
    enum: [
      'interior-design',
      'wall-painting',
      'metallic-epoxy',
      'civil-contracting',
      'vastu-consultation',
      'other'
    ],
    default: 'other'
  },
  budget: {
    type: String,
    enum: ['under-5lakh', '5-10lakh', '10-20lakh', '20-50lakh', 'above-50lakh', 'not-specified'],
    default: 'not-specified'
  },
  timeline: {
    type: String,
    enum: ['immediate', '1-3months', '3-6months', '6-12months', 'flexible', 'not-specified'],
    default: 'not-specified'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'closed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  notes: [{
    note: {
      type: String,
      required: true,
      trim: true
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  followUpDate: Date,
  source: {
    type: String,
    enum: ['website', 'phone', 'email', 'referral', 'social-media', 'other'],
    default: 'website'
  },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ service: 1 });
contactSchema.index({ assignedTo: 1 });

// Virtual for full name
contactSchema.virtual('fullName').get(function() {
  return this.name;
});

// Instance method to get summary
contactSchema.methods.getSummary = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    subject: this.subject,
    service: this.service,
    status: this.status,
    priority: this.priority,
    createdAt: this.createdAt
  };
};

module.exports = mongoose.model('Contact', contactSchema);

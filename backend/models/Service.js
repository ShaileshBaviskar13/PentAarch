const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
    maxlength: [100, 'Service name cannot exceed 100 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Service category is required'],
    enum: [
      'interior-design',
      'wall-painting',
      'metallic-epoxy',
      'civil-contracting',
      'vastu-consultation'
    ]
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [300, 'Short description cannot exceed 300 characters']
  },
  features: [{
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, 'Feature title cannot exceed 100 characters']
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [500, 'Feature description cannot exceed 500 characters']
    }
  }],
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true,
      trim: true
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  pricing: {
    startingFrom: {
      type: Number,
      min: 0
    },
    priceRange: {
      min: {
        type: Number,
        min: 0
      },
      max: {
        type: Number,
        min: 0
      }
    },
    unit: {
      type: String,
      enum: ['per-sqft', 'per-project', 'per-hour', 'lump-sum'],
      default: 'per-sqft'
    },
    currency: {
      type: String,
      default: 'INR'
    }
  },
  duration: {
    min: {
      type: Number,
      min: 0,
      default: 1
    },
    max: {
      type: Number,
      min: 0,
      default: 30
    },
    unit: {
      type: String,
      enum: ['days', 'weeks', 'months'],
      default: 'days'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  meta: {
    title: {
      type: String,
      trim: true,
      maxlength: [60, 'Meta title cannot exceed 60 characters']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [160, 'Meta description cannot exceed 160 characters']
    },
    keywords: [{
      type: String,
      trim: true,
      lowercase: true
    }]
  },
  stats: {
    viewCount: {
      type: Number,
      default: 0
    },
    inquiryCount: {
      type: Number,
      default: 0
    },
    rating: {
      average: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      }
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
serviceSchema.index({ slug: 1 });
serviceSchema.index({ category: 1, isActive: 1 });
serviceSchema.index({ isFeatured: 1, isActive: 1 });
serviceSchema.index({ tags: 1 });
serviceSchema.index({ createdAt: -1 });

// Pre-save middleware to generate slug if not provided
serviceSchema.pre('save', function(next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
});

// Static method to find active services
serviceSchema.statics.findActive = function() {
  return this.find({ isActive: true }).sort({ createdAt: -1 });
};

// Static method to find featured services
serviceSchema.statics.findFeatured = function() {
  return this.find({ isActive: true, isFeatured: true }).sort({ createdAt: -1 });
};

// Instance method to increment view count
serviceSchema.methods.incrementViewCount = function() {
  this.stats.viewCount += 1;
  return this.save();
};

// Instance method to increment inquiry count
serviceSchema.methods.incrementInquiryCount = function() {
  this.stats.inquiryCount += 1;
  return this.save();
};

module.exports = mongoose.model('Service', serviceSchema);

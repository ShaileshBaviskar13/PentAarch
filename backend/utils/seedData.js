const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Service = require('../models/Service');

// Seed data for initial setup
const seedUsers = async () => {
  try {
    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      return;
    }

    // Create admin user
    const adminUser = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@pentaarch.com',
      password: 'Admin@123',
      role: 'admin',
      isActive: true,
      isEmailVerified: true
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@pentaarch.com');
    console.log('🔑 Password: Admin@123');

  } catch (error) {
    console.error('❌ Error seeding users:', error);
  }
};

const seedServices = async () => {
  try {
    // Check if services already exist
    const existingServices = await Service.countDocuments();
    if (existingServices > 0) {
      console.log('✅ Services already exist');
      return;
    }

    const services = [
      {
        name: 'Interior Design & Execution',
        slug: 'interior-design-execution',
        category: 'interior-design',
        description: 'Transform your space with our comprehensive interior design services. From concept to completion, we handle every aspect of your interior design project with precision and creativity.',
        shortDescription: 'Complete interior design solutions from concept to completion with premium materials and finishes.',
        features: [
          {
            title: 'Custom Design Solutions',
            description: 'Tailored design solutions that reflect your personality and lifestyle preferences.'
          },
          {
            title: '3D Visualization',
            description: 'Advanced 3D modeling and visualization to help you see your space before construction.'
          },
          {
            title: 'Premium Materials',
            description: 'High-quality materials and finishes sourced from trusted suppliers.'
          },
          {
            title: 'Project Management',
            description: 'Complete project management from start to finish with regular updates.'
          }
        ],
        images: [
          {
            url: 'https://readdy.ai/api/search-image?query=Luxury%20interior%20design%20showcase%20with%20elegant%20furniture%2C%20sophisticated%20decor%2C%20premium%20materials%2C%20and%20professional%20interior%20design%20elements%20in%20modern%20home%20setting&width=600&height=400&seq=interior1&orientation=landscape',
            alt: 'Interior Design Showcase',
            isPrimary: true
          }
        ],
        pricing: {
          startingFrom: 500,
          unit: 'per-sqft',
          currency: 'INR'
        },
        duration: {
          min: 15,
          max: 45,
          unit: 'days'
        },
        isActive: true,
        isFeatured: true,
        tags: ['interior', 'design', 'furniture', 'decoration'],
        meta: {
          title: 'Interior Design Services | PentaArch',
          description: 'Professional interior design services with custom solutions, premium materials, and complete project management.',
          keywords: ['interior design', 'home decoration', 'furniture layout', 'interior planning']
        }
      },
      {
        name: 'Decorative Wall Painting',
        slug: 'decorative-wall-painting',
        category: 'wall-painting',
        description: 'Transform your walls into works of art with our premium decorative painting services. We specialize in various textures and finishes that add character and elegance to any space.',
        shortDescription: 'Premium decorative wall finishes including PU deco, velvet paint, stucco marble, and shine coat lustre.',
        features: [
          {
            title: 'PU Deco Finishes',
            description: 'Premium polyurethane-based decorative finishes for durability and elegance.'
          },
          {
            title: 'Velvet Paint',
            description: 'Soft velvet texture paint that adds sophistication and warmth to any space.'
          },
          {
            title: 'Marble Textures',
            description: 'Authentic marble-like textures that provide the look of natural stone.'
          },
          {
            title: 'High-Gloss Finishes',
            description: 'Lustrous shine coat finishes that reflect light beautifully.'
          }
        ],
        images: [
          {
            url: 'https://readdy.ai/api/search-image?query=Professional%20wall%20painting%20artist%20applying%20decorative%20finish%20with%20specialized%20tools%2C%20artistic%20wall%20texture%20creation%2C%20and%20skilled%20craftsman%20working%20on%20premium%20wall%20treatment&width=600&height=400&seq=painting1&orientation=landscape',
            alt: 'Decorative Wall Painting',
            isPrimary: true
          }
        ],
        pricing: {
          startingFrom: 80,
          unit: 'per-sqft',
          currency: 'INR'
        },
        duration: {
          min: 3,
          max: 10,
          unit: 'days'
        },
        isActive: true,
        isFeatured: true,
        tags: ['wall painting', 'decorative', 'texture', 'finish'],
        meta: {
          title: 'Decorative Wall Painting Services | PentaArch',
          description: 'Professional decorative wall painting with premium finishes, textures, and artistic designs.',
          keywords: ['wall painting', 'decorative paint', 'wall texture', 'interior painting']
        }
      },
      {
        name: 'Metallic Epoxy Flooring',
        slug: 'metallic-epoxy-flooring',
        category: 'metallic-epoxy',
        description: 'Experience the future of flooring with our metallic epoxy solutions. These innovative floors combine artistic beauty with industrial strength, creating surfaces that are both stunning and practical.',
        shortDescription: 'Revolutionary metallic epoxy flooring with 3D effects, marble-like finishes, and seamless metallic surfaces.',
        features: [
          {
            title: '3D Flooring Effects',
            description: 'Stunning three-dimensional patterns that create optical illusions and visual depth.'
          },
          {
            title: 'Marble-like Finishes',
            description: 'Elegant marble appearance with the durability and maintenance benefits of epoxy.'
          },
          {
            title: 'Seamless Metallic Effects',
            description: 'Continuous metallic surfaces with no joints or seams for a modern industrial look.'
          },
          {
            title: 'Chemical Resistant',
            description: 'Highly resistant to chemicals, stains, and heavy foot traffic.'
          }
        ],
        images: [
          {
            url: 'https://readdy.ai/api/search-image?query=Professional%20metallic%20epoxy%20flooring%20installation%20process%20with%20skilled%20technician%20applying%20metallic%20epoxy%20coating%2C%20specialized%20tools%2C%20and%20modern%20flooring%20equipment&width=600&height=400&seq=epoxy1&orientation=landscape',
            alt: 'Metallic Epoxy Flooring',
            isPrimary: true
          }
        ],
        pricing: {
          startingFrom: 200,
          unit: 'per-sqft',
          currency: 'INR'
        },
        duration: {
          min: 5,
          max: 15,
          unit: 'days'
        },
        isActive: true,
        isFeatured: true,
        tags: ['epoxy', 'flooring', 'metallic', '3d'],
        meta: {
          title: 'Metallic Epoxy Flooring Services | PentaArch',
          description: 'Professional metallic epoxy flooring with 3D effects, marble finishes, and seamless installation.',
          keywords: ['epoxy flooring', 'metallic floor', '3d flooring', 'industrial flooring']
        }
      },
      {
        name: 'Civil Contracting',
        slug: 'civil-contracting',
        category: 'civil-contracting',
        description: 'Complete civil construction services for residential and commercial projects. From foundation to finishing, we provide comprehensive construction solutions with quality materials and skilled craftsmanship.',
        shortDescription: 'Complete civil construction services including foundation, structure, finishing, and project management.',
        features: [
          {
            title: 'Foundation Work',
            description: 'Solid foundation construction with proper engineering and quality materials.'
          },
          {
            title: 'Structural Construction',
            description: 'Robust structural work following building codes and safety standards.'
          },
          {
            title: 'Finishing Work',
            description: 'Complete finishing including plastering, flooring, and final touches.'
          },
          {
            title: 'Project Management',
            description: 'End-to-end project management with timeline adherence and quality control.'
          }
        ],
        images: [
          {
            url: 'https://readdy.ai/api/search-image?query=Professional%20civil%20construction%20site%20with%20skilled%20workers%2C%20construction%20equipment%2C%20building%20materials%2C%20and%20ongoing%20construction%20work%20in%20progress&width=600&height=400&seq=construction1&orientation=landscape',
            alt: 'Civil Contracting Work',
            isPrimary: true
          }
        ],
        pricing: {
          startingFrom: 1200,
          unit: 'per-sqft',
          currency: 'INR'
        },
        duration: {
          min: 60,
          max: 180,
          unit: 'days'
        },
        isActive: true,
        isFeatured: false,
        tags: ['construction', 'civil', 'building', 'contracting'],
        meta: {
          title: 'Civil Contracting Services | PentaArch',
          description: 'Professional civil construction services with quality materials, skilled workers, and project management.',
          keywords: ['civil construction', 'building contractor', 'construction services', 'civil work']
        }
      },
      {
        name: 'Vastu Consultation',
        slug: 'vastu-consultation',
        category: 'vastu-consultation',
        description: 'Professional Vastu consultation services to create harmonious living and working spaces. Our expert Vastu consultants provide guidance on architectural design, space planning, and energy optimization.',
        shortDescription: 'Expert Vastu consultation for architectural design, space planning, and energy optimization.',
        features: [
          {
            title: 'Site Analysis',
            description: 'Comprehensive analysis of your property for Vastu compliance and energy flow.'
          },
          {
            title: 'Design Recommendations',
            description: 'Detailed recommendations for room placement, orientation, and architectural elements.'
          },
          {
            title: 'Remedies & Solutions',
            description: 'Practical remedies and solutions for existing Vastu defects and improvements.'
          },
          {
            title: 'Follow-up Support',
            description: 'Ongoing support and guidance throughout your project implementation.'
          }
        ],
        images: [
          {
            url: 'https://readdy.ai/api/search-image?query=Professional%20Vastu%20consultant%20analyzing%20architectural%20plans%20and%20providing%20guidance%20on%20space%20planning%2C%20energy%20flow%2C%20and%20harmonious%20living%20design&width=600&height=400&seq=vastu1&orientation=landscape',
            alt: 'Vastu Consultation',
            isPrimary: true
          }
        ],
        pricing: {
          startingFrom: 5000,
          unit: 'lump-sum',
          currency: 'INR'
        },
        duration: {
          min: 1,
          max: 3,
          unit: 'days'
        },
        isActive: true,
        isFeatured: false,
        tags: ['vastu', 'consultation', 'architecture', 'energy'],
        meta: {
          title: 'Vastu Consultation Services | PentaArch',
          description: 'Professional Vastu consultation for harmonious living spaces with expert guidance and remedies.',
          keywords: ['vastu consultant', 'vastu shastra', 'energy consultation', 'space planning']
        }
      }
    ];

    for (const serviceData of services) {
      const service = new Service(serviceData);
      await service.save();
    }

    console.log('✅ Services seeded successfully');

  } catch (error) {
    console.error('❌ Error seeding services:', error);
  }
};

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    await seedUsers();
    await seedServices();
    
    console.log('✅ Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
  }
};

module.exports = {
  seedUsers,
  seedServices,
  seedDatabase
};

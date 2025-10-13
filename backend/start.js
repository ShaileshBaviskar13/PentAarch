const mongoose = require('mongoose');
const { seedDatabase } = require('./utils/seedData');

// Start the server with database seeding
const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pentaarch');
    console.log('✅ Connected to MongoDB');

    // Seed the database
    await seedDatabase();

    // Import and start the server
    require('./server');
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

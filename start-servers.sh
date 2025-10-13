#!/bin/bash

echo "Starting PentaArch Full Stack Application..."
echo

echo "=========================================="
echo "1. Installing Backend Dependencies..."
echo "=========================================="
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "Backend installation failed!"
    exit 1
fi

echo
echo "=========================================="
echo "2. Installing Frontend Dependencies..."
echo "=========================================="
cd ..
npm install
if [ $? -ne 0 ]; then
    echo "Frontend installation failed!"
    exit 1
fi

echo
echo "=========================================="
echo "3. Setting up Environment Variables..."
echo "=========================================="

# Create backend .env file
echo "Creating backend environment file..."
cat > backend/.env << EOF
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/pentaarch
MONGODB_TEST_URI=mongodb://localhost:27017/pentaarch_test

# JWT Configuration
JWT_SECRET=pentaarch_super_secret_jwt_key_2024_development
JWT_EXPIRE=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=PentaArch <noreply@pentaarch.com>

# Frontend URL
FRONTEND_URL=http://localhost:3000

# File Upload Configuration
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
EOF

# Create frontend .env.local file
echo "Creating frontend environment file..."
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local

echo
echo "=========================================="
echo "4. MongoDB Setup Instructions..."
echo "=========================================="
echo
echo "IMPORTANT: You need to set up MongoDB before starting the backend!"
echo
echo "Option 1 - MongoDB Atlas (Cloud - Recommended):"
echo "1. Go to https://www.mongodb.com/atlas"
echo "2. Create a free account"
echo "3. Create a new cluster"
echo "4. Get your connection string"
echo "5. Update MONGODB_URI in backend/.env"
echo
echo "Option 2 - Local MongoDB:"
echo "1. Install MongoDB Community Server"
echo "2. Start MongoDB service"
echo "3. Keep the default MONGODB_URI in backend/.env"
echo
echo "Option 3 - Docker:"
echo "1. Install Docker"
echo "2. Run: docker run -d -p 27017:27017 --name mongodb mongo:latest"
echo "3. Keep the default MONGODB_URI in backend/.env"
echo

echo "=========================================="
echo "5. Starting Applications..."
echo "=========================================="

# Start backend in background
echo "Starting Backend Server..."
cd backend
npm run dev:seed &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend in background
echo "Starting Frontend Server..."
npm run dev &
FRONTEND_PID=$!

echo
echo "=========================================="
echo "✅ Applications Started Successfully!"
echo "=========================================="
echo
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:5000/api"
echo "Health Check: http://localhost:5000/health"
echo
echo "Default Admin Account:"
echo "Email: admin@pentaarch.com"
echo "Password: Admin@123"
echo
echo "Press Ctrl+C to stop both servers"
echo

# Wait for user to stop
trap "echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait

# PentaArch Full Stack Setup Instructions

## 🚀 Quick Start Guide

### Option 1: Using MongoDB Atlas (Cloud Database) - Recommended

1. **Create MongoDB Atlas Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster (free tier available)
   - Get your connection string

2. **Update Environment Variables**:
   ```bash
   # In backend/.env file
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pentaarch?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_here_12345
   ```

### Option 2: Local MongoDB Installation

1. **Install MongoDB Community Server**:
   - Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Install MongoDB Community Server
   - Start MongoDB service

2. **Alternative: Use Docker**:
   ```bash
   # Install Docker Desktop first
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

## 📋 Step-by-Step Setup

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
copy env.example .env

# Edit .env file with your MongoDB URI and JWT secret
notepad .env
```

### 2. Frontend Setup

```bash
# Navigate to root directory
cd ..

# Install frontend dependencies
npm install

# Copy environment file
copy env.local.example .env.local

# Edit .env.local file
notepad .env.local
```

### 3. Start the Applications

#### Terminal 1 - Backend:
```bash
cd backend
npm run dev:seed
```

#### Terminal 2 - Frontend:
```bash
npm run dev
```

## 🔧 Environment Configuration

### Backend (.env):
```env
MONGODB_URI=mongodb://localhost:27017/pentaarch
JWT_SECRET=your_super_secret_jwt_key_here_12345
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=PentaArch <noreply@pentaarch.com>
FRONTEND_URL=http://localhost:3000
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env.local):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🗄️ Database Setup

The backend will automatically:
- Connect to MongoDB
- Create the database
- Seed initial data (admin user + sample services)

### Default Admin Account:
- **Email**: admin@pentaarch.com
- **Password**: Admin@123

## 🌐 Access URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/health

## 📱 Features Available

### Frontend:
- ✅ User Registration/Login
- ✅ Contact Form
- ✅ Service Pages
- ✅ Responsive Design

### Backend API:
- ✅ Authentication (JWT)
- ✅ Contact Management
- ✅ Service Management
- ✅ User Management
- ✅ File Upload
- ✅ Email Notifications

## 🔍 Testing the Setup

1. **Test Backend**:
   ```bash
   curl http://localhost:5000/health
   ```

2. **Test Frontend**:
   - Open http://localhost:3000
   - Try registering a new user
   - Submit a contact form

3. **Test API**:
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"test@example.com","password":"Test123","confirmPassword":"Test123"}'
   ```

## 🛠️ Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**:
   - Check if MongoDB is running
   - Verify connection string in .env
   - Check firewall settings

2. **Port Already in Use**:
   ```bash
   # Kill process on port 5000
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   ```

3. **CORS Errors**:
   - Ensure FRONTEND_URL in backend .env matches frontend URL
   - Check if both servers are running

4. **Module Not Found**:
   ```bash
   # Reinstall dependencies
   npm install
   ```

## 📞 Support

If you encounter any issues:
1. Check the console logs
2. Verify environment variables
3. Ensure all dependencies are installed
4. Check if ports are available

## 🎉 Success!

Once everything is running:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Admin Login: admin@pentaarch.com / Admin@123

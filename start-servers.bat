@echo off
echo Starting PentaArch Full Stack Application...
echo.

echo ==========================================
echo 1. Installing Backend Dependencies...
echo ==========================================
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Backend installation failed!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 2. Installing Frontend Dependencies...
echo ==========================================
cd ..
call npm install
if %errorlevel% neq 0 (
    echo Frontend installation failed!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 3. Setting up Environment Variables...
echo ==========================================

REM Create backend .env file
echo Creating backend environment file...
echo # Database Configuration > backend\.env
echo MONGODB_URI=mongodb://localhost:27017/pentaarch >> backend\.env
echo MONGODB_TEST_URI=mongodb://localhost:27017/pentaarch_test >> backend\.env
echo. >> backend\.env
echo # JWT Configuration >> backend\.env
echo JWT_SECRET=pentaarch_super_secret_jwt_key_2024_development >> backend\.env
echo JWT_EXPIRE=7d >> backend\.env
echo. >> backend\.env
echo # Server Configuration >> backend\.env
echo PORT=5000 >> backend\.env
echo NODE_ENV=development >> backend\.env
echo. >> backend\.env
echo # Email Configuration >> backend\.env
echo EMAIL_HOST=smtp.gmail.com >> backend\.env
echo EMAIL_PORT=587 >> backend\.env
echo EMAIL_USER=your_email@gmail.com >> backend\.env
echo EMAIL_PASS=your_app_password >> backend\.env
echo EMAIL_FROM=PentaArch ^<noreply@pentaarch.com^> >> backend\.env
echo. >> backend\.env
echo # Frontend URL >> backend\.env
echo FRONTEND_URL=http://localhost:3000 >> backend\.env
echo. >> backend\.env
echo # File Upload Configuration >> backend\.env
echo MAX_FILE_SIZE=5242880 >> backend\.env
echo UPLOAD_PATH=./uploads >> backend\.env
echo. >> backend\.env
echo # Rate Limiting >> backend\.env
echo RATE_LIMIT_WINDOW_MS=900000 >> backend\.env
echo RATE_LIMIT_MAX_REQUESTS=100 >> backend\.env

REM Create frontend .env.local file
echo Creating frontend environment file...
echo NEXT_PUBLIC_API_URL=http://localhost:5000/api > .env.local

echo.
echo ==========================================
echo 4. MongoDB Setup Instructions...
echo ==========================================
echo.
echo IMPORTANT: You need to set up MongoDB before starting the backend!
echo.
echo Option 1 - MongoDB Atlas (Cloud - Recommended):
echo 1. Go to https://www.mongodb.com/atlas
echo 2. Create a free account
echo 3. Create a new cluster
echo 4. Get your connection string
echo 5. Update MONGODB_URI in backend\.env
echo.
echo Option 2 - Local MongoDB:
echo 1. Download MongoDB Community Server
echo 2. Install and start MongoDB service
echo 3. Keep the default MONGODB_URI in backend\.env
echo.
echo Option 3 - Docker:
echo 1. Install Docker Desktop
echo 2. Run: docker run -d -p 27017:27017 --name mongodb mongo:latest
echo 3. Keep the default MONGODB_URI in backend\.env
echo.

echo ==========================================
echo 5. Starting Applications...
echo ==========================================

REM Start backend in new window
echo Starting Backend Server...
start "PentaArch Backend" cmd /k "cd backend && npm run dev:seed"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend in new window
echo Starting Frontend Server...
start "PentaArch Frontend" cmd /k "npm run dev"

echo.
echo ==========================================
echo ✅ Applications Started Successfully!
echo ==========================================
echo.
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:5000/api
echo Health Check: http://localhost:5000/health
echo.
echo Default Admin Account:
echo Email: admin@pentaarch.com
echo Password: Admin@123
echo.
echo Press any key to close this window...
pause >nul

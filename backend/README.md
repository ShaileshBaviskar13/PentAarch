# PentaArch Backend API

A comprehensive backend API for the PentaArch construction and interior design website, built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Authentication System**: JWT-based authentication with user registration, login, and profile management
- **Contact Management**: Handle customer inquiries with admin dashboard functionality
- **Service Management**: CRUD operations for services with image upload support
- **User Management**: Admin panel for user management and role-based access control
- **Email Notifications**: Automated email notifications for contact inquiries
- **File Upload**: Image upload functionality for services
- **Data Validation**: Comprehensive input validation and sanitization
- **Security**: Helmet, CORS, rate limiting, and other security measures
- **Database Seeding**: Initial data setup with admin user and sample services

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/pentaarch
   
   # JWT
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=7d
   
   # Server
   PORT=5000
   NODE_ENV=development
   
   # Email (for contact notifications)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_FROM=PentaArch <noreply@pentaarch.com>
   
   # Frontend URL
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start MongoDB**
   ```bash
   # Using MongoDB service
   sudo systemctl start mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Seed the database** (Optional)
   ```bash
   # Run the seeding script
   node -e "require('./utils/seedData').seedDatabase().then(() => process.exit())"
   ```

6. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "SecurePass123",
  "confirmPassword": "SecurePass123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <jwt_token>
```

### Contact Endpoints

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "subject": "Interior Design Inquiry",
  "message": "I'm interested in your interior design services...",
  "service": "interior-design",
  "budget": "10-20lakh",
  "timeline": "3-6months"
}
```

#### Get All Contacts (Admin)
```http
GET /api/contact?page=1&limit=10&status=new
Authorization: Bearer <admin_jwt_token>
```

### Service Endpoints

#### Get All Services
```http
GET /api/services?category=interior-design&featured=true
```

#### Get Service by Slug
```http
GET /api/services/interior-design-execution
```

#### Create Service (Admin)
```http
POST /api/services
Authorization: Bearer <admin_jwt_token>
Content-Type: multipart/form-data

{
  "name": "New Service",
  "category": "interior-design",
  "description": "Service description...",
  "shortDescription": "Short description...",
  "images": [file1, file2]
}
```

### User Management (Admin)

#### Get All Users
```http
GET /api/users?role=admin&search=john
Authorization: Bearer <admin_jwt_token>
```

#### Update User Role
```http
PUT /api/users/:id/role
Authorization: Bearer <admin_jwt_token>
Content-Type: application/json

{
  "role": "admin"
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

## 🗄️ Database Models

### User
- Personal information (name, email, phone)
- Authentication (password, role)
- Preferences and settings
- Account status and verification

### Contact
- Customer inquiry information
- Service preferences and requirements
- Status tracking and assignment
- Notes and follow-up management

### Service
- Service details and descriptions
- Images and pricing information
- Category and feature management
- Statistics and analytics

## 🛡️ Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting
- **Input Validation**: Comprehensive validation
- **Password Hashing**: bcrypt for secure passwords
- **JWT Security**: Secure token generation and verification

## 📁 Project Structure

```
backend/
├── models/           # MongoDB models
├── routes/           # API routes
├── middleware/       # Custom middleware
├── utils/            # Utility functions
├── uploads/          # File uploads
├── server.js         # Main server file
├── package.json      # Dependencies
└── README.md         # Documentation
```

## 🔧 Development

### Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/pentaarch` |
| `JWT_SECRET` | JWT signing secret | Required |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `EMAIL_HOST` | SMTP host for emails | Required |
| `EMAIL_USER` | SMTP username | Required |
| `EMAIL_PASS` | SMTP password | Required |

## 🚀 Deployment

### Production Setup

1. Set `NODE_ENV=production`
2. Use a production MongoDB instance
3. Set up proper email SMTP credentials
4. Use a strong JWT secret
5. Enable HTTPS
6. Set up reverse proxy (nginx)
7. Use PM2 for process management

### Docker Deployment

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 📝 Default Admin Account

After seeding the database:
- **Email**: admin@pentaarch.com
- **Password**: Admin@123

**⚠️ Important**: Change the default admin password in production!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: support@pentaarch.com

## 🔄 API Versioning

Current API version: v1

All endpoints are prefixed with `/api/`

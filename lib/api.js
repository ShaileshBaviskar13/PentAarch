// API configuration and utility functions
/** @typedef {Object} ApiResponse
 * @property {boolean} [success]
 * @property {*} [data]
 * @property {string} [message]
 * @property {string} [error]
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
};

// Helper function to set auth token in localStorage
const setAuthToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', token);
  }
};

// Helper function to remove auth token from localStorage
const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
  }
};

// Generic API request function
/**
 * @param {string} endpoint - The API endpoint
 * @param {Object} options - Request options
 * @returns {Promise<ApiResponse>} The API response
 */
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  // Remove Content-Type for FormData
  if (config.body instanceof FormData) {
    delete config.headers['Content-Type'];
  }

  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('API Request:', { url, method: config.method || 'GET' });
    
    let response;
    try {
      response = await fetch(url, config);
    } catch (fetchError) {
      console.error('Fetch error (network/connection issue):', fetchError.message);
      throw new Error(`Failed to connect to API at ${url}: ${fetchError.message}`);
    }
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    let data = {};
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.warn('Non-JSON response:', { status: response.status, text: text.substring(0, 100) });
      data = { message: text || 'No response data' };
    }

    if (!response.ok) {
      // handle authentication errors globally
      if (response.status === 401) {
        // token invalid or expired; clear stored credentials so the app
        // can't keep sending the bad token.  caller can still catch the
        // thrown error if it wants to trigger a redirect or UI message.
        removeAuthToken();
        console.warn('API request received 401, cleared auth token');
      }

      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    console.error('API_BASE_URL:', API_BASE_URL);
    console.error('Environment:', { 
      nodeEnv: process.env.NODE_ENV,
      apiUrl: process.env.NEXT_PUBLIC_API_URL 
    });
    // re‑throw so callers can handle it as needed
    throw error;
  }
};

// Authentication API
export const authAPI = {
  // Register new user
  register: async (userData) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login user
  login: async (credentials) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Store token on successful login
    if (response.data?.token) {
      setAuthToken(response.data.token);
    }
    
    return response;
  },

  // Get current user profile
  getProfile: async () => {
    return apiRequest('/auth/me');
  },

  // Update user profile
  updateProfile: async (profileData) => {
    return apiRequest('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },

  // Logout user
  logout: async () => {
    try {
      await apiRequest('/auth/logout', { method: 'POST' });
    } finally {
      removeAuthToken();
    }
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    const response = await apiRequest('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
    
    if (response.data?.token) {
      setAuthToken(response.data.token);
    }
    
    return response;
  },
};

// Contact API
export const contactAPI = {
  // Submit contact form
  /**
   * @param {Object} contactData - Contact form data
   * @returns {Promise<ApiResponse & {success: boolean, message: string}>} The API response
   */
  submitContact: async (contactData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  // Get all contacts (admin only)
  getContacts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/contact?${queryString}`);
  },

  // Get contact by ID (admin only)
  getContact: async (id) => {
    return apiRequest(`/contact/${id}`);
  },

  // Update contact status (admin only)
  updateContactStatus: async (id, status) => {
    return apiRequest(`/contact/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },

  // Assign contact to user (admin only)
  assignContact: async (id, assignedTo) => {
    return apiRequest(`/contact/${id}/assign`, {
      method: 'PUT',
      body: JSON.stringify({ assignedTo }),
    });
  },

  // Add note to contact (admin only)
  addContactNote: async (id, note) => {
    return apiRequest(`/contact/${id}/notes`, {
      method: 'POST',
      body: JSON.stringify({ note }),
    });
  },

  // Delete contact (admin only)
  deleteContact: async (id) => {
    return apiRequest(`/contact/${id}`, {
      method: 'DELETE',
    });
  },
};

// Services API
export const servicesAPI = {
  // Get all services
  getServices: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/services?${queryString}`);
  },

  // Get featured services
  getFeaturedServices: async () => {
    return apiRequest('/services/featured');
  },

  // Get service categories
  getCategories: async () => {
    return apiRequest('/services/categories');
  },

  // Get service by slug
  getServiceBySlug: async (slug) => {
    return apiRequest(`/services/${slug}`);
  },

  // Submit service inquiry
  submitServiceInquiry: async (serviceId, inquiryData) => {
    return apiRequest(`/services/${serviceId}/inquiry`, {
      method: 'POST',
      body: JSON.stringify(inquiryData),
    });
  },

  // Create service (admin only)
  createService: async (serviceData) => {
    const formData = new FormData();
    
    // Append service data
    Object.keys(serviceData).forEach(key => {
      if (key === 'images' && Array.isArray(serviceData[key])) {
        serviceData[key].forEach((image, index) => {
          formData.append('images', image);
        });
      } else if (key === 'features') {
        formData.append('features', JSON.stringify(serviceData[key]));
      } else {
        formData.append(key, serviceData[key]);
      }
    });

    return apiRequest('/services', {
      method: 'POST',
      body: formData,
    });
  },

  // Update service (admin only)
  updateService: async (id, serviceData) => {
    const formData = new FormData();
    
    // Append service data
    Object.keys(serviceData).forEach(key => {
      if (key === 'images' && Array.isArray(serviceData[key])) {
        serviceData[key].forEach((image, index) => {
          formData.append('images', image);
        });
      } else if (key === 'features') {
        formData.append('features', JSON.stringify(serviceData[key]));
      } else {
        formData.append(key, serviceData[key]);
      }
    });

    return apiRequest(`/services/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  // Delete service (admin only)
  deleteService: async (id) => {
    return apiRequest(`/services/${id}`, {
      method: 'DELETE',
    });
  },

  // Update service status (admin only)
  updateServiceStatus: async (id, statusData) => {
    return apiRequest(`/services/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify(statusData),
    });
  },
};

// Users API (admin only)
export const usersAPI = {
  // Get all users
  getUsers: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/users?${queryString}`);
  },

  // Get user statistics
  getUserStats: async () => {
    return apiRequest('/users/stats');
  },

  // Get user by ID
  getUser: async (id) => {
    return apiRequest(`/users/${id}`);
  },

  // Update user
  updateUser: async (id, userData) => {
    return apiRequest(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  // Update user role
  updateUserRole: async (id, role) => {
    return apiRequest(`/users/${id}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    });
  },

  // Update user status
  updateUserStatus: async (id, isActive) => {
    return apiRequest(`/users/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ isActive }),
    });
  },

  // Delete user
  deleteUser: async (id) => {
    return apiRequest(`/users/${id}`, {
      method: 'DELETE',
    });
  },
};

// Utility functions
export const apiUtils = {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  isAuthenticated: () => !!getAuthToken(),
};

export default {
  auth: authAPI,
  contact: contactAPI,
  services: servicesAPI,
  users: usersAPI,
  utils: apiUtils,
};

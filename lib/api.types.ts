// API Response Types
export interface ApiResponse<T = any> {
  success?: boolean;
  data?: T;
  message?: string;
  error?: string;
  status?: number;
  [key: string]: any;
}

export interface ContactSubmitResponse extends ApiResponse {
  success: boolean;
  message: string;
}

export interface AuthResponse extends ApiResponse {
  data?: {
    token?: string;
    user?: any;
  };
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
}

export interface ContactListParams {
  [key: string]: any;
}

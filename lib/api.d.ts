import type { ApiResponse, ContactSubmitResponse, AuthResponse, ContactData, ContactListParams } from './api.types';

export interface ContactAPI {
  submitContact(contactData: ContactData): Promise<ContactSubmitResponse>;
  getContacts(params?: ContactListParams): Promise<ApiResponse>;
  getContact(id: string): Promise<ApiResponse>;
  updateContactStatus(id: string, status: string): Promise<ApiResponse>;
  assignContact(id: string, assignedTo: string): Promise<ApiResponse>;
  addContactNote(id: string, note: string): Promise<ApiResponse>;
}

export interface AuthAPI {
  register(userData: any): Promise<ApiResponse>;
  login(credentials: any): Promise<AuthResponse>;
  getProfile(): Promise<ApiResponse>;
  updateProfile(profileData: any): Promise<ApiResponse>;
  logout(): Promise<void>;
  refreshToken(refreshToken: string): Promise<AuthResponse>;
}

export interface APIUtils {
  isAuthenticated(): boolean;
  getStoredToken(): string | null;
  setStoredToken(token: string): void;
  clearStoredToken(): void;
}

export const contactAPI: ContactAPI;
export const authAPI: AuthAPI;
export const apiUtils: APIUtils;

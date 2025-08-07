// src/services/api.ts
import axios, { AxiosError , AxiosResponse } from 'axios';
import { store } from '../../../store';
import { logout } from '../../slices/authSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';
interface ErrorResponse {
    message?: string;
    error?: string;
    errors?: Record<string, unknown> | unknown[];
    // Add any other possible error response fields your API might return
  }
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Frame-Option': 'none',
  },
});

// Request interceptor for auth token
apiClient.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      // Handle network errors (no response)
      if (!error.response) {
        return Promise.reject({
          status: 0,
          message: 'Network error - please check your connection',
          data: null
        });
      }
  
      const { status, data, headers } = error.response;
      const errorData = data as ErrorResponse | string; // Type assertion here
  
      // Handle 401 Unauthorized
      if (status === 401) {
        store.dispatch(logout());
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        return Promise.reject({
          status,
          message: 'Session expired - please login again',
          data: errorData
        });
      }
  
      // Handle HTML error responses
      const contentType = headers?.['content-type'];
      if (contentType?.includes('text/html')) {
        return Promise.reject({
          status,
          message: `Server error (${status}) - please try again later`,
          data: null
        });
      }
  
      // Extract error message with proper typing
      let errorMessage = 'An unexpected error occurred';
      
      if (typeof errorData === 'string') {
        errorMessage = errorData;
      } else if (errorData?.message) {
        errorMessage = errorData.message;
      } else if (errorData?.error) {
        errorMessage = errorData.error;
      } else if (errorData?.errors) {
        errorMessage = JSON.stringify(errorData.errors);
      }
  
      // Default messages for common status codes
      if (!errorMessage || errorMessage === 'An unexpected error occurred') {
        switch (status) {
          case 400: errorMessage = 'Bad request'; break;
          case 403: errorMessage = 'Forbidden - insufficient permissions'; break;
          case 404: errorMessage = 'Resource not found'; break;
          case 500: errorMessage = 'Internal server error'; break;
          case 502: errorMessage = 'Bad gateway'; break;
          case 503: errorMessage = 'Service unavailable'; break;
          case 504: errorMessage = 'Gateway timeout'; break;
        }
      }
  
      return Promise.reject({
        status,
        message: errorMessage,
        data: errorData
      });
    }
  );

export default apiClient;
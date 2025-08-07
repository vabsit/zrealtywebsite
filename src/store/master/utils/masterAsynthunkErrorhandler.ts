
import  AsyncThunkRejectedAction  from '@reduxjs/toolkit';

export const handleAsyncThunkError = (error: any) => {
  // If error already contains status and message from our interceptor
  if (error.status && error.message) {
    return {
      status: error.status,
      message: error.message,
      data: error.data,
    };
  }
  
  // Fallback for unexpected errors
  return {
    status: 500,
    message: 'An unexpected error occurred',
    data: null,
  };
};
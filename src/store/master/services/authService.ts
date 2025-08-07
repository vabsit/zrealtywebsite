import { AxiosError, AxiosResponse } from "axios";
import apiClient from "./config/masteraxiosconfig";
import { auth_URL } from "./endpoints/auth";

interface LoginResponse {
  data: {
    userId: number;
    userName: string;
    userEmail: string;
    department: number;
    departmentName: string;
    roleId: number;
    token?: string;
    successMessage?: string;
  };
  message?: string;
}

const userLogin = async (payload: { email: string; password: string }): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await apiClient.post(auth_URL.login, payload);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(response.data.message || "Login failed");
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    throw new Error(
      axiosError.response?.data?.message || 
      axiosError.message || 
      "An unexpected error occurred"
    );
  }
};

const authService = {
  userLogin
};

export default authService;
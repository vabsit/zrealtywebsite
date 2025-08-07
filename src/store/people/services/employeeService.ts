import { AxiosError, AxiosResponse } from "axios";
import apiPeopleClient from "./config/peopleaxiosconfig";
import { employee_URL } from "./endpoints/employee";



const addEmployeeBasicDetails = async (payload: { email: string; password: string }): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await apiPeopleClient.post(employee_URL.addBasicDetails, payload);
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

const addEmployeePersionalDetails = async (payload: { email: string; password: string }): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await apiPeopleClient.post(employee_URL.addPersionalDetails, payload);
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

const employeeService = {
  addEmployeeBasicDetails,
  addEmployeePersionalDetails
};

export default employeeService;
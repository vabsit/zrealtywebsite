import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import employeeService from "../services/employeeService";



interface EmployeeState {
  employeeList: any[];
  isEmployeeBasicDetailsAdded : boolean;
  isEmployeePersionalDetailsAdded : boolean;
  error: string | null;
  successMessage: string | null;
  employeePersionalDetailsLoading : "idle" | "pending" | "succeeded" | "failed";
  employeeBasicDetailsLoading : "idle" | "pending" | "succeeded" | "failed";
   
}
   
const initialState: EmployeeState = {
  employeeList: [],
  isEmployeeBasicDetailsAdded : false,
  isEmployeePersionalDetailsAdded : false,
  error: null,
  successMessage: null,
  employeeBasicDetailsLoading: "idle",
  employeePersionalDetailsLoading: "idle",
};
export const addEmployeeBasicDetails = createAsyncThunk(
  'employee/addBasicDetails',
  async (payload: any, { rejectWithValue }) => {
    try {
      const response : any = await employeeService.addEmployeeBasicDetails(payload);
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Login failed");
    }
  }
);
export const addEmployeePersionalDetails = createAsyncThunk(
  'employee/addPersionalDetails',
  async (payload: any, { rejectWithValue }) => {
    try {
      const response : any = await employeeService.addEmployeePersionalDetails(payload);
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Login failed");
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    clearBasicDetailsAddded: (state , action) => {
      state.isEmployeeBasicDetailsAdded = action.payload;
      state.error = null;
      state.successMessage = null;
    },
     clearPersionalDetailsAddded: (state , action) => {
      state.isEmployeePersionalDetailsAdded = action.payload;
      state.error = null;
      state.successMessage = null;
    },
    
  },
  extraReducers: (builder) => {
      builder
        .addCase(addEmployeeBasicDetails.pending, (state) => {
          state.employeeBasicDetailsLoading = "pending";
          state.error = null;
        })
        .addCase(addEmployeeBasicDetails.fulfilled, (state, action) => {
          state.employeeBasicDetailsLoading = "succeeded";
          state.isEmployeeBasicDetailsAdded = true;
          state.successMessage = action.payload.data.successMessage || "Employee Persional Details Added";
          state.error = null;
        })
        .addCase(addEmployeeBasicDetails.rejected, (state, action) => {
          state.employeeBasicDetailsLoading = "failed";
          state.error = action.payload as string || "Employee Persional Details Failed";
          state.successMessage = null;
          
        })
        .addCase(addEmployeePersionalDetails.pending, (state) => {
          state.employeeBasicDetailsLoading = "pending";
          state.error = null;
        })
        .addCase(addEmployeePersionalDetails.fulfilled, (state, action) => {
          state.employeeBasicDetailsLoading = "succeeded";
          state.isEmployeePersionalDetailsAdded = true;
          state.successMessage = action.payload.data.successMessage || "Employee Persional Details Added";
          state.error = null;
        })
        .addCase(addEmployeePersionalDetails.rejected, (state, action) => {
          state.employeeBasicDetailsLoading = "failed";
          state.error = action.payload as string || "Employee Persional Details Failed";
          state.successMessage = null;
          
        });
    },
});

export const {clearBasicDetailsAddded , clearPersionalDetailsAddded  } = employeeSlice.actions;
export default employeeSlice.reducer;
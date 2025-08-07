import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";
import { resetStore } from "../../store";

interface UserData {
  userId: number;
  userName: string;
  userEmail: string;
  department: number;
  departmentName: string;
  roleId: number;
}

export interface MenuItem {
  text: string;
  icon: string;
  url: string | null;
  menuId : number;
  parentMenu : number | 0 ;
  subMenu?: MenuItem[];
}

interface AuthState {
  isAuthenticated: boolean;
  mainMenus : MenuItem | [];
  userData: UserData;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  successMessage: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("authToken"),
  mainMenus : [] ,
  userData: {
    userId: 0,
    userName: "",
    userEmail: "",
    department: 0,
    departmentName: "",
    roleId: 0,
  },
  loading: "idle",
  error: null,
  successMessage: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response : any = await authService.userLogin(payload);
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("authToken");
      resetStore();
    },
    setSampleLoginData : (state, action) => {
      state.isAuthenticated = true;
      state.mainMenus = action?.payload.mainMenus ;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isAuthenticated = true;
        state.userData = action.payload.data;
        state.successMessage = action.payload.data.successMessage || "Login successful";
        state.error = null;
        state.mainMenus = action.payload.data?.mainMenus || [] ;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string || "Login failed";
        state.successMessage = null;
        console.log(action.payload , "error");
        
      });
  },
});

export const { logout, clearError, clearSuccessMessage , setSampleLoginData } = authSlice.actions;
export default authSlice.reducer;
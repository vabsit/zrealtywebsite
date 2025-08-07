import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



interface AuthState {
  isEnableSettings: boolean;
  themeMode: "light" | "dark";
  primaryColor: string;
  secondaryColor: string;
  loading: boolean ;
}

const initialState: AuthState = {
  isEnableSettings: !!localStorage.getItem("enableSettings"),
  primaryColor : "#29B0A1" ,
  secondaryColor : "#DFFFFB" ,
  themeMode : "light" ,
  loading : false
};


const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    isEnabelSetting: (state , action) => {
      state.isEnableSettings = action.payload
      localStorage.setItem("enableSettings" ,action.payload)
    },
    setPrimaryColor: (state , action) => {
        state.isEnableSettings = action.payload
      },
    setThemeMode: (state , action) => {
      state.themeMode = action.payload
    },
    setloading: (state , action) => {
        state.themeMode = action.payload
      },
  }
});

export const {isEnabelSetting , setThemeMode , setloading } = themeSlice.actions;
export default themeSlice.reducer;
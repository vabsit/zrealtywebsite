import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import { autocompleteClasses, Box, createTheme, Theme , ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import { useAppSelector } from './store/store';
import Loading from './common/CommonLoading/Loading';

// export const color_primary = "#1E88E5"; // Main blue
// export const color_primary_light = "#6AB7FF"; // Light variant
// export const color_primary_dark = "#005CB2"; // Darker for contrast

// export const color_secondary = "#0D47A1"; // Deep navy blue for contrast
// export const color_secondary_light = "#5472D3";
// export const color_secondary_dark = "#002171";

// export const color_tertiary = "#81D4FA"; // Light blue for highlights or alerts
// export const color_background_dark = "#121212"; // Dark mode base
// export const color_background_light = "#F5F5F5"; // Light mode base
// export const color_text_light = "#000000";
// export const color_text_dark = "#FFFFFF";

// export const color_primary = "#FF4500"; // Main orange
// export const color_primary_light = "#FF7043"; // Light variant
// export const color_primary_dark = "#B32A00"; // Darker for contrast

// export const color_secondary = "#4A148C"; // Deep purple for contrast
// export const color_secondary_light = "#7C43BD";
// export const color_secondary_dark = "#12005E";

export const color_tertiary = "#FFD180"; // Soft amber for highlights or alerts
export const color_background_dark = "#1E1E1E"; // Dark mode base
export const color_background_light = "#FFFFFF"; // Light mode base
export const color_text_light = "#000000";
export const color_text_dark = "#FFFFFF";

export const color_background_overall = "#C7C7C7";
export const color_defaultinput_background = "#000000";


function App() {
  const {userData , isAuthenticated} = useAppSelector((state) => state.authdata);
  const { primaryColor, secondaryColor , themeMode , loading} = useAppSelector((state) => state.themedata);
  const outerTheme = createTheme({
    palette: {
      mode: themeMode as Theme["palette"]["mode"],
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: themeMode === "dark" ? color_background_dark : color_background_light,
        paper: themeMode === "dark" ? color_background_dark : color_background_light,
      },
      text: {
        primary: themeMode === "dark" ? color_text_dark : color_text_light,
        secondary: themeMode === "dark" ? "#BDBDBD" : "#555",
      },
      error: {
        main: "#D32F2F",
      },
      warning: {
        main: "#FFA000",
      },
      info: {
        main: "#0288D1",
      },
      success: {
        main: "#388E3C",
      },
    },
  
    typography: {
      button: {
        fontSize: "18px",
      },
      caption: {
        fontSize: "12px !important",
        fontWeight: "400",
        lineHeight: "1.5",
        fontFamily: "Poppins !important",
      },
  
      body1: {
        fontSize: "12px !important",
        fontWeight: "400",
        lineHeight: "1.5",
        fontFamily: "Poppins !important",
      },
  
      subtitle1: {
        fontSize: "16px !important", // Customize the font size
        fontWeight: "500", // Customize the font weight
        lineHeight: "1.5",
        letterSpacing: "0.05em",
        fontFamily: "Poppins !important",
      },
      subtitle2: {
        fontSize: "14px !important", // Customize the font size
        fontWeight: "500", // Customize the font weight
        lineHeight: "1.5",
        letterSpacing: "0.04em",
        fontFamily: "Poppins !important", 
      },

      h2: {
        fontSize: "45px !important",
        fontWeight: "400",
      },
   
      h3: {
        fontSize: "30px !important",
        fontWeight: "400",
      },
      h4: {
        fontSize: "25px !important",
        fontWeight: "400",
      },
      h5: {
        fontSize: "18px !important",
        fontWeight: "500",
      },
      h6: {
        fontSize: "15px !important",
   
        fontWeight: "300",
        
      },
      fontFamily: "Poppins",
      fontSize: 12,
    },
    components: {
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 32,
            height: 18,
            padding: 0,
            display: "flex",
            margin: "0px 10px",
          },
          switchBase: {
            padding: 2,
            "&.Mui-checked": {
              transform: "translateX(16px)",
              color: "white",
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:  primaryColor ,
              },
            },
            "&:active .MuiSwitch-thumb": {
              width: 16,
            },
            "&.Mui-checked.Mui-checked": {
              transform: "translateX(13px)",
            },
          },
          thumb: {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 14,
            height: 14,
            borderRadius: 9,
          },
          track: {
            borderRadius: 18 / 2,
            opacity: 1,
            backgroundColor: "rgba(0,0,0,.25)",
            boxSizing: "border-box",
            "&.Mui-checked": {
              backgroundColor: "white",
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "#ff0000", // Red color for the asterisk
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            height: "16px",
            width: "16px", // Set the height of the checkbox
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root.Mui-focused": {
              boxShadow: "1px 0px 6px 0px rgba(0, 0, 0, 0.25)",
            },
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6A6A6A",
              color: "#6A6A6A",
              // height :'40px'
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor:  "black",
              borderWidth: "1px",
              color: "black",
            },
            "& .MuiInputLabel-root": {
              color: themeMode === "dark" ? "#6A6A6A" : "#1F1F1F",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: themeMode === "dark" ? "#6A6A6A" : "#1F1F1F",
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              //  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset",
              //boxShadow: "0px -51px 79px -113px rgba(0,0,0,0.25) inset",
            },
            // '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
            //   color: '#ff0000', // Set required symbol color to red
            // },

            "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
              color: "#ff0000", // Set required symbol color to red
            },
            "& .asterisk": {
              color: "red", // Set required symbol color to red
            },
          },
        },
      },

      MuiButton: {
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              textTransform: "none",
              height: "40px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "16px !important",
              minWidth: "100px"
          },
        },
          {
            props: { variant: "outlined", size: "small" },
            style: {
              textTransform: "none",
              height: "32px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "14px !important",
              minWidth: "100px",
            },
          },
          {
            props: { variant: "contained" },
            style: {
              textTransform: "none",
              height: "40px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "16px !important",
              minWidth: "100px",
            },
          },
          {
            props: { variant: "contained", size: "small" },
            style: {
              textTransform: "none",
              height: "32px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "14px !important",
              minWidth: "100px",
            },
          },
          {
            props: { variant: "text" },
            style: {
              textTransform: "none",
              height: "40px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "16px !important",
              minWidth: "100px",
             
            },
          },
          {
            props: { variant: "text", size: "small" },
            style: {
              textTransform: "none",
              height: "32px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "14px !important",
              minWidth: "100px",
          },
        }
        ],
      },
  }
  });

 
  
  return (
    <Box sx={{ backgroundColor: "#F7F8FB",}}>
      <ThemeProvider theme={outerTheme} >
      {loading ? <Loading /> : null}
      <BrowserRouter>
        <Routes>

          <Route path="/*" element={<AppRoutes/>}/>
          {/* <Route path="/" element={<Login/>}/> */}
          {/* <Route path="/login" element={<Login/>}/> */}
          </Routes>
          </BrowserRouter>
     </ThemeProvider>
    </Box>
  );
}

export default App;

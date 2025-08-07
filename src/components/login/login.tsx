import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSampleLoginData } from "../../store/master/slices/authSlice";
import { loginresponse } from "../../utils/SampletestDatas";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../navbar/Footer";
import { useForm, Controller } from "react-hook-form";
import CustomTextField from "../../common/CommonInputs/CustomTextField";
import SpacedStack from "../../common/CommonSections/SpacedStack";

export const findFirstMenu = (menus: any) => {
  if (!menus) return null;
  for (let menu of menus) {
    if (menu.url) return menu;
    if (menu.subMenu) {
      const found: any = findFirstMenu(menu.subMenu);
      if (found) return found;
    }
  }
  return null;
};

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const { loading, error, successMessage, mainMenus, isAuthenticated } =
    useAppSelector((state) => state.authdata);

  let formdata = {
    email: "",
    password: "",
  };
  // Form hooks
  const {
    control: loginControl,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLoginForm,
  } = useForm<FormData>({
    defaultValues: formdata,
    mode: "onChange",
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    resetLoginForm();
  };

  const handleLogin = async (values: any) => {
    try {
      // In a real app, you would dispatch the actual login action
      // await dispatch(login(values)).unwrap();

      // For demo purposes using sample data
      dispatch(setSampleLoginData(loginresponse));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && mainMenus) {
      let firstMenu = findFirstMenu(mainMenus);
      if (firstMenu?.url) {
        navigate(firstMenu.url);
      }
    }
  }, [isAuthenticated, mainMenus, navigate]);

  return (
    <Box
      className="scrollable-section"
      sx={{
        overflowY: "scroll",
        backgroundColor: (theme) =>
        theme.palette.mode == "light" ? "#F7F8FB" : "#292929",
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          minWidth: "70%",
          minHeight: "80%",
          borderRadius: 1,
          color: (theme) => theme.palette.text.primary,
          backgroundColor: (theme) => theme.palette.background.paper,
          display: "flex",
          boxShadow: 2,
        }}
      >
        {/* Left Section - Image/Graphics */}
        <Box
          sx={{
            width: "60%",
            padding: 2,
            backgroundColor: (theme) =>
              theme.palette.mode == "light" ? "#F7F8FB" : "#292929",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="div">
            Welcome Back!
          </Typography>
        </Box>

        {/* Right Section - Login Form */}
        <Box
          sx={{
            width: "40%",
            padding: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SpacedStack>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Sign In
            </Typography>

            <Controller
              name="email"
              control={loginControl}
              defaultValue=""
              rules={{
                required: "Email is Required",
              }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  label="Email"
                  error={!!loginErrors.email}
                  helperText={
                    loginErrors.email?.message &&
                    loginErrors.email?.message.toString()
                  }
                />
              )}
            />

            <Controller
              name="password"
              control={loginControl}
              defaultValue=""
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  label="Password"
                  type="password"
                  error={!!loginErrors.password}
                  helperText={
                    loginErrors.password?.message &&
                    loginErrors.password?.message.toString()
                  }
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading === "pending"}
              onClick={handleLoginSubmit(handleLogin)}
            >
              {loading === "pending" ? "Signing In..." : "Sign In"}
            </Button>

            {error && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            {successMessage && (
              <Typography color="success.main" sx={{ mt: 1 }}>
                {successMessage}
              </Typography>
            )}

            <Typography
              variant="body2"
              sx={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => setActiveTab(1)}
            >
              Forgot your password?
            </Typography>
          </SpacedStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;

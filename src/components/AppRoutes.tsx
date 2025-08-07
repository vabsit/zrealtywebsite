import { Box, } from "@mui/material";
import SideNavBar from "./navbar/SideNavBar";
import TopNavBar from "./navbar/TopNavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeList from "./people/employee/EmployeeList";
import Footer from "./navbar/Footer";
import Layout from "./dashboard/Layouts";
import OrganisationSettings from "./masters/orgSettings";
import { useEffect } from "react";
import { useAppSelector } from "../store/store";
import Header from "./navbar/Header";
import LandingScreen from "./LandingScreen/LandingScreen";

const AppRoutes = () => {
  const { userData, isAuthenticated } = useAppSelector((state) => state.authdata);
  const navigate = useNavigate();

  //  useEffect(() => {
  //      if(!isAuthenticated){
  //       navigate('/login');
  //      }
  //   },[isAuthenticated])

  return (
    <>
      <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", pl:4, pr:4 }}>
        <Header />

        <Box
          className="scrollable-section"
          sx={{
            overflowY: "scroll",
            backgroundColor: "#fff", // Optional: same as outer
          }}
        >
          <Box
            sx={{
              borderRadius: 1,
              color: (theme) => theme.palette.text.primary,
              backgroundColor: "#fff", // force paper bg to be white
              minHeight: "calc(100vh - 64px)", // Adjust if header/footer heights vary
            }}
          >
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/employee" element={<EmployeeList />} />
              <Route path="/dashboard" element={<Layout />} />
              <Route path="/settings/orgSettings" element={<OrganisationSettings />} />
            </Routes>
          </Box>
        </Box>

        <Footer />
      </Box>

    </>
  );
};

export default AppRoutes;

import { Box, } from "@mui/material";
import SideNavBar from "./navbar/SideNavBar";
import TopNavBar from "./navbar/TopNavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeList from "./people/employee/EmployeeList";
import Footer from "./navbar/Footer";
import Layout from "./dashboard/Layouts";
import OrganisationSettings from "./masters/orgSettings";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import Header from "./navbar/Header";
import LandingScreen from "./LandingScreen/LandingScreen";
import DimensionConvertor from "./ProductsScreen/DimensionConvertor";
import SmartRoomStyler from "./ProductsScreen/SmartRoomStyler";
import SmartCostEstimator from "./ProductsScreen/SmartCostEstimator";
import ZlendoApiSuite from "./ProductsScreen/ZlendoApiSuite";
import AiRoomInspiration from "./ProductsScreen/AiRoomInspiration";
import VRStudio from "./ProductsScreen/VRStudio";
import HomeRemodeling from "./UseCases/HomeRemodeling";
import IndianPartner from "./Business/IndianPartner";
import Affiliate from "./Business/Affiliate";
import Library from "./Library/Library";
import Tutorials from "./Tutorial/Tutorials";

const AppRoutes = () => {
  const { userData, isAuthenticated } = useAppSelector((state) => state.authdata);
  const navigate = useNavigate();
  const [html, setHtml] = useState("");
  const [Footer, setFooter] = useState("");
  const [zlendoHeader, setzlendoHeader] = useState("");

  //  useEffect(() => {
  //      if(!isAuthenticated){
  //       navigate('/login');
  //      }
  //   },[isAuthenticated])

  useEffect(() => {
    fetch("/header.html") // or your shared server URL
      .then((res) => res.text())
      .then((data) => {
        setzlendoHeader(data);

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        // Inject CSS (avoid duplicates)
        doc.querySelectorAll("link[rel='stylesheet']").forEach((link: any) => {
          if (!document.querySelector(`link[href="${link.href}"]`)) {
            const newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.href = link.href;
            document.head.appendChild(newLink);
          }
        });

        // Inject scripts (avoid duplicates)
        doc.querySelectorAll("script").forEach((script) => {
          if (script.src && document.querySelector(`script[src="${script.src}"]`)) {
            return; // skip if already added
          }

          const newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      });
  }, []);

  useEffect(() => {
    fetch("/R_header.html") // or your shared server URL
      .then((res) => res.text())
      .then((data) => {
        setHtml(data);

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        // Inject CSS (avoid duplicates)
        doc.querySelectorAll("link[rel='stylesheet']").forEach((link: any) => {
          if (!document.querySelector(`link[href="${link.href}"]`)) {
            const newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.href = link.href;
            document.head.appendChild(newLink);
          }
        });

        // Inject scripts (avoid duplicates)
        doc.querySelectorAll("script").forEach((script) => {
          if (script.src && document.querySelector(`script[src="${script.src}"]`)) {
            return; // skip if already added
          }

          const newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      });
  }, []);

  useEffect(() => {
    fetch("/R_footer.html") // or your shared server URL
      .then((res) => res.text())
      .then((data) => {
        setFooter(data);

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        // Inject CSS (avoid duplicates)
        doc.querySelectorAll("link[rel='stylesheet']").forEach((link: any) => {
          if (!document.querySelector(`link[href="${link.href}"]`)) {
            const newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.href = link.href;
            document.head.appendChild(newLink);
          }
        });

        // Inject scripts (avoid duplicates)
        doc.querySelectorAll("script").forEach((script) => {
          if (script.src && document.querySelector(`script[src="${script.src}"]`)) {
            return; // skip if already added
          }

          const newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      });
  }, []);

  return (
    <>
      {/* <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", pl: 4, pr: 4, }}> */}
      <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", }}>
        {/* <Header /> */}
        {/* <div dangerouslySetInnerHTML={{ __html: zlendoHeader }} /> */}

        <Box sx={{ backgroundColor: "#dbece8" }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>

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
              // mt: 3
            }}
          >
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/2d3dconvertor" element={<DimensionConvertor />} />
              <Route path="/smartroomstyler" element={<SmartRoomStyler />} />
              <Route path="/smartcostestimator" element={<SmartCostEstimator />} />
              <Route path="/zlendoapisuite" element={<ZlendoApiSuite />} />
              <Route path="/airoominspiration" element={<AiRoomInspiration />} />
              <Route path="/vrstudio" element={<VRStudio />} />

              <Route path="/homeremodeling" element={<HomeRemodeling />} />


              <Route path="/indianpartner" element={<IndianPartner />} />
              <Route path="/affiliate" element={<Affiliate />} />

              <Route path="/library" element={<Library />} />
              <Route path="/tutorials" element={<Tutorials />} />

              <Route path="/employee" element={<EmployeeList />} />
              <Route path="/dashboard" element={<Layout />} />
              <Route path="/settings/orgSettings" element={<OrganisationSettings />} />
            </Routes>
          </Box>
        </Box>

        {/* <Footer /> */}
        <div dangerouslySetInnerHTML={{ __html: Footer }} />

      </Box>

    </>
  );
};

export default AppRoutes;

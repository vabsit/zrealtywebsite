import { Box, } from "@mui/material";
import SideNavBar from "./navbar/SideNavBar";
import TopNavBar from "./navbar/TopNavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeList from "./people/employee/EmployeeList";
import Footer from "./navbar/Footer";
import Layout from "./dashboard/Layouts";
import OrganisationSettings from "./masters/orgSettings";
import { useEffect, useRef, useState } from "react";
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
import Blogs from "./Blogs/Blogs";
import Pricing from "./Pricing/Pricing";
import HelpCenter from "./HelpCenter/HelpCenterMain";

const AppRoutes = () => {
  const { userData, isAuthenticated } = useAppSelector((state) => state.authdata);
  const navigate = useNavigate();
  const [html, setHtml] = useState("");
  const [Footer, setFooter] = useState("");
  const [zlendoHeader, setzlendoHeader] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const realtyRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);


  // useEffect(() => {
  //   fetch("/header.html") 
  //     .then((res) => res.text())
  //     .then((data) => {
  //       setzlendoHeader(data);

  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(data, "text/html");

  //       // Inject CSS (avoid duplicates)
  //       doc.querySelectorAll("link[rel='stylesheet']").forEach((link: any) => {
  //         if (!document.querySelector(`link[href="${link.href}"]`)) {
  //           const newLink = document.createElement("link");
  //           newLink.rel = "stylesheet";
  //           newLink.href = link.href;
  //           document.head.appendChild(newLink);
  //         }
  //       });

  //       // Inject scripts (avoid duplicates)
  //       doc.querySelectorAll("script").forEach((script) => {
  //         if (script.src && document.querySelector(`script[src="${script.src}"]`)) {
  //           return; // skip if already added
  //         }

  //         const newScript = document.createElement("script");
  //         if (script.src) {
  //           newScript.src = script.src;
  //         } else {
  //           newScript.textContent = script.textContent;
  //         }
  //         document.body.appendChild(newScript);
  //       });
  //     });
  // }, []);

  useEffect(() => {
    fetch("/header.html")
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

        // Inject scripts (avoid duplicates, force execution)
        doc.querySelectorAll("script").forEach((script) => {
          if (script.src) {
            // External JS
            if (!document.querySelector(`script[src="${script.src}"]`)) {
              const newScript = document.createElement("script");
              newScript.src = script.src;
              newScript.async = false; // keep order
              document.body.appendChild(newScript);
            }
          } else if (script.textContent) {
            // Inline JS
            const newScript = document.createElement("script");
            newScript.text = script.textContent;
            document.body.appendChild(newScript);
          }
        });
      });
  }, []);

  useEffect(() => {
  const tabContainer = document.getElementById("productTabs");
  if (!tabContainer) return;

  const tabCards = tabContainer.querySelectorAll(".tab-card");
  const tabContent = document.getElementById("productTabContent");
  const tabPanes = tabContent?.querySelectorAll(".tab-pane") || [];

  function handleClick(this: Element) {
    // Remove active from all tab-cards
    tabCards.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");

    // Remove active from product tab-panes only
    tabPanes.forEach((pane) => pane.classList.remove("show", "active"));

    // Activate target pane
    const targetSelector = this.getAttribute("data-bs-target");
    if (targetSelector) {
      const targetPane = tabContent?.querySelector(targetSelector);
      if (targetPane) {
        targetPane.classList.add("show", "active");
      } else {
        console.warn(`No product tab-pane found for ${targetSelector}`);
      }
    }
  }

  tabCards.forEach((card) => {
    card.addEventListener("click", handleClick);
  });

  return () => {
    tabCards.forEach((card) => {
      card.removeEventListener("click", handleClick);
    });
  };
}, [zlendoHeader, navigate,]);

useEffect(() => {
  function handleClick(e: Event) {
    const target = e.target as HTMLElement;
    const card = target.closest(".tab-card");
    if (!card) return;

    const tabContainer = document.getElementById("productTabs");
    const tabContent = document.getElementById("productTabContent");
    if (!tabContainer || !tabContent) return;

    const tabCards = tabContainer.querySelectorAll(".tab-card");
    const tabPanes = tabContent.querySelectorAll(".tab-pane");

    // Reset all
    tabCards.forEach((c) => c.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("show", "active"));

    // Activate clicked tab
    card.classList.add("active");
    const targetSelector = card.getAttribute("data-bs-target");
    if (targetSelector) {
      const targetPane = tabContent.querySelector(targetSelector);
      if (targetPane) {
        targetPane.classList.add("show", "active");
      }
    }
  }

  // Attach listener only once to the container
  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
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

  
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !realtyRef.current) return;

      const headerBottom = headerRef.current.getBoundingClientRect().bottom;

      if (headerBottom <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", }}>
        {/* <div id="header" dangerouslySetInnerHTML={{ __html: zlendoHeader }} />

        <Box sx={{ backgroundColor: "#dbece8" }}>
          <div id="Realty_header" dangerouslySetInnerHTML={{ __html: html }} />
        </Box> */}

        {/* <Box
          sx={{
            backgroundColor: "#dbece8",
            position: "sticky",
            top: 0,
            zIndex: 1100, // higher than content
          }}
        >
          <div id="Realty_header" dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
         */}

        <div
          id="header"
          ref={headerRef}
          dangerouslySetInnerHTML={{ __html: zlendoHeader }}
        />

        {/* Realty header */}
        <Box sx={{ backgroundColor: "#dbece8 !important" }}>
          <div
            id="Realty_header"
            ref={realtyRef}
            className={isFixed ? "fixed-top-header" : ""}
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/helpcenter" element={<HelpCenter />} />

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

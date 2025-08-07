// Footer.tsx
import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import ResponsiveGridItem from "../../common/CommonSections/ResponsiveGridItem";
import zlendoLogo from '../../assets/zlendo.png';


const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(6, 4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 2),
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const IconWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "12px",
  marginTop: "16px",
}));

const SocialButton = styled(IconButton)(() => ({
  backgroundColor: "#DFFFFB",
  padding: 8,
  borderRadius: 8,
  "& svg": {
    color: "#29B0A1",
    fontSize: 25,
  },
}));

const Footer = () => {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Case Studies", "Reviews", "Updates"],
    },
    {
      title: "Company",
      links: ["About", "Contact us", "Careers", "Culture", "Blog"],
    },
    {
      title: "Support",
      links: [
        "Getting started",
        "Help center",
        "Server status",
        "Report a bug",
        "Chat support",
      ],
    },
    {
      title: "Downloads",
      links: ["iOS", "Android", "Mac", "Windows", "Chrome"],
    },
  ];

  return (
    <FooterContainer>
      <Box width={"100%"}>
        <Grid container spacing={4}>
          <ResponsiveGridItem xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ display: 'block', alignItems: 'center', justifyContent: 'center', }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={zlendoLogo} alt="Zlendo Realty" height="60" />
              </Box>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
              </Typography>
              <IconWrapper>
                <SocialButton><Facebook /></SocialButton>
                <SocialButton><Twitter /></SocialButton>
                <SocialButton><Instagram /></SocialButton>
                <SocialButton><LinkedIn /></SocialButton>
                <SocialButton><YouTube /></SocialButton>
              </IconWrapper>
            </Box>
          </ResponsiveGridItem>
          <ResponsiveGridItem xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container spacing={4}>
              {sections.map((section, index) => (
                <ResponsiveGridItem item xs={6} sm={3} md={6} lg={3} xl={3} key={index}>
                  <FooterTitle variant="subtitle1">{section.title}</FooterTitle>
                  {section.links.map((link, idx) => (
                    <FooterLink href="#" key={idx}>
                      {link}
                    </FooterLink>
                  ))}
                </ResponsiveGridItem>
              ))}
            </Grid>
          </ResponsiveGridItem>
        </Grid>
      </Box>

      <Box mt={6} textAlign="center" borderTop="1px solid #ddd" pt={3}>
        <Typography variant="body2" color="textSecondary">
          © 2025 Realty | All Rights Reserved |{" "}
          <Link href="#" underline="hover">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="#" underline="hover">
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;

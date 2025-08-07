import { Box, Typography } from "@mui/material";
import React from "react";

interface PageTitleProps {
  title: string;
  subSection?: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subSection }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography fontSize={"18px !important"}>{title}</Typography>
      {subSection && subSection}
    </Box>
  );
};


export default React.memo(PageTitle);
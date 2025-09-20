import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, Breadcrumbs, Link, Divider, Theme, useMediaQuery } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import blogBanner from '../../assets/Blogs/image 2.png';


interface ViewTutorialProps {
    onClose?: () => void;
    data?: any;
}



const ViewBlogs: React.FC<ViewTutorialProps> = ({
    onClose, data,
}) => {

    const navigate = useNavigate();
    const isMobileOrTablet = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("md")
    );

    const closeBasicDetails = () => {
        onClose && onClose();
    };

    const handleClick = (path: string) => {
        navigate(path);
    };

    console.log(data, "data");

    return (
        <Box>
            <Box sx={{}}>
                <Breadcrumbs
                    separator={
                        <NavigateNextIcon sx={{ fontSize: "24px", color: "#929292" }} /> // arrow size & color
                    }
                    aria-label="breadcrumb"
                >
                    <Link
                        underline="hover"
                        sx={{
                            cursor: "pointer",
                            color: "#929292",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "12px", // 60%
                            letterSpacing: "0.5px",
                        }}
                        onClick={() => handleClick("/")}
                    >
                        Home
                    </Link>

                    <Link
                        underline="hover"
                        sx={{
                            cursor: "pointer",
                            color: "#929292",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "12px", // 60%
                            letterSpacing: "0.5px",
                        }}
                        onClick={() => closeBasicDetails()}
                    >
                        Blogs
                    </Link>

                    <Link
                        underline="none"
                        sx={{
                            cursor: "pointer",
                            color: "#929292",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "12px", // 60%
                            letterSpacing: "0.5px",
                        }}

                    >
                        {data.title}
                    </Link>

                </Breadcrumbs>
                <Box
                    component="img"
                    src={blogBanner}
                    alt="Blog Banner"
                    sx={{
                        height: { xs: "100vh", sm: "80vh", md: "80vh", lg: "60vh" },
                        width: "100%",
                        borderRadius: 3,
                        mt: 3,
                        objectFit: "cover", // makes it behave like background-size: cover
                    }}
                />
                <Box sx={{ px: 2 }}>
                    <Typography variant="h3" sx={{ mt: 2, color: "#4d4d4d", fontWeight: 700, fontFamily: "Nunito" }}>
                        {data.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                        <Typography variant="h5" sx={{ color: "#4d4d4d", fontWeight: 700, fontSize: "17px", fontFamily: "Nunito" }}>
                            {data.author}
                        </Typography>

                        <Typography variant="subtitle2" sx={{ color: "#4d4d4d", fontFamily: "Nunito" }}>
                            {data.date}
                        </Typography>
                    </Box>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#4d4d4d !important',
                            fontFamily: "Nunito !important",
                            fontSize: '18px !important',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '25px', 
                            letterSpacing: '0.1px',
                            textAlign: "left",
                            mt: 3,
                        }}
                        width="95%"
                        component="div"   
                        dangerouslySetInnerHTML={{ __html: data.blogDescription }}
                    />


                </Box>
            </Box>

        </Box>
    );
};

export default ViewBlogs;

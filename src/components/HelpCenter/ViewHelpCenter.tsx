import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItemText,
    Collapse,
    Box,
    Typography,
    ListItem,
    ListItemButton,
    Breadcrumbs,
    Link,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const menuData = [
    {
        title: "Get Started",
        children: [
            {
                title: "Sign Up & Login",
                children: [
                    {
                        title: "Welcome To Coohom Community!",
                        content: "Welcome to Coohom Community. This is your intro page.",
                    },
                    {
                        title: "Learn with Coohom",
                        content: "Here you can learn Coohom step by step.",
                    },
                    {
                        title: "Switch Languages",
                        content: "Instructions for switching languages.",
                    },
                    {
                        title: "Login Your Account",
                        content: "How to log into your account.",
                    },
                    {
                        title: "All about Account",
                        content: "Details about account management.",
                    },
                ],
            },
        ],
    },
];

interface ViewTutorialProps {
    onClose?: () => void;
    data?: any;
}



const ViewHelpCenter: React.FC<ViewTutorialProps> = ({
    onClose, data,
}) => {

    const navigate = useNavigate();
    const [activeContent, setActiveContent] = useState<string>(
        menuData[0].children[0].children[0].content
    );
    const [activeTitle, setActiveTitle] = useState<string>(
        menuData[0].children[0].children[0].title
    );

    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (key: string) => {
        setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const closeBasicDetails = () => {
        onClose && onClose();
    };

    const handleClick = (path: string) => {
        navigate(path);
    };

    const renderMenu = (items: any[], parentKey: string = "") => (
        <List component="div" disablePadding>
            {items.map((item, index) => {
                const key = `${parentKey}-${index}`;
                if (item.children) {
                    return (
                        <React.Fragment key={key}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => toggleMenu(key)}>
                                    <ListItemText primary={item.title} />
                                    {openMenus[key] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>

                            <Collapse in={openMenus[key]} timeout="auto" unmountOnExit>
                                {renderMenu(item.children, key)}
                            </Collapse>
                        </React.Fragment>
                    );
                }
                return (
                    <ListItem disablePadding>
                        <ListItemButton
                            selected={activeTitle === item.title}
                            onClick={() => {
                                setActiveTitle(item.title);
                                setActiveContent(item.content);
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );

    return (
        <Box sx={{ display: "flex", minHeight: "90vh", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: 2 }}>
            {/* Left Drawer */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: 280,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 280,
                        boxSizing: "border-box",
                        position: "static",
                    },
                }}
            >
                <Box sx={{ overflow: "auto" }}>{renderMenu(menuData)}</Box>
            </Drawer>

            {/* Right Content */}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Breadcrumbs
                    separator={
                        <NavigateNextIcon sx={{ fontSize: "24px", color: "#929292", }} /> // arrow size & color
                    }
                    sx={{ mb: 2 }}
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
                        {activeTitle}
                    </Link>

                </Breadcrumbs>
                <Typography variant="h4" gutterBottom>
                    {activeTitle}
                </Typography>
                <Typography variant="body1">{activeContent}</Typography>
            </Box>
        </Box>
    );
}

export default ViewHelpCenter;

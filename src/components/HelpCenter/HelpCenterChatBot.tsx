import React, { useState } from "react";
import {
    Box,
    Typography,
    Avatar,
    Tabs,
    Tab,
    IconButton,
    Paper,
    Fade,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ActionProvider, { MessageParser } from "./MessageParser";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";


const config = {
    botName: "Support Bot",
    initialMessages: [{ type: "bot", id: 1, message: "Hi 👋 How can we help?" }],
};

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState(0);

    console.log(tab, "tab");


    return (
        <>
            {/* Floating Chat Button */}
            {!open && (
                <IconButton
                    onClick={() => setOpen(true)}
                    sx={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        bgcolor: "#00C6A2",
                        color: "#fff",
                        width: 56,
                        height: 56,
                        boxShadow: 4,
                        "&:hover": { bgcolor: "#00b291" },
                    }}
                >
                    <ChatIcon />
                </IconButton>
            )}

            {/* Chat Popup */}
            <Fade in={open} timeout={300} >
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 90,
                        right: 20,
                        zIndex: 1000,
                        display: open ? "block" : "none",
                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            width: 340,
                            borderRadius: "16px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {/* Header */}
                        <Box
                            sx={{
                                bgcolor: "#f7f9fa",
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {/* <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                ZRealty
              </Typography> */}
                            <img
                                src="Zlendo.svg"
                                alt=""
                                style={{
                                    maxHeight: "30%",
                                    maxWidth: "30%",
                                    objectFit: "contain"
                                }}
                            />

                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

                                <IconButton
                                    size="small"
                                    onClick={() => setOpen(false)}
                                    sx={{ color: "gray" }}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Body */}
                        <Box sx={{ minHeight: 250, }}>
                            {/* {tab === 0 && (<Box sx={{ flex: 1, p: 3, textAlign: "left" }}>
                                <Typography variant="h5" fontWeight={600}>
                                    Hi there <span>👋</span>
                                </Typography>
                                <Typography variant="h5" fontWeight={600}>
                                    How can we help?
                                </Typography>
                            </Box>)} */}
                            {tab === 0 && (
                                <Box
                                    sx={{
                                        flex: 1,
                                        backgroundColor: "#E8F9F4", // Chat background
                                        color: "#003D32",
                                        overflow: "hidden",
                                        "& .react-chatbot-kit-chat-container": {
                                            height: "100%", // Full within parent box
                                            width: "100%",
                                            borderRadius: 0,
                                            backgroundColor: "#E8F9F4",
                                        },
                                        "& .react-chatbot-kit-chat-inner-container": {
                                            backgroundColor: "#E8F9F4",
                                            height: "100%",
                                        },
                                        "& .react-chatbot-kit-chat-message-container": {
                                            backgroundColor: "#E8F9F4",
                                            color: "#003D32",
                                            height: "250px", // 🔹 Set inner chat area height
                                            overflowY: "auto", // 🔹 Scroll inside chatbot
                                            paddingRight: "8px",
                                        },
                                        "& .react-chatbot-kit-chat-bot-message": {
                                            backgroundColor: "#00C6A2",
                                            color: "#fff",
                                            borderRadius: "16px",
                                        },
                                        "& .react-chatbot-kit-user-chat-message": {
                                            backgroundColor: "#fff",
                                            color: "#003D32",
                                            border: "1px solid #C2EFE6",
                                            borderRadius: "16px",
                                        },
                                        "& .react-chatbot-kit-chat-input-container": {
                                            backgroundColor: "#fff",
                                            borderTop: "1px solid #d6eae5",
                                            height: "45px", // 🔹 Reduce input box height
                                        },
                                        "& .react-chatbot-kit-chat-input": {
                                            backgroundColor: "transparent",
                                            color: "#003D32",
                                            fontSize: "14px",
                                        },
                                        "& .react-chatbot-kit-chat-btn-send": {
                                            backgroundColor: "#00C6A2",
                                            color: "#fff",
                                            borderRadius: "0 0 8px 0",
                                            "&:hover": { backgroundColor: "#00b291" },
                                        },
                                    }}
                                >
                                    <Chatbot
                                        config={config}
                                        messageParser={MessageParser}
                                        actionProvider={ActionProvider}
                                    />
                                </Box>
                            )}


                            {tab === 1 && (
                                <>
                                    <Box sx={{ flex: 1, p: 3, textAlign: "center" }}>
                                        <Typography variant="h5" fontWeight={600}>
                                            Hi there <span>👋</span>
                                        </Typography>
                                        <Typography variant="h5" fontWeight={600}>
                                            How can we help?
                                        </Typography>
                                    </Box>
                                    {/* <Button
                                        fullWidth
                                        sx={{
                                            borderRadius: "30px",
                                            py: 1,
                                            bgcolor: "#e6f6f4",
                                            color: "#30C9A1",
                                            mb: 2,
                                            fontWeight: 600,
                                            "&:hover": {
                                                // bgcolor: isActive ? "#f2f2f2" : "#fff",
                                                // color: isActive ? "#fff" : "#30C9A1",
                                            },
                                        }}
                                    >
                                        Contact Us
                                    </Button> */}
                                    <Box
                                        sx={{
                                            flex: 1,
                                            pt: 2,
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography variant="body1" color="textSecondary">
                                            Need help? Visit our support page or contact us!
                                        </Typography>
                                    </Box>
                                </>
                            )}

                        </Box>

                        {/* Footer Tabs */}
                        <Tabs
                            value={tab}
                            onChange={(e, newVal) => setTab(newVal)}
                            centered
                            variant="fullWidth"
                            textColor="inherit"
                            sx={{
                                borderTop: "1px solid #eee",
                                "& .MuiTab-root": {
                                    textTransform: "none",
                                    fontWeight: 500,
                                    fontSize: 14,
                                    color: "#666",
                                },
                                "& .Mui-selected": { color: "#00C6A2" },
                            }}
                        >
                            {/* <Tab icon={<MailIcon />} label="Home" /> */}
                            <Tab icon={<ChatIcon />} label="Messages" />
                            <Tab icon={<HelpOutlineIcon />} label="Help" />
                        </Tabs>
                    </Paper>
                </Box>
            </Fade>
        </>
    );
};

export default ChatWidget;

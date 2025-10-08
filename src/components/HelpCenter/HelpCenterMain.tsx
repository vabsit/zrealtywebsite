
import {
    Box,
    Card,
    CardContent,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from 'react';
import TutorialBanner from '../../assets/Tutorials/Tutorial_Banner.png';
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightbulbOutlinedIcon from "../../assets/helpCenter/LightbulbOutlinedIcon.png";
import ImageOutlinedIcon from "../../assets/helpCenter/famicons_image-outline.png";
import HouseOutlinedIcon from "../../assets/helpCenter/cbi_wall-fuzo-h.png";
import HouseIcon from "../../assets/helpCenter/Vector.png";
import ViewHelpCenter from "./ViewHelpCenter";
import ChatWidget from "./HelpCenterChatBot";


const HelpCenter: React.FC<any> = ({ onClose }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [ViewTutorialOpen, setViewTutorialOpen] = useState(false);
    const [ViewSearchOpen, setViewSearchOpen] = useState(false);
    const [ViewTutorialData, setViewTutorialData] = useState([]);

    const categories = [
        { image: HouseIcon, label: "Introduction" },
        { image: LightbulbOutlinedIcon, label: "Get Started" },
        { image: ImageOutlinedIcon, label: "Interior Design" },
        { image: HouseOutlinedIcon, label: "Closet Design" },
    ];

    const handleOpen = (data: any) => {
        setViewTutorialOpen(true);
        setViewTutorialData(data);
    }

    const closeBasicDetails = () => {
        setViewTutorialOpen(false);
        setViewTutorialData([]);
        setViewSearchOpen(false);
        setSearchTerm("");
    };

    const handleSearch = (term: string) => {
        console.log("Search initiated for:", term);
        setViewSearchOpen(true);
        setViewTutorialOpen(true);
    }

    useEffect(() => {
        if (ViewTutorialOpen) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [ViewTutorialOpen]);

    return (
        <Box sx={{ width: "100%" }}>
            {!ViewTutorialOpen ? (
                <Stack spacing={6} sx={{ mb: 2 }} >
                    <Box
                        sx={{
                            background: "linear-gradient(to bottom, #D2EDE7 0%, #ffffff 100%)", // ✅ Gradient background
                            height: { xs: '60vh', sm: '40vh', md: '45vh', lg: '50vh' },
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 0,
                            pb: { xs: 3 }
                        }}
                    >
                        <Stack
                            spacing={3}
                            sx={{ alignItems: "center", mt: { xs: 9, sm: 7, md: 7, lg: 7 } }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#4d4d4d', // ✅ Dark text like your screenshot
                                    fontFeatureSettings: "'liga' off, 'clig' off",
                                    fontFamily: "'Nunito', sans-serif !important",
                                    fontSize: { xs: '36px !important', sm: '44px', md: '48px', lg: '48px !important' },
                                    fontWeight: 700,
                                    lineHeight: { xs: '44px !important', sm: '44px', md: '44px', lg: '60px !important' },
                                    textAlign: { xs: "center" }
                                }}
                                mb={2}
                                mt={1}
                            >
                                Zlendo Realty Help Center
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mt: 5,
                            }}
                        >
                            <TextField
                                placeholder="Search for space you like"
                                variant="outlined"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        console.log("Search triggered:", searchTerm);
                                        handleSearch(searchTerm);
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: "gray", fontSize: "25px" }} />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        borderRadius: "50px",
                                        height: 50,
                                        backgroundColor: "#fff",
                                        border: "1px solid gray",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#fff",
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#a6a6a6",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#00C6A2",
                                        },
                                        "& input::placeholder": {
                                            color: "#3d3d3d",
                                            opacity: 1,
                                        },
                                    },
                                }}
                                sx={{
                                    width: { xs: "100%", sm: 300, md: 560 },
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{ flexWrap: "wrap", justifyContent: "center" }}
                        >
                            {categories.map((cat, index) => (
                                <Card
                                    onClick={() => handleOpen(cat)}
                                    key={index}
                                    sx={{
                                        width: 200,
                                        height: 75,
                                        borderRadius: 2,
                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                        backgroundColor: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <CardContent >
                                        <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
                                            <Box component="img" src={cat.image} alt={cat.label} sx={{ width: 30, height: 30, }} />
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 600, color: "#4d4d4d", fontFamily: "'Nunito', sans-serif !important", fontSize: "18px" }}
                                            >
                                                {cat.label}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Box>


                </Stack>
            ) : (
                <Stack spacing={6} >
                    <ViewHelpCenter data={ViewTutorialData} onClose={closeBasicDetails} search={ViewSearchOpen} setSearch={setViewSearchOpen} searchData={searchTerm} />
                </Stack>
            )}

            <ChatWidget />
        </Box>
    );
}

export default HelpCenter;
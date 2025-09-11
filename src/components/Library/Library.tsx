
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button, Divider, Drawer, Grid, IconButton, InputAdornment, Pagination, Stack, TextField, Typography,
    useMediaQuery,useTheme
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import LibraryBanner from '../../assets/Library/LibraryBanner.png';
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import CustomChip from "../../common/CommonChip/CustomFilterChip";
import FilterListIcon from '@mui/icons-material/FilterList';
import CustomProjectCard from "../../common/ProjectCard/ProjectImageCard";

import HomeOwner from '../../assets/HouseModeling/houseOwner.png';
import Interior from '../../assets/HouseModeling/InteriorDesigner.png';
import RealEstate from '../../assets/HouseModeling/RealEstate.png';
import HomeModelingBanner from '../../assets/HouseModeling/HomeModelingBanner.png';
import HouseModelSolution from '../../assets/HouseModeling/HouseModelSolution.png';
import EasySteps from '../../assets/HouseModeling/EasySteps.png';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import LibraryImageViewer from "./ViewLibraryItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";


const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: 500,
    padding: "14px 6px",
    border: `1px solid ${selected ? "transparent" : "#4CB79E"}`,
    background: selected ? "#21b9ad" : "transparent",
    color: selected ? "#fff" : "#383838",
    "&:hover": {
        background: selected ? "#269F91" : "rgba(33, 185, 173, 0.1)",
        borderColor: "#4CB79E",
    },
    "& .MuiChip-label": {
        padding: "0 12px",
    },
}));


const Library: React.FC<any> = ({ onClose }) => {

    const theme = useTheme();
    const [selectedChip, setSelectedChip] = useState("All Spaces");
    const [searchTerm, setSearchTerm] = useState("");
    const [ViewLibraryOpen, setViewLibraryOpen] = useState(false);
    const [ViewLibraryData, setViewLibraryData] = useState([]);
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<string | false>(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleChange =
        (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const projects = [
        {
            Design_type: "Kitchen",
            userName: "Loosiya",
            image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
            userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
            views: "12K",
            images: [
                { src: HomeOwner, thumb: HomeModelingBanner },
                { src: HomeModelingBanner, thumb: EasySteps },
                { src: HouseModelSolution, thumb: HomeModelingBanner },
                { src: RealEstate, thumb: RealEstate },
                { src: Interior, thumb: EasySteps },
                { src: EasySteps, thumb: RealEstate },
                { src: EasySteps, thumb: RealEstate },
                { src: EasySteps, thumb: RealEstate },
                { src: EasySteps, thumb: RealEstate },
            ],
            moreCount: 42,
            description: "This modern, minimalist apartment in an urban setting combines the living area and kitchen into one large open space, creating a social and interactive environment. The bedrooms are separated for privacy. The design emphasizes functionality and simplicity, with a focus on creating a serene and uncluttered environment. The color scheme uses a combination of light and dark tones, with the living area and kitchen in a light beige or off-white color, and the bedrooms in a slightly darker shade. The use of light and dark contrasts, along with the careful selection of materials and colors, contributes to a sophisticated and inviting atmosphere."
        },
        { Design_type: "Bedroom", userName: "Loosiya", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800", userAvatar: "https://randomuser.me/api/portraits/women/44.jpg", views: "12K", moreCount: 42 },
        { Design_type: "Living", userName: "Loosiya", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800", userAvatar: "https://randomuser.me/api/portraits/women/44.jpg", views: "12K", moreCount: 42 },
        { Design_type: "Kitchen", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
        { Design_type: "Bedroom", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
        { Design_type: "Living Room", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
        { Design_type: "Kitchen", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
        { Design_type: "Bedroom", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
        { Design_type: "Kitchen", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
        { Design_type: "Living Room", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
    ];

    const chipLabels = useMemo(() => {
        const uniqueTypes = Array.from(new Set(projects.map(p => p.Design_type)));
        return ["All Spaces", ...uniqueTypes];
    }, [projects]);

    // Filtered data based on chip + search
    const filteredProjects = useMemo(() => {
        return projects
            .filter(project => {
                const matchesChip =
                    selectedChip === "All Spaces" || project.Design_type === selectedChip;
                const matchesSearch =
                    searchTerm.trim() === "" ||
                    project.Design_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.userName.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesChip && matchesSearch;
            })
            .map(project => ({
                ...project,
                CardClick: (data: any) => {
                    // You can customize this function as needed
                    console.log("Card clicked:", data);
                }
            }));
    }, [projects, selectedChip, searchTerm]);

    const handleOpen = (data: any) => {
        setViewLibraryOpen(true);
        setViewLibraryData(data);
    }

    const closeBasicDetails = () => {
        setViewLibraryOpen(false);
        setViewLibraryData([])
    };

    return (
        <>
            {!ViewLibraryOpen ? (
                <Stack spacing={6} sx={{ mb: 2, mt:3 }} px={2}>

                    <TwoColumnLayout
                        leftGrid={6}
                        rightGrid={6}
                        leftContent={
                            <Stack spacing={3} sx={{ alignItems: "start" }}>

                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: '#3D3D3D',
                                        fontFeatureSettings: "'liga' off, 'clig' off",
                                        fontFamily: "'Nunito', sans-serif !important",
                                        fontSize: '44px !important',
                                        fontStyle: 'normal',
                                        fontWeight: "700 !important",
                                        lineHeight: '60px',
                                        textAlign: isMobile ? "center" : "left"
                                    }}
                                    mb={4}
                                    mt={2}
                                >
                                    Explore endless possibilities for your dream home design.
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: '#3D3D3D',
                                        fontFamily: "'Nunito', sans-serif !important",
                                        fontSize: '18px !important',
                                        fontStyle: 'normal',
                                        fontWeight: "500 !important",
                                        lineHeight: '24px', // 120%
                                        letterSpacing: '0.1px', // You can’t use CSS vars like `var(...)` here directly
                                        textAlign: isMobile ? "center" : "left"
                                    }}
                                >
                                    Access free design templates for every room — from bedrooms to kitchens and beyond.
                                </Typography>


                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: { xs: 2, sm: 4, md: 6 },
                                        alignItems: "center",
                                        justifyContent: { xs: "center", md: "left" }, // center on mobile
                                        flexDirection: { xs: "column", sm: "row" }, // stack vertically on mobile
                                        width: "100%",
                                    }}
                                >
                                    {/* Search Field */}
                                    <TextField
                                        placeholder="Search for space you like"
                                        variant="outlined"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon sx={{ color: "gray", fontSize: "25px" }} />
                                                </InputAdornment>
                                            ),
                                            sx: {
                                                borderRadius: "50px",
                                                height: 50,
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#bfbfbf",
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#a6a6a6",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#00C6A2",
                                                },
                                            },
                                        }}
                                        sx={{
                                            // width: 350,
                                            width: { xs: "100%", sm: 300, md: 350 },
                                        }}
                                    />

                                    {/* Gradient Button */}
                                    <Button
                                        startIcon={<SendIcon />}
                                        sx={{
                                            background: "linear-gradient(to right, #00C6A2, #00B4D8)",
                                            color: "#fff",
                                            borderRadius: "50px",
                                            textTransform: "none",
                                            fontSize: "16px",
                                            px: 3,
                                            height: 50,
                                            width: { xs: "100%", sm: "auto" },
                                            "&:hover": {
                                                background: "linear-gradient(to right, #00B4D8, #00C6A2)",
                                            },
                                        }}
                                    >
                                        Post Project
                                    </Button>
                                </Box>

                            </Stack>
                        }
                        rightContent={

                            <img src={LibraryBanner} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />
                        }
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} px={3}>
                        <Box >
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                                {chipLabels.map((label) => (
                                    <CustomChip
                                        key={label}
                                        label={label}
                                        selected={selectedChip === label}
                                        onClick={() => setSelectedChip(label)}
                                    />
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            {/* <IconButton sx={{ border: "2px solid #4CB79E", borderRadius: 2 }} onClick={toggleDrawer(true)}>
                                <FilterListIcon sx={{ color: "#29B0A1", fontSize: 35, fontWeight: 600 }} />
                            </IconButton> */}
                        </Box>

                    </Box>

                    <Box px={{xs: 0, md: 3}}>
                        {/* Cards */}
                        <CustomProjectCard data={filteredProjects} itemsPerPage={8} onClick={(card) => { console.log("Selected card:", card); handleOpen(card) }} />
                    </Box>

                </Stack>
            ) : (
                <Stack spacing={6} sx={{ mb: 2, mt:3 }} px={{xs: 2, sm: 2, lg:10}}>
                    <LibraryImageViewer data={ViewLibraryData} onClose={closeBasicDetails} />
                </Stack>
            )}

            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{ borderRadius: "10px" }}>
                <Box sx={{ width: 400, mt: 2, ml: 2 }}>
                    {/* Header */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">Search</Typography>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon sx={{ color: "gray" }} />
                        </IconButton>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" gap={1} flexWrap="wrap" mb={2} p={2}>

                    <StyledChip
                        label={"All space"}
                        selected={true}
                        onDelete={() => { }}
                    />
                    <StyledChip
                        label={"Latest"}
                        selected={true}
                        onDelete={() => { }}
                    />
                    <Typography
                        variant="subtitle1"
                        sx={{ ml: "auto", cursor: "pointer", color: "#000" }}
                    >
                        Clear
                    </Typography>
                </Box>

                <Accordion disableGutters elevation={0} sx={{ mb: 2 }}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" fontWeight="500">Design Style</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" color="text.secondary" mb={1}>
                            Content for Design Style
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0} sx={{ mb: 2 }} expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" fontWeight="500">Space</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" color="text.secondary" mb={1}>
                            Content for Design Style
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0} sx={{ mb: 2 }} expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" fontWeight="500">Color</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" color="text.secondary" mb={1}>
                            Content for Design Style
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters elevation={0} sx={{ mb: 2 }} expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" fontWeight="500">Latest</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" color="text.secondary" mb={1}>
                            Content for Design Style
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Box sx={{ display: "flex", position: "absolute", bottom: 0, p: 2, }} width={"90%"}>
                    <Button
                        fullWidth
                        sx={{
                            background: "linear-gradient(to right, #00C6A2, #00B4D8)",
                            color: "#fff",
                            borderRadius: "50px",
                            textTransform: "none",
                            fontSize: "16px",
                            height: 40,
                            "&:hover": {
                                background: "linear-gradient(to right, #00B4D8, #00C6A2)",
                            },
                        }}
                    >
                        Apply
                    </Button>
                </Box>
            </Drawer>



        </>
    );
}

export default Library;




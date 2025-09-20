
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box, Button, Card, CardContent, CardMedia, Divider, IconButton, InputAdornment, Link, Pagination, Stack, TextField, Typography,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import React from 'react';
import TutorialBanner from '../../assets/Tutorials/Tutorial_Banner.png';
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Promotion from '../../assets/Affiliate/Promotion.png';
import Team from '../../assets/Affiliate/Team.png';
import HomeOwner from '../../assets/HouseModeling/houseOwner.png';
import Interior from '../../assets/HouseModeling/InteriorDesigner.png';
import RealEstate from '../../assets/HouseModeling/RealEstate.png';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ViewTutorial from "./ViewTutorial";
import CustomChip from "../../common/CommonChip/CustomFilterChip";
import Header from "../Common_Header_Footer/R_header.html";


const Tutorials: React.FC<any> = ({ onClose }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedChip, setSelectedChip] = useState("All");
    const [page, setPage] = useState(1);
    const [ViewTutorialOpen, setViewTutorialOpen] = useState(false);
    const [ViewTutorialData, setViewTutorialData] = useState([]);
    const itemsPerPage = 8;

    const videos = [
        {
            title: "Basic How to Draw floor plan | Basic",
            image: RealEstate,
            duration: "7 min",
            type: "Beginner Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Basic How to Draw floor plan | Basic",
            image: Interior,
            duration: "7 min",
            type: "Construction Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Digital Painting for Beginners",
            image: Promotion,
            duration: "7 min",
            type: "Tutorial Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: HomeOwner,
            duration: "7 min",
            type: "Beginner Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: Team,
            duration: "7 min",
            type: "Construction Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: Interior,
            duration: "7 min",
            type: "Tutorial Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: RealEstate,
            duration: "7 min",
            type: "Beginner Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: Team,
            duration: "7 min",
            type: "Construction Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: Interior,
            duration: "7 min",
            type: "Tutorial Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
        {
            title: "Character Design Fundamentals",
            image: RealEstate,
            duration: "7 min",
            type: "Beginner Guide",
            views: "12 K",
            likes: "12 K",
            comments: "750",
        },
    ];

    const chipLabels = useMemo(() => {
        const uniqueTypes = Array.from(new Set(videos.map(p => p.type)));
        return ["All", ...uniqueTypes];
    }, [videos]);

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    const handlePageChange = (_: any, value: number) => {
        setPage(value);
    };

    const filteredVideos = useMemo(() => {
            return videos
                .filter(videos => {
                    const matchesChip =
                        selectedChip === "All" || videos.type === selectedChip;
                    const matchesSearch =
                        searchTerm.trim() === "" ||
                        videos.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        videos.title.toLowerCase().includes(searchTerm.toLowerCase());
                    return matchesChip && matchesSearch;
                })
                .map(videos => ({
                    ...videos,
                    CardClick: (data: any) => {
                        // You can customize this function as needed
                        console.log("Card clicked:", data);
                    }
                }));
        }, [videos, selectedChip, searchTerm]);

    const paginatedData = filteredVideos.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleOpen = (data: any) => {
        setViewTutorialOpen(true);
        setViewTutorialData(data);
    }

    const closeBasicDetails = () => {
        setViewTutorialOpen(false);
        setViewTutorialData([]);
    };

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
                            backgroundImage: `url(${TutorialBanner})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: { xs: '100vh', sm: '80vh', md: '80vh', lg: '60vh' },
                            width: '100%',
                            // display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 3,
                            pb: { xs: 3 }
                        }}
                    >
                        <Stack spacing={3} sx={{ alignItems: "center", mt: { xs: 2, sm: 7, md: 7, lg: 7 }, }}>

                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#fff',
                                    fontFeatureSettings: "'liga' off, 'clig' off",
                                    fontFamily: "'Nunito', sans-serif !important",
                                    fontSize: { xs: '34px !important', sm: '40px', md: '40px', lg: '40px !important' },
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: { xs: '44px !important', sm: '44px', md: '44px', lg: '60px !important' },
                                    textAlign: { xs: "center" }
                                }}
                                mb={2}
                                mt={1}
                            >
                                Bring Your Space Ideas to Life — In 3D
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: '#fff',
                                    fontFamily: "'Nunito', sans-serif !important",
                                    fontSize: '26px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '24px', // 120%
                                    letterSpacing: '0.1px',
                                    textAlign: "center",
                                }}
                                width={"75%"}
                            >
                                Whether you're dreaming of designing your ideal home, planning renovations, or exploring creative design as a career path, Zlendo’s 3D Design Training gives you the power to create, visualize, and share professional-quality designs.
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
                            {/* Search Field */}
                            <TextField
                                placeholder="Find Your Tutorials"
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
                                        backgroundColor: "#fff", // ✅ White background
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
                                            color: "#3d3d3d", // ✅ Placeholder color
                                            opacity: 1, // ensures custom color is visible
                                        },
                                    },
                                }}
                                sx={{
                                    width: { xs: "100%", sm: 300, md: 500 },
                                }}
                            />
                        </Box>

                    </Box>
                    <Box px={{ xs: 2, sm: 2, lg: 10 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#3D3D3D',
                                fontFamily: "'Nunito', sans-serif !important",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '24px',
                                letterSpacing: '0.1px',
                                textAlign: "center",
                            }}
                            width={"100%"}
                        >
                            No Experience Needed – Start with templates or from scratch Built for Everyone – From casual users to aspiring pros, Practical, Hands-On – Learn by doing, not by theory, Portfolio-Ready Output – Export walkthroughs, snapshots, and shareable files, Supportive Community – Learn, collaborate, and grow with others
                        </Typography>
                    </Box>

                    <Box px={{ xs: 2, sm: 2, lg: 10 }} sx={{ mt: 2, position: "relative" }}>

                        <Typography
                            variant="h2"
                            sx={{
                                color: '#3d3d3d',
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                fontFamily: "'Nunito', sans-serif !important",
                                fontSize: { xs: '32px !important', sm: '32px', md: '32px', lg: '32px !important' },
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: { xs: '44px !important', sm: '44px', md: '44px', lg: '60px !important' },
                                textAlign: { xs: "center", lg: "left" }
                            }}
                            mb={2}
                            mt={1}
                        >
                            Beginner’s Guide
                        </Typography>

                        {/* Left Arrow */}
                        <IconButton
                            onClick={() => scroll("left")}
                            sx={{
                                position: "absolute",
                                bottom: "40%",
                                left: "10px",
                                // transform: "translateY(-50%)",
                                zIndex: 1,
                                // background: "#B3B3B3",
                                // boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                "&:hover": { background: "#f1f1f1" },
                            }}
                        >
                            <ChevronLeftIcon sx={{ fontSize: "50px" }} />
                        </IconButton>

                        {/* Scrollable Row */}
                        <Box
                            ref={scrollRef}
                            sx={{
                                display: "flex",
                                gap: 2,
                                overflowX: "auto",
                                scrollBehavior: "smooth",
                                "&::-webkit-scrollbar": { display: "none" },
                            }}
                        >
                            {videos.map((item, i) => (
                                <Card
                                    key={i}
                                    onClick={() => { console.log(item, "item"); handleOpen(item) }}

                                    sx={{
                                        borderRadius: "16px",
                                        // minWidth: 250,
                                        maxWidth: "260px",
                                        border: "1px solid #DCDCDC",
                                        flexShrink: 0,
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    {/* Thumbnail + Overlay */}
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{ height: 150, objectFit: "cover" }}
                                        />

                                        {/* Duration */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                backgroundColor: "rgba(0,0,0,0.6)",
                                                color: "#fff",
                                                px: 1,
                                                borderRadius: "8px",
                                                fontSize: "12px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.duration}
                                        </Box>

                                        {/* Play button */}
                                        <PlayCircleOutlineIcon
                                            sx={{
                                                fontSize: 60,
                                                color: "#fff",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                opacity: 0.9,
                                            }}
                                        />
                                    </Box>

                                    {/* Title + Stats */}
                                    <CardContent>
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {item.title}
                                        </Typography>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <VisibilityIcon sx={{ fontSize: 18, color: "#777" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.views}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <ThumbUpIcon sx={{ fontSize: 18, color: "#777" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.likes}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <ChatBubbleOutlineIcon sx={{ fontSize: 18, color: "#777" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.comments}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        {/* Right Arrow */}
                        <IconButton
                            onClick={() => scroll("right")}
                            sx={{
                                position: "absolute",
                                bottom: "40%",
                                right: "10px",
                                // transform: "translateY(-50%)",
                                zIndex: 1,
                                // background: "#B3B3B3",
                                // boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                "&:hover": { background: "#f1f1f1" },
                            }}
                        >
                            <ChevronRightIcon sx={{ fontSize: "50px" }} />
                        </IconButton>

                    </Box>

                    <Box px={{ xs: 2, sm: 2, lg: 10 }} sx={{ mt: 2, }}>

                        <Typography
                            variant="h2"
                            sx={{
                                color: '#3d3d3d',
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                fontFamily: "'Nunito', sans-serif !important",
                                fontSize: { xs: '32px !important', sm: '32px', md: '32px', lg: '32px !important' },
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: { xs: '44px !important', sm: '44px', md: '44px', lg: '60px !important' },
                                textAlign: { xs: "center", lg: "left" }
                            }}
                            mb={2}
                            mt={1}
                        >
                            All Tutorial Videos
                        </Typography>

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
                    </Box>

                    <Box px={{ xs: 2, sm: 2, lg: 10 }} sx={{ mt: 2, }}>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                                gap: 3,
                                padding: { sm: "20px" }
                            }}
                        >
                            {paginatedData.map((item, i) => (
                                <Card
                                    key={i}
                                    onClick={() => { console.log(item, "item"); handleOpen(item) }}
                                    sx={{
                                        borderRadius: "16px",
                                        // minWidth: 250,
                                        maxWidth: "260px",
                                        border: "1px solid #DCDCDC",
                                        flexShrink: 0,
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    {/* Thumbnail + Overlay */}
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{ height: 150, objectFit: "cover" }}
                                        />

                                        {/* Duration */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                backgroundColor: "rgba(0,0,0,0.6)",
                                                color: "#fff",
                                                px: 1,
                                                borderRadius: "8px",
                                                fontSize: "12px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.duration}
                                        </Box>

                                        {/* Play button */}
                                        <PlayCircleOutlineIcon
                                            sx={{
                                                fontSize: 60,
                                                color: "#fff",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                opacity: 0.9,
                                            }}
                                        />
                                    </Box>

                                    {/* Title + Stats */}
                                    <CardContent>
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {item.title}
                                        </Typography>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <VisibilityIcon sx={{ fontSize: 18, color: "#777" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.views}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <ThumbUpIcon sx={{ fontSize: 18, color: "#777" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.likes}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                <ChatBubbleOutlineIcon sx={{ fontSize: 18, color: "#777" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.comments}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        <Divider sx={{ border: "1px solid #EAECF0", mt: 3 }} />

                        {/* Pagination */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                gap: 2,
                                mt: 4,
                            }}
                        >
                            <Button
                                variant="outlined"
                                startIcon={<ArrowBackIcon />}
                                disabled={page === 1}
                                onClick={() => setPage((prev) => prev - 1)}
                            >
                                Previous
                            </Button>

                            <Pagination
                                count={Math.ceil(videos.length / itemsPerPage)}
                                page={page}
                                onChange={handlePageChange}
                                siblingCount={1}
                                boundaryCount={1}
                                shape="rounded"
                                sx={{
                                    "& .Mui-selected": {
                                        backgroundColor: "#d6f2ed !important",
                                        color: "#000 !important",
                                    },
                                }}
                            />

                            <Button
                                variant="outlined"
                                endIcon={<ArrowForwardIcon />}
                                disabled={page === Math.ceil(videos.length / itemsPerPage)}
                                onClick={() => setPage((prev) => prev + 1)}
                            >
                                Next
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            ) : (
                <Stack spacing={6} sx={{ mb: 2, mt: 3, }} px={{ xs: 2, sm: 2, lg: 7 }}>
                    <ViewTutorial data={ViewTutorialData} onClose={closeBasicDetails} />
                </Stack>
            )}
        </Box>
    );
}

export default Tutorials;
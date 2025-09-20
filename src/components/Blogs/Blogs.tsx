
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box, Button, Card, CardContent, CardMedia, Chip, Divider, IconButton, InputAdornment, Link, Pagination, Stack, TextField, Typography,
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
import CustomChip from "../../common/CommonChip/CustomFilterChip";
import Header from "../Common_Header_Footer/R_header.html";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ViewBlogs from "./ViewBlogs";


const Blogs: React.FC<any> = ({ onClose }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedChip, setSelectedChip] = useState("All");
    const [page, setPage] = useState(1);
    const [ViewBlogsOpen, setViewBlogsOpen] = useState(false);
    const [ViewBlogsData, setViewBlogsData] = useState([]);
    const itemsPerPage = 8;


    const articles = [
        {
            "author": "Javier Gomez",
            "date": "2023-10-15",
            "title": "The Future of Urban Architecture",
            "description": "Discover the innovative architectural trends that are redefining cityscapes and modern living.",
            "image": HomeOwner,
            "blogDescription": "<p>In the ever-evolving world of architecture, two powerful movements have begun to converge in spectacular fashion: the clean, functional aesthetic of <b>Modernism</b> and the environmental consciousness of <b>Sustainable Design</b>. This fusion is not merely a trend; it represents a fundamental shift in how we envision our living and working spaces, creating buildings that are not only beautiful and efficient but also in harmony with our planet.</p><p>Modernism, born in the early 20th century, championed simplicity, rejecting ornate decoration in favor of clean lines, open floor plans, and a focus on materials like glass, steel, and concrete. Its core principle, <i>form follows function</i>, has influenced generations of architects to create spaces that are logical, uncluttered, and profoundly human-centric.</p><p>At the same time, the 21st century has brought an urgent need for sustainability. <b>Sustainable design</b>, or green architecture, prioritizes energy efficiency, the use of renewable or recycled materials, and minimizing the environmental impact of a building throughout its lifecycle. It's an approach that looks beyond the immediate structure to consider its relationship with the surrounding ecosystem, from water conservation to promoting biodiversity.</p><p>So, how do these two philosophies merge? The result is a style we might call <b>Sustainable Modernism</b>. Imagine a home with expansive glass walls, but those walls are triple-paned and positioned for passive solar heating. A flat, modernist roof becomes the perfect platform for a <b>green roof</b>, insulating the building and creating a habitat for local wildlife.</p><p>This synthesis proves that aesthetic beauty and environmental responsibility are not mutually exclusive. The honesty of materials celebrated by modernists aligns perfectly with sustainable practices. The modernist emphasis on connecting indoor and outdoor spaces is naturally complemented by <b>biophilic design</b> elements like living walls and interior courtyards.</p><p>As we look to the future, the principles of Sustainable Modernism offer a compelling path forward—intelligent, responsible, and timelessly elegant.</p>",
            "tags": ["Architecture", "Urban Planning"]
        },
        {
            "author": "Aisha Khan",
            "date": "2023-10-08",
            "title": "Eco-Friendly Building Materials",
            "description": "A look into the sustainable materials that are making construction greener and more efficient.",
            "image": RealEstate,
            "blogDescription": "<p>The construction industry has long been criticized for its environmental impact, but a revolution is underway. <b>Eco-friendly building materials</b> are transforming the way we build, offering solutions that are both sustainable and durable. By using renewable, recycled, or low-impact resources, architects and builders are reducing carbon footprints while improving the health and efficiency of buildings.</p><p><b>Bamboo</b> is one of the most promising alternatives, known for its rapid growth and strength. <b>Recycled steel</b> and aluminum reduce the need for raw extraction. <b>Hempcrete</b>, made from hemp fibers and lime, provides insulation while being biodegradable. Even <b>reclaimed wood</b> is finding new life in projects, reducing waste and adding character.</p><p>Advancements in technology are enabling new methods of recycling construction waste, repurposing glass, concrete, and plastic. Low-VOC paints and natural insulation like <i>sheep’s wool</i> are improving indoor air quality.</p><p>Eco-friendly materials are no longer niche—they are becoming mainstream. Governments are implementing stricter regulations, and consumers are demanding greener choices. The challenge lies in scaling production and making these materials affordable, ensuring sustainable construction is accessible to all.</p>",
            "tags": ["Construction", "Sustainability", "Materials"]
        },
        {
            "author": "Maria Rodriguez",
            "date": "2023-10-01",
            "title": "Maximizing Property Value",
            "description": "An essential guide for homeowners on how to increase their property's market value before selling.",
            "image": Interior,
            "blogDescription": "<p>For most homeowners, property represents one of the largest investments they’ll ever make. When it comes time to sell, <b>maximizing value</b> is key. Fortunately, there are proven strategies that can significantly increase a property’s appeal without requiring a massive budget.</p><p><b>Curb appeal</b> is critical. Landscaping, exterior painting, and a welcoming entryway can instantly add value. Inside, <b>kitchens and bathrooms</b> remain the most influential areas. Simple updates—like new fixtures, refreshed cabinets, or energy-efficient appliances—yield strong returns.</p><p><b>Energy efficiency</b> is another powerful selling point. Homes with solar panels, smart thermostats, or high-efficiency windows often sell faster and at higher prices. Eco-conscious buyers are drawn to lower utility costs and sustainable living.</p><p><b>Decluttering and staging</b> are also essential. A clean, neutral, and well-staged home allows buyers to envision themselves living there. Professional photography and virtual tours enhance visibility, especially in online markets.</p><p>Finally, <b>timing</b> the sale matters. Spring and early summer bring the most buyers. By combining aesthetic improvements with practical upgrades, sellers can ensure their property stands out and commands maximum value.</p>",
            "tags": ["Real Estate", "Investment"]
        }
    ];

    const chipLabels = useMemo(() => {
        const uniqueTypes = Array.from(new Set(articles.flatMap(p => p.tags)));
        return ["All", ...uniqueTypes];
    }, [articles]);

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

    const handleOpen = (data: any) => {
        setViewBlogsOpen(true);
        setViewBlogsData(data);
    }

    const closeBasicDetails = () => {
        setViewBlogsOpen(false);
        setViewBlogsData([]);
    };

    useEffect(() => {
        if (ViewBlogsOpen) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [ViewBlogsOpen]);

    const filteredArticles = useMemo(() => {
        return articles
            .filter(article => {
                const matchesChip =
                    selectedChip === "All" || article.tags.includes(selectedChip);

                return matchesChip;
            })
            .map(article => ({
                ...article,
                CardClick: (data: any) => {
                    console.log("Card clicked:", data);
                }
            }));
    }, [articles, selectedChip, searchTerm]);

    const paginatedData = filteredArticles.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <Box sx={{ width: "100%" }}>
            {!ViewBlogsOpen ? (
                <Stack spacing={6} sx={{ mb: 2 }} >

                    <Box px={{ xs: 2, sm: 2, lg: 10 }} sx={{ mt: 2, }}>

                        <Typography
                            variant="h2"
                            sx={{
                                color: '#3d3d3d',
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                fontFamily: "'Nunito', sans-serif !important",
                                fontSize: { xs: '24px !important', sm: '24px', md: '24px', lg: '24px !important' },
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: { xs: '44px !important', sm: '44px', md: '44px', lg: '60px !important' },
                                textAlign: { xs: "center", lg: "left" }
                            }}
                            mb={2}
                            mt={1}
                        >
                            Recent Realty Insights
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
                                display: "flex",
                                gap: 3,
                                flexWrap: "wrap", // keeps it responsive
                            }}
                        >
                            {paginatedData.map((item, i) => (
                                <Card
                                    key={i}
                                    onClick={() => { console.log(item, "item"); handleOpen(item) }}
                                    sx={{
                                        borderRadius: "16px",
                                        border: "1px solid #E5E5E5",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                        maxWidth: 360,
                                        flex: "1 1 calc(33.33% - 24px)", // 3 cards in a row with gap
                                        cursor: "pointer",
                                        transition: "transform 0.2s",
                                        "&:hover": { transform: "translateY(-4px)" },
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            height: 180,
                                            objectFit: "cover",
                                            borderTopLeftRadius: "16px",
                                            borderTopRightRadius: "16px",
                                        }}
                                    />

                                    <CardContent sx={{ p: 3 }}>
                                        {/* Author + Date */}
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ color: "#4CB79E", fontWeight: 600, mb: 1 }}
                                        >
                                            {item.author} • {item.date}
                                        </Typography>

                                        {/* Title with Arrow */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                mb: 1,
                                            }}
                                        >
                                            <Typography variant="caption" fontWeight={600}>
                                                {item.title}
                                            </Typography>
                                            <ArrowOutwardIcon sx={{ fontSize: 20, color: "text.secondary" }} />
                                        </Box>

                                        {/* Description */}
                                        <Typography variant="subtitle2" color="text.secondary" mb={2}>
                                            {item.description}
                                        </Typography>

                                        {/* Tags */}
                                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                            {item.tags.map((tag, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        borderRadius: "20px",
                                                        fontSize: "12px",
                                                        fontWeight: 500,
                                                        fontFamily: "'Nunito', sans-serif !important",
                                                        backgroundColor:
                                                            idx === 0
                                                                ? "rgba(0, 200, 83, 0.1)" // Green tint
                                                                : idx === 1
                                                                    ? "rgba(63, 81, 181, 0.1)" // Blue tint
                                                                    : "rgba(255, 152, 0, 0.1)", // Orange tint
                                                    }}
                                                />
                                            ))}
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
                                count={Math.ceil(articles.length / itemsPerPage)}
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
                                disabled={page === Math.ceil(articles.length / itemsPerPage)}
                                onClick={() => setPage((prev) => prev + 1)}
                            >
                                Next
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            ) : (
                <Stack spacing={6} sx={{ mb: 2, mt: 3, }} px={{ xs: 2, sm: 2, lg: 7 }}>
                    <ViewBlogs data={ViewBlogsData} onClose={closeBasicDetails} />

                </Stack>
            )}
        </Box>
    );
}

export default Blogs;
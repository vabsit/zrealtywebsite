import {
    Avatar,
    Box, Button, Card, CardContent, CardMedia, IconButton, Stack, Typography,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

import {
    useMediaQuery,
    useTheme
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import { Breadcrumbs, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Image_Blob_Key } from "../../store/master/services/config/constant";


interface AddorEditApplicationProps {
    onClose?: () => void;
    data?: any;
    FrequentData?: any;
}

const LibraryImageViewer: React.FC<AddorEditApplicationProps> = ({
    onClose, data, FrequentData
}) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

    const CardData = data?.data ? data?.data : []
    const images = CardData ? CardData.multipleImages : []
    const ReleventProject = FrequentData ? FrequentData.filter((item:any) => item.library_Id !== CardData.library_Id) : []
    console.log(images, "images");


    const [index, setIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        setIndex((prev) => {
            const newIndex = (prev - 1 + images.length) % images.length;
            scrollToThumbnail(newIndex);
            return newIndex;
        });
    };

    const handleNext = () => {
        setIndex((prev) => {
            const newIndex = (prev + 1) % images.length;
            scrollToThumbnail(newIndex);
            return newIndex;
        });
    };
    const scrollToThumbnail = (i: number) => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const thumbnail = container.children[i] as HTMLElement;

        if (thumbnail) {
            const containerWidth = container.offsetWidth;
            const thumbnailWidth = thumbnail.offsetWidth;

            // calculate scroll position so that selected thumbnail is centered
            const scrollLeft =
                thumbnail.offsetLeft - containerWidth / 2 + thumbnailWidth / 2;

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        if (images && images?.length > 0) {
            setIndex(0);
        }
    }, [images]);

    const closeBasicDetails = () => {
        onClose && onClose();
    };
    console.log("CardData", CardData);

    const handleClick = (path: string) => {
        navigate(path);
    };

    const FormatedImageURL = (URL: string) => {
        return `${URL}?${Image_Blob_Key}`;
    };

    return (

        <>
            <Stack spacing={6} sx={{ mb: 2, }}>
                <Box >
                    <Box sx={{pb:3}}>
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
                                Library
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
                               {CardData.design_Type}
                            </Link>

                        </Breadcrumbs>
                        
                    </Box>
                    <Stack spacing={3} sx={{ alignItems: "left", mt: 2 }}>

                        <Typography
                            variant="h2"
                            sx={{
                                color: '#3D3D3D',
                                fontFamily: "'Nunito', sans-serif !important",
                                // fontFamily: "Segoe UI, sans-serif",
                                fontSize: '52px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '28px',
                            }}
                            mb={4}
                            mt={2}
                        >
                            {CardData.design_Type}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#3D3D3D',
                                fontFamily: "'Nunito', sans-serif !important",
                                // fontFamily: "Segoe UI, sans-serif",
                                fontSize: '18px !important',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '25px', // 120%
                                letterSpacing: '0.1px',
                                textAlign: "left",
                            }}
                            width={"95%"}
                        >
                            {CardData.description}
                        </Typography>

                    </Stack>

                    <Button
                        variant="contained"
                        onClick={closeBasicDetails}
                        sx={{
                            borderRadius: '30px',
                            background: ' #29B0A1',
                            textTransform: 'none',
                            color: '#fff',
                            fontWeight: 500,
                            px: 3,
                            mt: 3
                        }}

                    >
                        Use This Template Now!
                    </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                    <Box sx={{ maxWidth: {xs: "350px", sm: "500px", lg:"1000px"}, width: "100%" }}>
                        {/* Main Image */}
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: isMobile ? "250px" : "500px",
                                bgcolor: "#000",
                                borderRadius: 6,
                            }}
                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    position: "absolute",
                                    left: 10,
                                    bgcolor: "rgba(255,255,255,0.7)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#fff",         // background on hover
                                        "& .MuiSvgIcon-root": {
                                            color: "#000",         // icon color on hover
                                        },
                                    },
                                }}
                            >
                                <ChevronLeft sx={{ fontSize: "34px", color: "#3d3d3d" }} />
                            </IconButton>

                            {images && images?.length > 0 && (
                                <img
                                    src={FormatedImageURL(images[index]?.src) || "/placeholder.png"}
                                    alt=""
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        objectFit: "contain"
                                    }}
                                />
                            )}

                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    position: "absolute",
                                    right: 10,
                                    bgcolor: "rgba(255,255,255,0.7)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#fff",         // background on hover
                                        "& .MuiSvgIcon-root": {
                                            color: "#000",         // icon color on hover
                                        },
                                    },
                                }}
                            >
                                <ChevronRight sx={{ fontSize: "34px", color: "#3d3d3d" }} />
                            </IconButton>
                        </Box>

                        <Box sx={{ position: "relative", mt: 2 }}>
                            {/* Left Scroll Button */}
                            {/* <IconButton
                                onClick={() => scrollThumbnails("left")}
                                sx={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    bgcolor: "rgba(255,255,255,0.8)",
                                    zIndex: 1
                                }}
                            >
                                <ChevronLeft />
                            </IconButton> */}

                            {/* Thumbnails Container */}
                            <Box sx={{ position: "relative", mt: 2 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center", // keeps wrapper centered
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "75%",       // thumbnails area = 75% of main image width
                                            maxWidth: "1000px", // same max as main image container
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Box
                                            ref={scrollRef}
                                            sx={{
                                                display: "flex",
                                                overflowX: "auto",
                                                gap: 1,
                                                scrollBehavior: "smooth",
                                                "&::-webkit-scrollbar": { display: "none" },

                                            }}

                                        >
                                            {images?.map((item: any, i: any) => (
                                                <Box
                                                    key={i}
                                                    component="img"
                                                    src={FormatedImageURL(item?.src)}
                                                    alt=""
                                                    onClick={() => {
                                                        setIndex(i);
                                                        scrollToThumbnail(i);
                                                    }} sx={{
                                                        height: 100,
                                                        width: "auto",
                                                        border:
                                                            i === index
                                                                ? "3px solid #29B0A1"
                                                                : "2px solid transparent",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        flexShrink: 0
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Right Scroll Button */}
                            {/* <IconButton
                    onClick={() => scrollThumbnails("right")}
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(255,255,255,0.8)",
                        zIndex: 1
                    }}
                >
                    <ChevronRight />
                </IconButton> */}
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                overflowX: "auto",
                                scrollBehavior: "smooth",
                                gap: 3,
                                "&::-webkit-scrollbar": { display: "" },
                                maxWidth: "100%",
                                margin: "0 auto",
                            }}
                        >
                            {ReleventProject.map((item:any, i:number) => (
                                <Card
                                    key={i}
                                    sx={{
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                        minWidth: 280, // each card width
                                        flexShrink: 0, // prevent shrinking
                                    }}
                                >
                                    {/* Image + Overlay */}
                                    <Box sx={{ position: "relative" }}>
                                        <CardMedia
                                            component="img"
                                            image={FormatedImageURL(item.image)}
                                            loading="lazy"
                                            alt={item.userName}
                                            sx={{
                                                height: 160,
                                                objectFit: "cover",
                                            }}
                                        />
                                        {item.moreCount && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    bottom: 8,
                                                    left: 8,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 0.5,
                                                    // backgroundColor: "rgba(0,0,0,0.5)",
                                                    color: "#fff",
                                                    borderRadius: "20px",
                                                    px: 1,
                                                    py: 0.2,
                                                    fontSize: "15px !important",
                                                    fontWeight: 700
                                                }}
                                            >
                                                {/* <PhotoLibraryIcon sx={{ fontSize: "18px" }} /> */}
                                                {item.design_Type}
                                            </Box>
                                        )}
                                    </Box>

                                    {/* User Info */}
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "12px 16px",
                                        }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Avatar src={FormatedImageURL(item.profileUrl)} sx={{ width: 32, height: 32 }} />
                                            <Typography variant="body1" fontWeight={500}>
                                                {item.userName}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <VisibilityIcon sx={{ fontSize: 18, color: "#777" }} />
                                            <Typography variant="body2" color="text.secondary">
                                                {item.views}
                                            </Typography>
                                            <IconButton size="small">
                                                <ShareIcon sx={{ fontSize: 18 }} />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                </Box>

            </Stack>
        </>
    );
}

export default LibraryImageViewer;

import React, { useState } from "react";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Avatar,
    Typography,
    IconButton,
    Button,
    Pagination,
    Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Image_Blob_Key } from "../../store/master/services/config/constant";

interface Project {
    data?:any;
    image: string;
    moreCount: number;
    userName: string;
    profileUrl: string;
    views: string;
    CardClick: (data: any) => void;
}

interface CustomProjectCardProps {
    data: Project[];
    itemsPerPage?: number;
    onClick: (data: any) => void;
}

const ProjectCard: React.FC<Project> = ({
    data,
    image,
    moreCount,
    userName,
    profileUrl,
    views,
    CardClick,
}) =>{
console.log(`${profileUrl}?${Image_Blob_Key}`,"Image_Blob_Key");

    const FormatedImageURL = (URL: string) => {
        return `${URL}?${Image_Blob_Key}`;
    };
    return (

    <Card
    onClick={() => CardClick({ data })}
        sx={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
    >
        {/* Image + Overlay */}
        <Box sx={{ position: "relative" }}>
            <CardMedia
                component="img"
                loading="lazy"
                image={FormatedImageURL(image)}
                alt={userName}
                sx={{
                    height: 150,
                    objectFit: "cover",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: 8,
                    left: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    borderRadius: "20px",
                    px: 1,
                    py: 0.2,
                    fontSize: "14px",
                }}
            >
                <PhotoLibraryIcon sx={{ fontSize: "18px" }} />
                More ({moreCount})
            </Box>
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
                <Avatar src={FormatedImageURL(profileUrl)} sx={{ width: 32, height: 32 }} />
                <Typography variant="body1" fontWeight={500}>
                    {userName}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <VisibilityIcon sx={{ fontSize: 18, color: "#777" }} />
                <Typography variant="body2" color="text.secondary">
                    {views}
                </Typography>
                <IconButton size="small">
                    <ShareIcon sx={{ fontSize: 18 }} />
                </IconButton>
            </Box>
        </CardContent>
    </Card>
)};

const CustomProjectCard: React.FC<CustomProjectCardProps> = ({
    data,
    itemsPerPage = 8,
    onClick,
}) => {
    const [page, setPage] = useState(1);

    const handlePageChange = (_: any, value: number) => {
        setPage(value);
    };    

    const paginatedData = data.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleClick = (e: any) => {

        onClick(e);

    };

    return (
        <Box px={3}>
            {/* Cards */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: 3,
                    padding:{sm:"20px"}
                }}
            >
                {paginatedData.map((p, i) => (
                    <ProjectCard key={i} {...p} CardClick={(cardData) => onClick(cardData)} data={p} />
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
                    count={Math.ceil(data.length / itemsPerPage)}
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
                    disabled={page === Math.ceil(data.length / itemsPerPage)}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default CustomProjectCard;

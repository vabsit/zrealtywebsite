import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, Breadcrumbs, Link, Divider, Theme, useMediaQuery } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';


interface ViewTutorialProps {
    onClose?: () => void;
    data?: any;
    Groupdata?: any;
}

const API_KEY = "AIzaSyCB6NIzLuHBNYdRDlXrmfdNyJx3LPPvGKo";


const ViewTutorial: React.FC<ViewTutorialProps> = ({
    onClose, data, Groupdata
}) => {

    const selectedVideoIndex = Groupdata.findIndex((video: any) => video.tutorial_Id === data.tutorial_Id);
    const navigate = useNavigate();
    const [selectedVideo, setSelectedVideo] = useState<any>(Groupdata[selectedVideoIndex]);
    const isMobileOrTablet = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("md")
    );

    const closeBasicDetails = () => {
        onClose && onClose();
    };

    const handleClick = (path: string) => {
        navigate(path);
    };

    const [comments, setComments] = useState<Comment[]>([]);
    const [videoStats, setVideoStats] = useState<{ views: string; likes: string; comments: string }>({ views: "0", likes: "0", comments: "0" });

    const getVideoId = (url: string): string | null => {
        try {
            const parsed = new URL(url);
            return parsed.searchParams.get("v") || parsed.pathname.split("/").pop() || null;
        } catch (e) {
            return null;
        }
    };

    useEffect(() => {
        const videoId = getVideoId(selectedVideo.tutorialUrl);
        console.log(videoId, selectedVideo.tutorialUrl, "videoId");

        if (videoId) {
            fetch(
                `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=10`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (!data.items) {
                        console.warn("No comments found", data);
                        setComments([]);
                        return;
                    }

                    const formatted = data.items.map((item: any) => ({
                        tutorial_Id: item.tutorial_Id,
                        author: item.snippet.topLevelComment.snippet.authorDisplayName,
                        text: item.snippet.topLevelComment.snippet.textDisplay,
                        authorImage:
                            item.snippet.topLevelComment.snippet.authorProfileImageUrl,
                    }));

                    console.log(formatted, "formatted");
                    setComments(formatted);
                })
                .catch((err) => console.error("Error fetching comments:", err));

            fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.items?.length > 0) {
                        const stats = data.items[0].statistics;
                        setVideoStats({
                            views: stats.viewCount,
                            likes: stats.likeCount,
                            comments: stats.commentCount,
                        });
                    }
                });

        }
    }, [selectedVideo.tutorialUrl]);



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
                        Tutorial
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
                        {data.type}
                    </Link>

                </Breadcrumbs>

            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mt: 2 }}>

                {/* Left - Video Player */}
                <Box flex={isMobileOrTablet ? "1" : "4"}>
                    <Box
                        component="iframe"
                        src={selectedVideo.tutorialUrl}
                        width="100%"
                        height="400px"
                        sx={{ borderRadius: 2, border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Box sx={{ display: { xs: "block", md: "flex" }, justifyContent: "space-between" }}>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            {selectedVideo.title}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <VisibilityIcon sx={{ fontSize: 18, color: "#777" }} />
                                <Typography variant="body2" color="text.secondary">
                                    {videoStats.views}
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <ThumbUpIcon sx={{ fontSize: 18, color: "#777" }} />
                                <Typography variant="body2" color="text.secondary">
                                    {videoStats.likes}
                                </Typography>
                            </Box>

                            {/* <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <ShareIcon sx={{ fontSize: 18, color: "#777" }} />
                                <Typography variant="body2" color="text.secondary">
                                    {selectedVideo.share}
                                </Typography>
                            </Box> */}


                        </Box>

                    </Box>
                    {/* <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Comments
                        </Typography>
                        <List>
                            {comments.map((comment) => (
                                <React.Fragment key={comment.id}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar src={comment.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography variant="subtitle2" fontWeight="bold">
                                                    {comment.user}
                                                </Typography>
                                            }
                                            secondary={
                                                <>
                                                    <Typography
                                                        component="span"
                                                        variant="subtitle1"
                                                        color="text.primary"
                                                    >
                                                        {comment.text}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{ display: "block", mt: 0.5 }}
                                                    >
                                                        {comment.time} • Reply
                                                    </Typography>
                                                </>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    </Box> */}

                    <Box mt={3}>
                        <Typography variant="h6" gutterBottom>
                            User Comments
                        </Typography>
                        {comments.length === 0 ? (
                            <Typography variant="h5" color="text.secondary">
                                No comments available.
                            </Typography>
                        ) : (
                            <List>
                                {comments.map((c: any) => (
                                    <React.Fragment key={c.tutorial_Id}>
                                        <ListItem alignItems="flex-start">
                                            <Avatar src={c.authorImage} alt={c.author} sx={{ mr: 2 }} />
                                            <Box>
                                                <Typography variant="subtitle2">{c.author}</Typography>
                                                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: c.text }} />
                                            </Box>
                                        </ListItem>
                                        <Divider component="li" sx={{ mt: 1, mb: 1 }} />
                                    </React.Fragment>
                                ))}
                            </List>
                        )}
                    </Box>

                </Box>

                {/* Right - Video List */}
                <Box flex={isMobileOrTablet ? "1" : "1"} sx={{ mt: { xs: 3, md: 0 } }}>
                    <Typography variant="h6" gutterBottom>
                        Video List
                    </Typography>
                    <List>
                        {Groupdata.map((video: any) => (
                            <ListItem disablePadding key={video.tutorial_Id}>
                                {/* <ListItemButton onClick={() => setSelectedVideo(video)}> */}
                                <ListItemButton
                                    onClick={() => setSelectedVideo(video)}
                                    selected={selectedVideo.tutorial_Id === video.tutorial_Id}
                                    sx={selectedVideo.tutorial_Id === video.tutorial_Id ? {
                                        backgroundColor: "rgba(0, 128, 128, 0.08)",
                                        "&:hover": { backgroundColor: "rgba(0, 128, 128, 0.15)" }
                                    } : {}}>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "teal" }}>
                                            <PlayCircleIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={video.title}
                                        secondary={video.duration}
                                        primaryTypographyProps={{
                                            noWrap: true,
                                            sx: { fontSize: "14px" }
                                        }}
                                        secondaryTypographyProps={{
                                            sx: { fontSize: "12px", color: "gray" }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default ViewTutorial;

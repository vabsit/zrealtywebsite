import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, Breadcrumbs, Link, Divider, Theme, useMediaQuery } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';

const videoList = [
    {
        id: "1",
        title: "Zlendo Realty | How to create floor plan | Interior Design",
        duration: "4:30",
        url: "https://www.youtube.com/embed/2qCpY38ompo?si=MUHQtweVnaZZ3o_k",
        share: "12 K",
        likes: "12 K",
    },
    {
        id: "2",
        title: "Zlendo Realty | Choosing the right colors | Color Theory",
        duration: "3:15",
        url: "https://www.youtube.com/embed/Df5igmB9MAA?si=FCo5mgC7vExj5Urt",
        share: "12 K",
        likes: "12 K",
    },
    {
        id: "3",
        title: "Zlendo Realty | Furniture arrangement tips | Space Planning",
        duration: "5:00",
        url: "https://www.youtube.com/embed/1k2eznTgnXY?si=2iZnOgmWfqvcF1i6",
        share: "12 K",
        likes: "12 K",
    },
    {
        id: "4",
        title: "Zlendo Realty | Lighting for small spaces | Lighting Design",
        duration: "6:20",
        url: "https://www.youtube.com/embed/jf2dUCBscA0?si=kqmQJZ4jbb5lvWxj",
        share: "12 K",
        likes: "12 K",
    }
];

const comments = [
    { id: 1, user: "Eleanor Pena", text: "@Albert Flores That would be great!", time: "4 hours ago", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, user: "Harrison Wells", text: "@Darlene Dalton I'm interested in collaborating!", time: "3 hours ago", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, user: "Sophie Turner", text: "@Henry Cavill Let's set up a meeting!", time: "2 hours ago", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, user: "John Carter", text: "This tutorial was super helpful, thanks!", time: "1 hour ago", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: 5, user: "Diana Prince", text: "I loved the design tips here ❤️", time: "30 mins ago", avatar: "https://i.pravatar.cc/150?img=5" },
];
interface ViewTutorialProps {
    onClose?: () => void;
    data?: any;
}

const API_KEY = "AIzaSyCB6NIzLuHBNYdRDlXrmfdNyJx3LPPvGKo";


const ViewTutorial: React.FC<ViewTutorialProps> = ({
    onClose, data,
}) => {

    const navigate = useNavigate();
    const [selectedVideo, setSelectedVideo] = useState<any>(videoList[0]);
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
        const videoId = getVideoId(selectedVideo.url);
        console.log(videoId, selectedVideo.url, "videoId");

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
                        id: item.id,
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
    }, [selectedVideo.url]);



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
                        src={selectedVideo.url}
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
                                    <React.Fragment key={c.id}>
                                        <ListItem alignItems="flex-start">
                                            <Avatar src={c.authorImage} alt={c.author} sx={{ mr: 2 }} />
                                            <Box>
                                                <Typography variant="subtitle2">{c.author}</Typography>
                                                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: c.text }} />
                                            </Box>
                                        </ListItem>
                                        <Divider component="li" />
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
                        {videoList.map((video) => (
                            <ListItem disablePadding key={video.id}>
                                <ListItemButton onClick={() => setSelectedVideo(video)}>
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

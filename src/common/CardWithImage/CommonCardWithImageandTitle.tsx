import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

interface AudienceItem {
    image: string;
    title: string;
}

interface AudienceSectionProps {
    data: AudienceItem[];
}

const CommonCardWithImageandTitle: React.FC<AudienceSectionProps> = ({ data }) => {
    return (
        <Box sx={{ py: 4, textAlign: "center" }}>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 4,
                }}
            >
                {data.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: { xs: "140px", sm: "180px", md: "250px" },
                            textAlign: "center",
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{
                                height: 172,
                                width: "100%",
                                borderRadius: 2,
                                objectFit: "cover",
                                mb: 2,
                            }}
                        />
                        <Typography variant="subtitle1" fontWeight="bold" sx={{
                            lineHeight: "20px",
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                            whiteSpace: "normal",
                            paddingRight: 1,
                            color:"#3D3D3D"
                        }}>
                            {item.title}
                        </Typography>
                        
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CommonCardWithImageandTitle;

// AudienceCard.tsx

import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';

interface AudienceCardProps {
    image: string;
    title: string;
    description: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ image, title, description }) => {
    return (
        <Box>
            <Card
                sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    justifyContent: "center",
                    height: 350,
                    width: '90%',
                    mr: 2,
                    ml: 2,
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        color: '#fff',
                        // px: 2,
                        padding: 2,
                        // py: 2,
                        background: 'linear-gradient(180deg, rgba(41, 176, 161, 0.00) 0%, rgba(41, 176, 161, 0.91) 52.01%)',
                        boxSizing: "border-box",
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold" sx={{
                        lineHeight: "20px",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                        paddingRight: 1,
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="body2"
                        sx={{
                            lineHeight: "20px",
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                            whiteSpace: "normal",
                            paddingRight: 1,
                        }}>
                        {description}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default AudienceCard;

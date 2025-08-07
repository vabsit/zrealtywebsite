// CtaSection.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface CtaSectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({
    title = '',
    subtitle = '',
    buttonText = '',
    onButtonClick,
}) => {
    return (
        <Box sx={{ display: 'block', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
            {title && (
                <Typography variant="h3" fontWeight="bold" color='#3d3d3d' mb={4} mt={1}>
                    {title}
                </Typography>
            )}

            {subtitle && (
                <Typography variant="subtitle1" mb={4} mt={1} >
                    {subtitle}
                </Typography>
            )}

            {buttonText && (
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: '30px',
                        background: ' #29B0A1',
                        textTransform: 'none',
                        color: '#fff',
                        fontWeight: 500,
                        px: 2,
                    }}
                >
                    {buttonText}
                </Button>
            )}
        </Box>
    );
};

export default CtaSection;

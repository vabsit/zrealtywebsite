// TwoColumnLayout.tsx

import React from 'react';
import { Grid, Typography, Box, useTheme, Stack } from '@mui/material';
import { styled } from '@mui/system';
import ResponsiveGridItem from '../CommonSections/ResponsiveGridItem';

interface TwoColumnLayoutProps {
    title?: string;
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
    leftGrid?: number;  // default: 6
    rightGrid?: number; // default: 6
    gap?: number;       // default: 4 (spacing unit)
}

const Container = styled(Box)`
  width: 100%;
  padding: 3rem 2rem;
  background-color: #fff;
`;

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
    title,
    leftContent,
    rightContent,
    leftGrid = 6,
    rightGrid = 6,
    gap = 4,
}) => {
    const theme = useTheme();

    return (
        // <Container>
        <Stack width={"100%"} sx={{}}>
            {title && (
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                    <Typography variant="h3" fontWeight="bold" color='#3d3d3d' mb={2}>
                        {title}
                    </Typography>
                </Box>
            )}
            <Box sx={{pb:1, pl:4, pr:4}}>
                <Grid container spacing={gap} alignItems="center">
                    <ResponsiveGridItem item xs={12} sm={12} md={6} lg={leftGrid} xl={6}>
                        {leftContent}
                    </ResponsiveGridItem>
                    <ResponsiveGridItem item xs={12} sm={12} md={6} lg={rightGrid} xl={6}>
                        {rightContent}

                    </ResponsiveGridItem>
                </Grid>
            </Box>
        </Stack>
    );
};

export default TwoColumnLayout;

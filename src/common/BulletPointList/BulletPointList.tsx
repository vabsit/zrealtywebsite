// BulletListWithHeading.tsx

import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface BulletItem {
    heading?: string;
    description?: string;
}

interface BulletListWithHeadingProps {
    title: string;
    items: BulletItem[];
}

const BulletListWithHeading: React.FC<BulletListWithHeadingProps> = ({
    title,
    items,
}) => {
    return (
        <Box px={2} py={4}>
            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                    color: "#3D3D3D",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "30px",
                }}
            >
                {title}
            </Typography>

            <List>
                {items.map((item, index) => (
                    <Box key={index} mb={1}>
                        {item.heading && (
                            <Typography variant="subtitle1" fontWeight={600}>
                                {item.heading}
                            </Typography>
                        )}
                        {item.description && (
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: '32px' }}>
                                    <FiberManualRecordIcon sx={{ fontSize: 8, mt: 0.5 }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.description}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: "#3D3D3D",
                                            fontFeatureSettings: "'liga' off, 'clig' off",
                                            fontSize: "16px !important",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            // lineHeight: "38px",
                                        },
                                    }}
                                />
                            </ListItem>
                        )}
                    </Box>
                ))}
            </List>
        </Box>
    );
};

export default BulletListWithHeading;

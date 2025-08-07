// FaqItem.tsx

import React from 'react';
import { Box, Typography, IconButton, Collapse, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';


interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {

    const theme = useTheme();

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>

                <Typography variant="subtitle1" fontWeight="bold"
                    sx={{
                        color: '#3D3D3D',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: 'Nunito Sans',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '28px',
                    }}
                >
                    {question}
                </Typography>
                <IconButton onClick={onToggle}>
                    {isOpen ? <CloseIcon sx={{ fontSize: 24 }} /> : <AddIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />}
                </IconButton>
            </Box>

            <Collapse in={isOpen}>
                <Box sx={{display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center"}}>

                    <Typography
                        pb={2}
                        sx={{
                            color: '#3D3D3D',
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: 'Nunito Sans',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: '28px',
                        }}
                    >
                        {answer}
                    </Typography>

                </Box>
            </Collapse>

            <Divider />
        </Box>
    );
};

export default FaqItem;

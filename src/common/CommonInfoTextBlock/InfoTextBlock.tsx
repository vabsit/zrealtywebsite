// InfoTextBlock.tsx

import React from 'react';
import { Typography, Button, Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface InfoTextBlockProps {
  label?: string;                      // Optional top label
  title: string;                       // Required title
  description: string;                // Required body text
  buttonText?: string;                // Optional button text
  onButtonClick?: () => void;         // Optional button click handler
}

const InfoTextBlock: React.FC<InfoTextBlockProps> = ({
  label,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
    const theme = useTheme();
  return (
    <Stack spacing={3} sx={{alignItems: "start"}}>
      {label && (
        <Typography
          variant="subtitle2"
          sx={{
            background: theme.palette.secondary.main,
            padding: '6px 12px',
            display: 'inline-block',
            color: theme.palette.primary.main,
            borderRadius: 1,
            mb: 1.5,
          }}
        >
          {label}
        </Typography>
      )}

      <Typography variant="h4" fontWeight="bold" fontSize={20} gutterBottom>
        {title}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {description}
      </Typography>

      {buttonText && (
        <Button variant="text" sx={{ p: 0 , fontSize:"18px"}} onClick={onButtonClick}>
          {buttonText} →
        </Button>
      )}
    </Stack>
  );
};

export default InfoTextBlock;

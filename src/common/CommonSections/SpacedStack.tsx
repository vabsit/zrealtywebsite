import { Stack, StackProps, Theme, useTheme } from '@mui/material';
import React from 'react';

interface SpacedStackProps extends StackProps {
  children: React.ReactNode;
  spacing?: number | string | Record<string, number | string>;
}

const SpacedStack = ({ 
  children, 
  spacing = 3,
  ...props 
}: SpacedStackProps) => {
  const theme = useTheme();
  
  // Handle responsive spacing
  const getSpacing = () => {
    if (typeof spacing === 'object') {
      return {
        xs: theme.spacing(spacing.xs || 1),
        sm: theme.spacing(spacing.sm || spacing.xs || 1),
        md: theme.spacing(spacing.md || spacing.sm || spacing.xs || 2),
        lg: theme.spacing(spacing.lg || spacing.md || spacing.sm || spacing.xs || 2),
        xl: theme.spacing(spacing.xl || spacing.lg || spacing.md || spacing.sm || spacing.xs || 3)
      };
    }
    return theme.spacing(Number(spacing));
  };

  return (
    <Stack 
      spacing={getSpacing()} 
      {...props}
    >
      {children}
    </Stack>
  );
};

export default SpacedStack;
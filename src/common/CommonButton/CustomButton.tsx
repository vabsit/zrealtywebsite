import React, { forwardRef } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface Buttonfield {
  name: string;
  onClick: (e: any, value?: any) => void;
  variant?: 'outlined' | 'text' | 'contained';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disableElevation?: boolean;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  loading?: boolean;
  rounded?: boolean;
  className?: string;
  valuePass?: any;
}

const StyledButton = styled(Button)<{ variant: string }>(({ theme, variant }) => ({
  borderRadius: 30,
  fontWeight: 500,
  textTransform: 'none',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  ...(variant === 'outlined' && {
    borderColor: '#ccc',
    color: '#29B0A1',
  }),
  ...(variant === 'contained' && {
    backgroundColor: '#29B0A1',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#219384',
    },
  }),
}));

const CustomButton = forwardRef<HTMLButtonElement, Buttonfield>((props, ref) => {
  const {
    name,
    onClick,
    variant = 'contained',
    size = 'small',
    color = 'primary',
    disabled,
    startIcon,
    endIcon,
    disableElevation = true,
    href,
    target,
    type = 'button',
    fullWidth,
    loading,
    className,
    valuePass,
  } = props;

  const handleClick = (e: any) => {
    if (valuePass !== undefined) {
      onClick(e, valuePass);
    } else {
      onClick(e);
    }
  };

  return (
    <StyledButton
      id={`button-id-${name}`}
      key={`button-id-${name}`}
      onClick={handleClick}
      disableElevation={disableElevation}
      className={className}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled || loading}
      size={size}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      ref={ref}
    >
      {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        <Typography sx={{ whiteSpace: 'nowrap' }}>{name}</Typography>
      )}
    </StyledButton>
  );
});

export default CustomButton;

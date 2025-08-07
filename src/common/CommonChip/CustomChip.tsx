import { Chip, IconButton, withStyles } from "@mui/material";
import React, { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import CustomSvgIcon from "../customsvg";

interface CustomDialogProps {
  label: string;
  title?: string;
  onDelete?: any;
  onClick?: () => void;
  variant?: "outlined" | "filled";
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  // | "tertiary";
  size?: "small" | "medium";
  icon?: any;
}

const CustomChip: React.FC<CustomDialogProps> = (props) => {
  const theme = useTheme();
  const {
    label,
    title,
    onDelete,
    onClick,
    variant = "filled",
    color = "default",
    size = "medium",
    icon = null,
  } = props;

  return (
    <>
      <Chip
        size={size}
        color={color}
        label={label}
        variant={variant}
        onDelete={onDelete ? onDelete : undefined}
        onClick={onClick ? onClick : undefined}
        title={title || label}
        deleteIcon={
          <IconButton>
            {icon !== null ? icon : <CustomSvgIcon  size="12px" name="plus" />}
          </IconButton>
        }
      />
    </>
  );
};

export default CustomChip;

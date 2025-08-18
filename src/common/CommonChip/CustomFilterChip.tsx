import React from "react";
import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomChipProps {
  label: string;
  onClick?: () => void;
  onDelete?: () => void;
  selected?: boolean; // true => teal background
}

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  borderRadius: "12px",
  fontSize: "20px",
  fontWeight: 500,
  padding: "19px 10px",
  border: `1px solid ${selected ? "transparent" : "#4CB79E"}`,
  background: selected ? "#21b9ad" : "transparent",
  color: selected ? "#fff" : "#383838",
  "&:hover": {
    background: selected ? "#269F91" : "rgba(33, 185, 173, 0.1)",
    borderColor: "#4CB79E",
  },
  "& .MuiChip-label": {
    padding: "0 12px",
  },
}));

const CustomChip: React.FC<CustomChipProps> = ({ label, onClick, selected, onDelete }) => {
  return (
    <StyledChip
      label={label}
      onClick={onClick}
      selected={selected}
      clickable
      onDelete={onDelete}
    />
  );
};

export default CustomChip;

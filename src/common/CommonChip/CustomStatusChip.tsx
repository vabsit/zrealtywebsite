import { Box, Chip, IconButton, Typography, withStyles } from "@mui/material";
import React, { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import CustomSvgIcon from "../customsvg";

interface CustomStatusChipProps {
  label: string;
  onClick?: () => void;
  status?: "NS" | "WIP" | "C" | "E";
  color?: any;
  icon?: any;
  height?: number;
}

const CustomStatusChip: React.FC<CustomStatusChipProps> = (props) => {
  const theme = useTheme();
  const {
    label,
    onClick,
    status = "NS",
    color = null ,
    icon = null,
    height = 26 ,
  } = props;

  const statusColors: { [key: string]: string } = {
    NS: "#6A6A6A",
    WIP: "#FFC536",
    C: "#0FC400",
    E: theme.palette.error.main,
    default: "#6A6A6A",
  };
  return (
    <>
<Box 
  key={`statuschip-${label}`}
  sx={{
    height: `${height}px`,
    display: "flex",
    justifyContent:'center',
    alignItems: "center",
    border: `1px solid ${color || statusColors[status] || statusColors.default}`,
    borderRadius: "12px", 
    padding: "5px 10px",
    gap: "5px",
  }}
>
<Box sx={{display :'flex' ,position :'relative' , top :'3px'}}>
<CustomSvgIcon
    color={ 
      status === "NS" ? "#6A6A6A" : 
      status === "WIP" ? "#FFC536" : 
      status === "E" ? theme.palette.error.main : 
      status === "C" ? "#0FC400" : 
      "#6A6A6A"  }
    size="18px"
    name={ 
      status === "NS" ? "error_cross" : 
      status === "WIP" ? "error_cross" : 
      status === "E" ? "error_cross" : 
      status === "C" ? "sucess_tick" : 
      "sucess_tick" 
      }
  />
</Box>

  <Typography 
    variant="caption" 
    gutterBottom 
    sx={{ position :'relative' , top :'3px', fontSize: '14px', color: color || statusColors[status] || statusColors.default }}
  >
    {label}
  </Typography>
  

</Box>
      
    </>
  );
};

export default CustomStatusChip;

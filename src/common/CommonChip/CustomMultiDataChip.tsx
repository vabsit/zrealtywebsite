import { Box, Typography, Tooltip } from "@mui/material";
import React, { useMemo } from "react";
import { useTheme } from "@mui/material/styles";

interface CustomMultiDataChipProps {
  labels: string;
  onClick?: () => void;
  status?: "NS" | "WIP" | "C" | "E";
  color?: any;
  height?: number;
  showCount?: number;
}

const CustomMultiDataChip: React.FC<CustomMultiDataChipProps> = (props) => {
  const theme = useTheme();
  const {
    labels,
    onClick,
    status = "NS",
    color = null,
    showCount = 2,
    height = 36,
  } = props;

  const statusColors: { [key: string]: string } = {
    NS: "#6A6A6A",
    WIP: "#FFC536",
    C: "#0FC400",
    E: theme.palette.error.main,
    default: "#E0E0E0",
  };

  const valuesArray = labels ? labels.split(',') : [];

  const mappedValues = useMemo(() => {
    return valuesArray.slice(0, showCount).map((value: any, index: any) => (
      <Box
        key={`statuschip-${value}-${index + 1}`}
        sx={{
          height: `${height}px`,
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          border: `1px solid ${color || statusColors[status] || statusColors.default}`,
          borderRadius: "10px",
          padding: "3px 8px", 
          gap: "5px",
          marginRight: "8px",
          width: 'fit-content'
        }}
      >
        <Typography
          variant="caption"
          gutterBottom
          sx={{ position: 'relative', top: '3px', fontSize: '14px', color: color || statusColors[status] || statusColors.default }}
        >
          {value}
        </Typography>
      </Box>
    ));
  }, [valuesArray, color, status, height, statusColors]);

  const remainingCount = useMemo(() => valuesArray.length - showCount, [valuesArray]);
  const remainingItems = useMemo(() => valuesArray.slice(showCount).join(', '), [valuesArray]);
  const showMore = remainingCount > 0;

  return (
    <>
               <Box
  sx={{
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "16px",
  }}
>
     <Box
           sx={{
             width: "100%",
             display: "flex",
             flexWrap: "wrap",   
             gap: "8px",      
             alignItems: "center" 
           }}
             >
      {mappedValues}
      {showMore && (
        <Tooltip title={remainingItems} arrow>
          <Box
            sx={{
              height: `${height}px`,
              display: "flex",
              justifyContent: 'center',
              alignItems: "center",
              border: `1px solid ${color || statusColors[status] || statusColors.default}`,
              borderRadius: "10px",
              padding: "3px 8px",
              gap: "5px",
              cursor: 'pointer'
            }}
          >
            <Typography
              variant="caption"
              gutterBottom
              sx={{ position: 'relative', top: '3px', fontSize: '14px', color: color || statusColors[status] || statusColors.default }}
            >
              {`+${remainingCount}`}
            </Typography>
          </Box>
        </Tooltip>
      )}
      </Box>
      </Box>
    </>
  );
};

export default CustomMultiDataChip;

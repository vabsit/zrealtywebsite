import { Box, Typography, Tooltip } from "@mui/material";
import React, { useMemo } from "react";
import { useTheme } from "@mui/material/styles";

interface labelsProps {
     label : string,
     value : string,
}

interface CustomMultiChipWithLableProps {
  labels: labelsProps[];
  onClick?: () => void;
  status?: "NS" | "WIP" | "C" | "E";
  color?: any;
  height?: number;
  showCount?: number;
  rowDataCount?: number;
}

const CustomMultiChipWithLable: React.FC<CustomMultiChipWithLableProps> = (props) => {
  const theme = useTheme();
  const {
    labels,
    onClick,
    status = "NS",
    color = null,
    showCount = 2,
    height = 36,
    rowDataCount = 2
  } = props;

  const statusColors: { [key: string]: string } = {
    NS: "#6A6A6A",
    WIP: "#FFC536",
    C: "#0FC400",
    E: theme.palette.error.main,
    default: "#6A6A6A",
  };

  const valuesArray = labels;

  const mappedValues = useMemo(() => {
    return valuesArray.slice(0, showCount).map((value, index) => (
      <Box
        key={`statuschip-${value?.label}-${index + 1}`}
        sx={{
          height: `${height}px`,
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          border: `1px solid #E0E0E0`, 
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
          sx={{ 
            textAlign: "left",
            fontSize: '14px', 
            color: "#5F6368",
            marginBottom : "0px"
          }}
        >
          {value?.label} {" : "}
        </Typography>
        <Typography
          variant="caption"
          gutterBottom
          sx={{
            fontWeight: "500",
            textAlign: "left",
            fontSize: '14px', 
            color: "#202124",
             marginBottom : "0px"
          }}
        >
          {value?.value}
        </Typography>
      </Box>
    ));
  }, [valuesArray, color, status, height, statusColors]);
  
  const remainingCount = useMemo(() => valuesArray.length - showCount, [valuesArray]);
  const remainingItems = useMemo(
    () =>
      labels
        .slice(showCount)
        .map((item) => `${item.label}: ${item.value}`)
        .join(", "),
    [labels, showCount]
  );
  const showMore = remainingCount > 0;

  return (
    <>
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
            border: `1px solid #E0E0E0`, 
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
              sx={{ 
                textAlign: "left",
                fontSize: '14px', 
                color: "#5F6368",
                marginBottom : "0px"
              }}
            >
              {`+${remainingCount}`}
            </Typography>
          </Box>
        </Tooltip>
      )}
      </Box>
    </>
  );
};

export default CustomMultiChipWithLable;

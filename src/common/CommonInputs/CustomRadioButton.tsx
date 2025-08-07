import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { memo } from "react";

type TooltipPlacement =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";
interface groupList {
  value: any;
  lable: any;
}
interface infoListData {
  value: any;
  label: any;
}

interface InputProps {
  label: string;
  value: any;
  list: groupList[];
  required?: boolean;
  error?: boolean | undefined; // Error message or boolean indicating presence of error
  onChange?: (value: any) => void; // onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  readOnly?: boolean; // Disabled state
  helperText?: string; // Helper text
  Width?: any;
  direction?: string;
  style?: any;
  isInfo?: any;
  infoList?: infoListData[];
  arrow?: boolean;
  placement?: TooltipPlacement;
}

const CustomRadioButton = memo((props: InputProps) => {
  const {
    label,
    value,
    required = false,
    error,
    onChange,
    className,
    disabled = false,
    readOnly = false,
    helperText,
    Width = "100%",
    list,
    direction = "row",
    style,
    isInfo,
    infoList,
    arrow,
    placement,
  } = props;

  return (
    <>
      <FormControl required={required} sx={{ width: Width }} error={error} variant="standard">
        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ textAlign: "start", color: "#1F1F1F !important" }}>
          {label}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={(e: any) => {
            if (onChange && !readOnly) {
              onChange(e.target?.value);
            }
          }}
          row={direction === "row" ? true : false}
        >
          {!isInfo &&
            list &&
            list.map((item) => (
              <FormControlLabel
                style={style}
                value={item.value}
                control={<Radio readOnly={readOnly} disabled={disabled} />}
                label={item.lable}
              />
            ))}
          {isInfo &&
            list &&
            list.map((item) => {
              const info = infoList?.find((infoItem) => infoItem.label === item.lable);
              const tooltip = info ? info.value : null;

              return (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, pr: 2 }} key={item.value}>
                  <FormControlLabel
                    style={style}
                    value={item.value}
                    control={<Radio readOnly={readOnly} disabled={disabled} />}
                    label={item.lable}
                  />
                
                </Box>
              );
            })}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
});
export default CustomRadioButton;

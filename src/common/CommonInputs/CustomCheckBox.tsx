import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";
import { memo } from "react";

interface InputProps {
  label?: string;
  name: string;
  value: any;
  required?: boolean;
  isStyle?: boolean;
  error?: boolean | undefined; // Error message or boolean indicating presence of error
  onChange?: (e: any) => void; // onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  readOnly?: boolean; // Disabled state
  helperText?: string; // Helper text
  Width?: any;
  direction?: string;
  alignItems?: string;
  indeterminate?: boolean;
  withLabelStyle?: boolean;
}
const CustomCheckBox = memo((props: InputProps) => {
  const {
    label,
    name,
    value,
    required = false,
    error,
    onChange,
    className,
    isStyle = true,
    disabled = false,
    readOnly = false,
    helperText,
    Width = "100%",
    direction = "row",
    alignItems = "left",
    indeterminate,
    withLabelStyle = false,
  } = props;

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: withLabelStyle ? "start" : "center",
          alignItems: alignItems,
          ml: error ? 0 : 2,
        }}
      >
        <FormControl
          required={required}
          sx={{ width: withLabelStyle ? "auto" : Width, alignItems: alignItems }}
          error={error}
          variant="standard"
        >
          <FormControlLabel
            sx={
              withLabelStyle
                ? {
                    flexDirection: "row-reverse",
                    display: "flex",
                    columnGap: "70px",
                  }
                : {}
            }
            control={
              <Checkbox
                sx={{ marginRight: isStyle ? "10px" : "0px" }}
                checked={value}
                readOnly={readOnly}
                disableRipple={readOnly}
                disabled={disabled}
                indeterminate={indeterminate}
                onChange={(e) => {
                  if (onChange && !readOnly) {
                    
                    onChange(e.target.checked);
                  }
                }}
              />
            }
            label={label}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
});
export default CustomCheckBox;

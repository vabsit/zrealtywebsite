import { TextField, TextFieldVariants } from "@mui/material";
import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";

interface InputProps {
  name: string;
  label: string;
  value: any;
  variant?: TextFieldVariants;
  isDecimal?: boolean;
  required?: boolean;
  error?: string | boolean; // Error message or boolean indicating presence of error
  onChange?: (value: any, name?: string) => void; /// onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  readOnly?: boolean; // Disabled state
  helperText?: string; // Helper text
  inputProps?: object; // Additional input element attributes
  Width?: any;
  size?: "small" | "medium";
  onKeyDown?: (e: any) => void;
}

const CustomNumberField = memo((props: InputProps) => {
  const theme = useTheme();
  const {
    name,
    label,
    value,
    variant = "outlined",
    required = false,
    error,
    onChange,
    className,
    disabled = false,
    readOnly = false,
    helperText,
    inputProps,
    Width = "100%",
    size = "small",
    isDecimal = false,
    onKeyDown,
  } = props;
  return (
    <TextField
      label={label}
      fullWidth
      type="number"
      variant={variant}
      required={required}
      error={!!error}
      helperText={helperText ? helperText : error}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        // Filter out non-numeric characters
        if (e.target.value) {
          // e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/[eE]/g, '');
        }
      }}
      onChange={(e: any) => {
        const filteredValue = e.target.value
          .replace(new RegExp(`[^0-9${isDecimal ? "." : ""}]`, "g"), "")
          .replace(/[eE]/g, "");
        // const numericValue = isDecimal ? parseFloat(filteredValue || "0") : parseInt(filteredValue || "0");

        if (onChange && !readOnly) {
          onChange(filteredValue, name);
        }
      }}
      onBlurCapture={(e: any) => {
        const filteredValue = e.target.value
          .replace(new RegExp(`[^0-9${isDecimal ? "." : ""}]`, "g"), "")
          .replace(/[eE]/g, "");
        if (onChange && !readOnly) {
          // onChange(isNaN(numericValue) ? "" : numericValue, name);
          onChange(filteredValue, name);
        }
      }}
      onKeyDown={onKeyDown}
      value={value}
      className={className}
      disabled={disabled}
      InputProps={{
        ...inputProps,
        readOnly: readOnly || false,
      }}
      InputLabelProps={{
        style: {
          color: !!error ? "#1F1F1F" : undefined,
        },
        shrink: value !== undefined && value !== null && value !== "" ? true : false,
      }}
      id={`outlined-basic-${name}`}
      sx={{
        width: Width,
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: error ? "1px solid #D70000" : `1px solid ${theme.palette.primary.main}`,
        },
      }}
      size={size}
    />
  );
});
export default CustomNumberField;

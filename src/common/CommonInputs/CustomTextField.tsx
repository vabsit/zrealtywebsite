import { TextField, TextFieldVariants } from "@mui/material";
import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { color_defaultinput_background, } from "../../App";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value: any;
  variant?: TextFieldVariants;
  required?: boolean;
  readOnly?: boolean;
  error?: string | boolean; // Error message or boolean indicating presence of error
  onChange?: (value: any, name?: string) => void; /// onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  helperText?: string; // Helper text
  inputProps?: object; // Additional input element attributes
  Width?: any;
  placeholder?: any;
  size?: "small" | "medium";
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomTextField = memo((props: InputProps) => {
  const theme = useTheme();
  const {
    name,
    label,
    type = "text",
    value,
    variant = "outlined",
    required = false,
    readOnly = false,
    error,
    onChange,
    className,
    onKeyDown,
    disabled = false,
    helperText,
    inputProps,
    placeholder,
    onBlur,
    Width = "100%",
    size = "small",
  } = props;

  return (
    <TextField
     
      label={label}
      fullWidth
      type={type}
      variant={variant}
      required={required}
      placeholder={placeholder}
      error={!!error}
      helperText={helperText ? helperText : error}
      onChange={(e:any) => {
        if (onChange && !readOnly) {
          onChange(type === "number" && e.target?.value?  Number(e.target?.value) : e.target?.value, name);
        }
      }}
      onBlurCapture={(e:any) => {
        if (onBlur && !readOnly) {
          onBlur(e);
        }
        if (onChange && !readOnly) {
          onChange(type === "number" && e.target?.value ? Number(e.target?.value.trim()) : e.target?.value.trim(), name);
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
     
      id={`outlined-basic-${name}`}
      sx={{
        width: Width,
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: error ? `1px solid ${theme.palette.error.main}` : `1px solid ${color_defaultinput_background}`,
        }
      }}
      size={size}
     
    />
  );
});
export default CustomTextField;

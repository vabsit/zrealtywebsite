import { TextField, TextFieldVariants } from "@mui/material";
import React, { memo } from "react";

interface InputProps {
  label: string;
  name: string;
  value: any;
  variant?: TextFieldVariants;
  required?: boolean;
  readOnly?: boolean;
  error?: string | boolean; // Error message or boolean indicating presence of error
  onChange?: (value: any) => void; // onChange event handler
  onBlur?: (value: any) => void; // onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  helperText?: string; // Helper text
  inputProps?: object; // Additional input element attributes
  maxRows?: number;
  rows?: any;

}

const CustomMultilineTextField = memo((props: InputProps) => {
  const {
    label,
    name,
    value,
    variant = "outlined",
    required = false,
    error,
    onChange,
    onBlur,
    className,
    disabled = false,
    readOnly = false,
    helperText,
    inputProps,
    maxRows,
    rows = 4,
  } = props;

 
  
    
    return (
        <TextField
            label={label}
            fullWidth
            key={name}
            maxRows={maxRows}
            rows ={rows ? rows : undefined}
            multiline
            variant={variant}
            required={required}
            error={!!error} 
            helperText={helperText ? helperText : ''} 
            onChange={((e:any) => {
                if (onChange && !readOnly) {
                    onChange(e.target?.value);
                }
            })}
            onBlurCapture={(e: any) => {
              if (onBlur && !readOnly) {
                onBlur(e);
              }
                if (onChange && !readOnly) {
                  onChange(e.target?.value.trim());
                }
              }}
              
              

            value={value}
            className={className}
            disabled={disabled}
            // inputProps={inputProps}
            id="outlined-basic"
            InputLabelProps={{
                style: {
                  color: !!error ? '#1F1F1F' : undefined,
                },
              }}
              InputProps={{
                ...inputProps,
                readOnly: readOnly || false,
              }}
        />
    );
})
export default CustomMultilineTextField;

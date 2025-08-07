import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
interface OTPInputProps {
    name?: string;
    label?: string;
    type?: string;
    value?: any;
    required?: boolean;
    readOnly?: boolean;
    error?: string | boolean; // Error message or boolean indicating presence of error
    onChange?: (value: any, name?: string) => void; /// onChange event handler
    className?: string; // Custom CSS class
    disabled?: boolean; // Disabled state
    helperText?: string; // Helper text
    inputProps?: object; // Additional input element attributes
    Width?: any;
    length?: number;
    size?: "small" | "medium";
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomOTPInput: React.FC<OTPInputProps> = ({ name,
    label,
    type = "text",
    value,
    required = false,
    readOnly = false,
    error,
    onChange,
    className,
    onKeyDown,
    disabled = false,
    length = 6,
    helperText,
    inputProps,
    onBlur,
    Width = "100%",
    size = "small", }) => {
        const theme = useTheme();
  const [inputValues, setInputValues] = useState<string[]>(Array(length).fill(""));

  useEffect(() => {
    if(value){
        const splitValues = value?.split("").slice(0, length);
        const paddedValues = [...splitValues, ...Array(length - splitValues.length).fill("")];
    }
  }, [value, length]);

  const handleChange = (index: number, newValue: string) => {
    if (!/^\d?$/.test(newValue)) return; // Allow only digits or empty
     
    const updatedValues = [...inputValues];
    updatedValues[index] = newValue;
    setInputValues(updatedValues);

    const combinedValue = updatedValues.join("");
    onChange && onChange(combinedValue);

    // Automatically move to the next input if valid
    if (newValue && index < length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !inputValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) (prevInput as HTMLInputElement).focus();
    }
  };

  return (
    <Box display="flex" gap={1}>
      {Array.from({ length }).map((_, index) => (
        <TextField
          key={index}
          id={`otp-input-${index}`}
          value={inputValues[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e : any) => handleKeyDown(index, e)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: "center", fontSize: "1.2rem", width: "40px" , height:'18px' },
          }}
          variant="outlined"
              InputProps={{
                      sx: {
                        boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25) inset",
                        "& input::placeholder": {
                          fontWeight: "bold",
                        },
                        "& input:-ms-input-placeholder": {
                          fontWeight: "bold",
                        },
                        "& input::-ms-input-placeholder": {
                          fontWeight: "bold",
                        },
                      }
                    }}
          sx={{
            width: `${100/length}%`,
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: error ? "1px solid #D70000" : `1px solid ${theme.palette.primary.main}`,
            }
          }}
          size={size}
        
        />
      ))}
    </Box>
  );
};

export default CustomOTPInput;

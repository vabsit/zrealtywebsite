import React, { memo, useEffect, useState } from 'react';
import { TextField, TextFieldVariants } from '@mui/material';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useTheme } from '@mui/material/styles';

interface InputProps {
  label: string;
  value: any;
  format?: string;
  variant?: TextFieldVariants;
  required?: boolean;
  error?: boolean;
  onChange?: (value: any) => void;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string;
  inputProps?: object;
  Width?: string;
  size?: 'small' | 'medium';
  minutesStep?:any;
}

const CustomTimePicker = memo((props: InputProps) => {
  const theme = useTheme();
  const {
    label,
    value,
    format = 'HH:mm', 
    variant = 'outlined',
    required = false,
    error,
    onChange,
    className,
    disabled = false,
    readOnly = false,
    helperText,
    inputProps,
    Width = '100%',
    size = 'small',
    minutesStep=5,
  } = props;

  const [timeFormat, setTimeFormat] = useState(format);
  const defaultTime = dayjs();

  useEffect(() => {
    if (format) {
      setTimeFormat(format);
    }
  }, [format]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={value ? dayjs(value) : null} 
        readOnly={readOnly}
        disabled={disabled}
        format={timeFormat}
        onChange={(newValue: any) => {
          if (onChange && !readOnly) {
            onChange(newValue);
          }
        }}
        minutesStep={minutesStep}
        slotProps={{
          textField: {
            error: error,
            helperText: helperText,
            required: required,
            variant: variant,
            style: { width: Width },
            size: size,
            inputProps: inputProps,
          },
        }}
        sx={{
          width: Width,
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: error ? "1px solid #D70000" : `1px solid ${theme.palette.primary.main}`,
          },
        }}
      />
    </LocalizationProvider>
  );
});

export default CustomTimePicker;

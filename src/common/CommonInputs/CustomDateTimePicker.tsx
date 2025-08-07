import { TextField, TextFieldVariants } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { memo, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useTheme } from "@mui/material/styles";

interface InputProps {
  label: string;
  format?: string;
  value: any;
  variant?: TextFieldVariants;
  required?: boolean | undefined;
  error?: boolean | undefined;
  onChange?: (value: any) => void;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string | undefined;
  inputProps?: object;
  Width?: any;
  maxDate?: any;
  minDate?: any;
  view?: any;
  size?: "small" | "medium";
  disablePastDates?: boolean;
  disableFutureDates?: boolean;
}

const CustomDateTimePicker = memo((props: InputProps) => {
  const theme = useTheme();
  const currentDate = dayjs();
  const {
    label,
    format,
    value,
    variant = "outlined",
    minDate = currentDate.subtract(100, "year").toDate(),
    maxDate = currentDate.add(100, "year").toDate(),
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
    disablePastDates = false,
    disableFutureDates = false,
  } = props;

  const [dateTimeFormat, setDateTimeFormat] = useState("YYYY-MM-DD HH:mm");
  const defaultTime = dayjs();
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={value ? dayjs(value) : null}
        readOnly={readOnly}
        disabled={disabled}
        disablePast={disablePastDates}
        disableFuture={disableFutureDates}
        minDate={dayjs(minDate)}
        maxDate={dayjs(maxDate)}
        format={dateTimeFormat}
        onChange={(newValue: Dayjs | null) => {
          if (onChange && !readOnly) {
            onChange(newValue ? newValue.toDate() : null);
          }
        }}
        slotProps={{
          field: {
            clearable: true,
            onClear: () => {
              if (onChange) {
                onChange(null);
              }
            },
          },
          textField: {
            onKeyDown: (e: any) => e.preventDefault(),
            error: error,
            helperText: helperText,
            required: required,
            variant: variant,
            style: { width: Width },
            size: size,
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

export default CustomDateTimePicker;

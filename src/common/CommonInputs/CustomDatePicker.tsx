import { TextField, TextFieldVariants } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useTheme } from "@mui/material/styles";
import { getDateOrConvertDateTime } from '../../utils/dateformater';

interface InputProps {
    label: string;
    name: string;
    format? : string;
    value: any;
    variant?: TextFieldVariants;
    required?: boolean | undefined;
    error?:  boolean | undefined; // Error message or boolean indicating presence of error
    onChange?: (value: any ) => void; /// onChange event handler
    className?: string; // Custom CSS class
    disabled?: boolean; // Disabled state
    readOnly ?: boolean; // Disabled state
    helperText?: string | undefined; // Helper text
    inputProps?: object; // Additional input element attributes
    Width?: any
    maxDate? : any ,
    minDate? : any ,
    view? : any
    size?: 'small' | 'medium';
    disablePastDates?: boolean;
}

const CustomDatePicker = memo((props: InputProps) => {
  const theme = useTheme();
    const currentDate = dayjs();
    const {
        label,
        name,
        format,
        value,
        variant = "outlined",
        minDate =  currentDate.subtract(100, 'year').toDate(),
        maxDate = currentDate.add(100, 'year').toDate() ,
        required = false,
        error,
        onChange,
        className,
        disabled = false,
        readOnly  = false,
        helperText,
        inputProps,
        Width = '100%',
        view = ['month', 'year'],
        size= "small",
        disablePastDates = false, 
    } = props;

    const [dateFormat, SetDateFormat] = useState("DD-MM-YYYY");
  

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
          key={name}
          name={name}
            label={label}
            value={dayjs(value)}
            // views={view}
            readOnly ={readOnly }
            disabled ={disabled}
            minDate={dayjs(minDate)} // Set the minimum date
            maxDate={dayjs(maxDate)} // Set the maximum date
            format={dateFormat}
            onChange={((newValue:any) => {
                if (onChange && !readOnly) {
                  if(newValue?.$d){
                    onChange(getDateOrConvertDateTime(newValue?.$d));
                  }else{
                    onChange(newValue);
                  }
                    
                }
            })}
            slotProps={{
                field: { clearable: true, onClear: () => {
                    if (onChange) {
                        onChange(null);
                    }
                } },
             
                textField: {
                    onKeyDown:(e : any) => e.preventDefault() ,
                    error: error ,
                  helperText: helperText,
                  required: required,
                  variant: variant,
                  style: { width: Width  },
                 
                  size:size
                }
            }}
            sx={{
                width: Width,
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: error ? "1px solid #D70000" : `1px solid ${theme.palette.primary.main}`,
                },
              }}

            // onChange={(newValue) => onChange(newValue)}
          />
 
      </LocalizationProvider>
    );
})
export default CustomDatePicker;

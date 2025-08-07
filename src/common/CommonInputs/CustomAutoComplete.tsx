import {
  Autocomplete,
  autocompleteClasses,
  Box,
  ListItemText,
  TextField,
  TextFieldVariants,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface InputProps {
  name: string;
  label: string;
  optionLabelKey: string;
  optionValueKey: string;
  cascadingKey?: string;
  value: any;
  cascadingvalue?: any;
  options: any[];
  variant?: TextFieldVariants;
  required?: boolean;
  error?: string | boolean;
  onChange?: (value: any) => void;
  onAddClick?: () => void;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isfreeSolo?: boolean;
  helperText?: string;
  inputProps?: object;
  Width?: any;
  placeholder?: string;
  size?: "small" | "medium";
  addField?: boolean;
  labelAddNew?: string;
}

const CustomAutoComplete = (props: InputProps) => {
  const {
    name,
    label,
    value,
    optionLabelKey,
    optionValueKey,
    cascadingKey,
    cascadingvalue,
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
    placeholder = "Search..",
    options = [],
    isfreeSolo = false,
    size = "small",
    addField = false,
    onAddClick,
    labelAddNew,
  } = props;

  const [filteredOptions, setFilteredOptions] = useState<any[]>(options);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);

  useEffect(() => {
    const selected = options.find(
      (option: any) => option[optionValueKey] === value
    );
    setSelectedValue(selected || null);
  }, [value, options, optionValueKey]);

  useEffect(() => {
    const filtered = cascadingKey
      ? options.filter(
          (item) => `${item[cascadingKey]}` === `${cascadingvalue}`
        )
      : options;
    setFilteredOptions(filtered);
  }, [cascadingKey, cascadingvalue, options]);

  return (
    <Autocomplete
      disablePortal
      id={`autocomplete-${name}`}
      options={filteredOptions}
      sx={{ width: Width }}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      value={selectedValue}
      fullWidth
      openOnFocus
      size={size}
      onChange={(e, newValue) => {
        setSelectedValue(newValue);
        if (onChange && !readOnly) {
          if (newValue) {
            onChange(newValue[optionValueKey]);
          } else {
            onChange(null);
          }
        }
      }}
      freeSolo={isfreeSolo}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          variant={variant}
          required={required}
          error={!!error}
          helperText={helperText ? helperText : error}
          label={label}
          onChange={(e) => {
            if (isfreeSolo && onChange) {
              onChange(e.target.value);
            }
          }}
        />
      )}
      renderOption={(props, item ) => (
        <>
        <Box
          sx={{
            borderRadius: "8px",
            margin: "4px",
            [`&.${autocompleteClasses.option}`]: {
              padding: "0px !important",
            },
          }}
          component="li"
          {...props}
        >
          <ListItemText
            sx={{
              textAlign: "left",
              p: "4px 8px",
              cursor: "pointer",
            }}
          >
            {item[optionLabelKey]}
          </ListItemText>

         
        </Box>
      
        </>
      )}
      getOptionLabel={(option) =>
        option ? `${option[optionLabelKey]}` : ""
      }
      isOptionEqualToValue={(option, value) =>
        option?.[optionValueKey] === value?.[optionValueKey]
      }
      filterOptions={(options, { inputValue }) => {
        if (inputValue.trim() === "" || inputValue.length < 3) {
          return filteredOptions;
        } else {
          return options
            .filter((option) =>
              `${option[optionLabelKey]}`
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            )
            .slice(0, 9999);
        }
      }}
    />
  );
};

export default CustomAutoComplete;

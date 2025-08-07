import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import CustomChip from "../CommonChip/CustomChip";
import CustomSvgIcon from "../customsvg";

interface InputProps {
  label: string;
  optionLabelKey: string;
  optionIdKey: string;
  value: any;
  options: any;
  variant?: TextFieldVariants;
  required?: boolean;
  error?: boolean;
  onChange?: (value: any) => void;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string;
  inputProps?: object;
  Width?: any;
  size?: "small" | "medium";
  addField?: boolean;
  selectAll?: boolean;
  onAddClick?: () => void;
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomMultiSelect = (props: InputProps) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<any[]>([]);
  const [focusInput, setfocusInput] = useState<boolean>(false);
  const theme = useTheme();
  const {
    label,
    value,
    optionLabelKey,
    optionIdKey,
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
    options = [],
    size = "small",
    addField = false,
    selectAll = false,
    onAddClick,
  } = props;



  useEffect(() => {
    const filteredOptions_value = options || [];
    // Sort the filtered options by `optionLabelKey` in A-Z order
    try {
      const sortedOptions = [...filteredOptions_value].sort((a: any, b: any) => {
        const labelA = a[optionLabelKey].toUpperCase(); // ignore upper and lowercase
        const labelB = b[optionLabelKey].toUpperCase(); // ignore upper and lowercase
        if (labelA < labelB) {
          return -1;
        }
        if (labelA > labelB) {
          return 1;
        }
        return 0;
      });

      setFilteredOptions(sortedOptions);
    } catch {
      setFilteredOptions([]);
    }
  }, [options, value]);

  const handleBlur = () => {
    // setOpen(false);
    console.log("ddsds");
  };



  const handleChange = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;
  
    // Check if "Select All" was clicked
    if (value.includes("select-all")) {
      const allSelected = value.length === filteredOptions.length + 1; // +1 accounts for "select-all" in value
  
      const newSelectedValues = allSelected ? [] : filteredOptions.map((option) => option[optionIdKey]);
  
      const syntheticEvent = {
        target: { value: newSelectedValues },
      } as SelectChangeEvent<any>;
  
      if (onChange && !readOnly) {
        onChange(syntheticEvent);
      }
    } else {
      // Handle regular selection
      const selectedValues = typeof value === "string" ? value.split(",") : value;
      
      const syntheticEvent = {
        target: { value: selectedValues },
      } as SelectChangeEvent<any>;
  
      if (onChange && !readOnly) {
        onChange(syntheticEvent);
      }
    }
  };
  

  return (
    <>
      <FormControl
        sx={{
          width: Width,
          "& .MuiOutlinedInput-root": {
            ".MuiOutlinedInput-notchedOutline": { borderColor: "#6A6A6A", borderWidth: "1px" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#6A6A6A", borderWidth: "1px" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
              borderWidth: "1px",
            },
          },
          "& .MuiInputLabel-root": {
            color: theme.palette.mode === "dark" ? "#6A6A6A" : "#1F1F1F", // Default color
          },
          "&:hover .MuiInputLabel-root": {
            color: theme.palette.mode === "dark" ? theme.palette.primary.main : "#6A6A6A",
          },
          "&.Mui-focused .MuiInputLabel-root": {
            color: theme.palette.mode === "dark" ? theme.palette.primary.main : "#6A6A6A", // Focus color
          },
        }}
        size={size}
      >
        <InputLabel
          sx={{ color: !!error ? "#1F1F1F" : disabled ? "#C0C0C0" : undefined }}
          required={required}
          id="demo-multiple-chip-label"
        >
          {label}
        </InputLabel>

        <Select
          id="demo-multiple-chip"
          multiple
          value={value}
          sx={{ width: Width }}
          className={className}
          disabled={disabled}
          onChange={handleChange}
          // onFocus={() => setfocusInput(true)}
          // onBlur={() => setfocusInput(false)}
          onBlur={handleBlur}
          error={!!error}
          inputProps={{
            ...inputProps,
            readOnly: readOnly || false,
          }}
          input={<OutlinedInput sx={{ height: "40px" }} id="select-multiple-chip" label={label} />}
          renderValue={(selected) => {
            const validSelected = selected?.filter((item: any) => item !== undefined);
            // const maxChipsToShow = readOnly || focusInput ? selected?.length : 2;
            const maxChipsToShow = readOnly || focusInput ? selected?.length : selected?.length;
            const extraCount = selected.length - maxChipsToShow;
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {validSelected.slice(0, maxChipsToShow).map((value: any) => (
                  <CustomChip
                    size={size}
                    key={`${value}-multiselect chip `}
                    label={filteredOptions?.find((item: any) => item[optionIdKey] == value)?.[optionLabelKey] ?? ""}
                
                  />
                ))}
                {extraCount > 0 && <CustomChip key="extra-chips-for multi select" label={`+${extraCount}`} size={size} />}
              </Box>
            );
          }}
          MenuProps={MenuProps}
        >
          {addField && (
            <MenuItem
              onClick={() => {
                if (onAddClick) {
                  onAddClick();
                }
              }}
            >
              <CustomSvgIcon name={"plus"} /> Add {`${label}`}
            </MenuItem>
          )}
         {selectAll && !readOnly && (
            <MenuItem
              key={"select all for multi select"}
              value="select-all"
              // onClick={handleSelectAll}
            >
              <Checkbox
                checked={value?.length === filteredOptions?.length}
                indeterminate={value?.length > 0 && value?.length < filteredOptions?.length}
              />
              <ListItemText sx={{ marginLeft: "10px" }} primary={"Select All"} />
            </MenuItem>
          )}
          {filteredOptions?.map((name: any) => {
            return (
              name[optionLabelKey] &&
              value && (
                <MenuItem
                  key={name[optionLabelKey]}
                  value={name[optionIdKey]}
                  style={getStyles(name, personName, theme)}
                >
                  <Checkbox checked={value.indexOf(name[optionIdKey]) > -1} />
                  <ListItemText sx={{ marginLeft: "10px" }} primary={name[optionLabelKey]} />
                </MenuItem>
              )
            );
          })}
        </Select>
        {helperText && <FormHelperText sx={{ color: theme.palette.error.main }}>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

export default CustomMultiSelect;

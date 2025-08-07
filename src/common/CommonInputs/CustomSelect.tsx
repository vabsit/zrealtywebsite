import { TextField, MenuItem, InputAdornment, Box, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useMemo, useEffect, memo } from 'react';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value: any;
  optionValueKey: string;
  optionLabelKey: string;
  variant?: "outlined" | "filled" | "standard";
  required?: boolean;
  readOnly?: boolean;
  error?: boolean;
  onChange: (value: any, name: string) => void;
  className?: string;
  disabled?: boolean;
  helperText?: string;
  inputProps?: object;
  Width?: string;
  options?: any[];
  cascadingKey?: string;
  cascadingvalue?: any;
  size?: "small" | "medium";
  addField?: boolean;
  showAll?: any;
  showAllOption?: boolean;
  onAddClick?: () => void;
  labelAddNew?: string;
  optionText?: any;
  isSort?: boolean;
  textColor?: string;
}

const CustomSelect = memo((props: InputProps) => {
  const {
    name,
    label,
    value,
    optionValueKey = 'value',
    optionLabelKey = 'label',
    variant = "outlined",
    required = false,
    readOnly = false,
    error,
    onChange,
    className,
    disabled = false,
    helperText,
    inputProps,
    options = [],
    cascadingKey,
    cascadingvalue,
    size = "small",
    addField = false,
    showAll = {},
    showAllOption = false,
    onAddClick,
    labelAddNew,
    isSort = true,
    textColor = "",
  } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const checkColor = () => options.find((item) => item[optionValueKey] === value)?.[textColor] || "";

  const filteredOptions = useMemo(() => {
    let filtered = cascadingKey
      ? options.filter((item: any) => `${item[cascadingKey]}` === cascadingvalue)
      : options;

    if (isSort) {
      filtered = [...filtered].sort((a: any, b: any) => {
        const labelA = a[optionLabelKey]?.toString().toUpperCase();
        const labelB = b[optionLabelKey]?.toString().toUpperCase();
        return labelA.localeCompare(labelB);
      });
    }

    return filtered.filter(option =>
      option[optionLabelKey]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, cascadingKey, cascadingvalue, isSort, searchTerm, optionLabelKey]);

  const commonMenuItemStyle = {
    borderRadius: "8px",
     margin: "4px",
    padding: "8px 12px",
    '&:hover': {
      backgroundColor: "rgba(14, 14, 14, 0.04)",
    },
  };


  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent menu from closing
  };

  return (
    <Box sx={{ padding: "0px" }}>
      <TextField
        id={`select-${name}`}
        select
        label={label}
        fullWidth
        variant={variant}
        required={required}
        error={!!error}
        helperText={helperText ? helperText : error}
        onChange={(e) => {
          if (onChange && !readOnly && e.target?.value) {
            onChange(e.target?.value, name);
          }
        }}
        value={value}
        className={className}
        disabled={disabled}
        InputProps={{
          ...inputProps,
          readOnly: readOnly || false,
        }}
        sx={{
          "& .MuiSelect-select": {
            color: textColor ? checkColor() : "",
          },
        }}
        InputLabelProps={{
          style: {
            color: !!error ? "#1F1F1F" : undefined,
          },
          shrink: value !== undefined && value !== null && value !== "",
        }}
        slotProps={{
          select: {
            open: isOpen,
            onOpen: () => setIsOpen(true),
            onClose: (e: any) => {
              if (e.target?.id !== "Select_inputSearch") {
                setIsOpen(false);
              }
            },
            MenuProps: {
              PaperProps: {
                sx: {
                  maxHeight: 300,
                },
              },
              MenuListProps: {
                autoFocusItem: false,  // ✅ Properly disables auto focus now
              },
            },
            renderValue: (selected: any) => {
              const selectedOption = options.find(opt => opt[optionValueKey] === selected);
              return selectedOption ? selectedOption[optionLabelKey] : '';
            },
          },
        }}
        
        size={size}
      >
        {/* Search Input */}
       {/* Search Input */}
<Box
  sx={{
    p: 1,
    position: 'sticky',
    top: 0,
    zIndex: 2,
    bgcolor: 'background.paper',
    borderBottom: '1px solid #eee',
    cursor: 'default',
  }}
  onClick={handleSearchClick}
>
  <InputBase
    id="Select_inputSearch"
    fullWidth
    autoFocus
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon fontSize="small" />
      </InputAdornment>
    }
    sx={{
      p: '4px 8px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    }}
  />
</Box>


        {/* Show All Option */}
        {showAllOption && (
          <MenuItem
            key={showAll[optionValueKey] || 'all'}
            value={showAll[optionValueKey]}
            sx={{
              ...commonMenuItemStyle,
              backgroundColor: value === showAll[optionValueKey] ? '#e3f2fd' : 'inherit',
            }}
          >
            <Box sx={{  width: '100%' }}>
              <Typography>{showAll[optionLabelKey]}</Typography>
            </Box>
          </MenuItem>
        )}

        {/* Filtered Options */}
        {filteredOptions.map((option) => (
          <MenuItem
            key={option[optionValueKey]}
            value={option[optionValueKey]}
            sx={{
              ...commonMenuItemStyle,
              backgroundColor: value === option[optionValueKey] ? '#e3f2fd' : 'inherit',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography>{option[optionLabelKey]}</Typography>
            </Box>
          </MenuItem>
        ))}

        {/* Add New Option */}
        {addField && (
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              if (onAddClick) onAddClick();
              setIsOpen(false);
            }}
            sx={{
              position: 'sticky',
              bottom: 0,
              zIndex: 1,
              backgroundColor: 'white',
              borderTop: '1px solid #ddd',
              margin: '0px',
               p: 0
            }}
          >
            <Box sx={{  p:1 , width: '100%' , backgroundColor : "#ffff" }}>
              <Typography color="primary" variant="caption">
                + New {labelAddNew || label}
              </Typography>
            </Box>
          </MenuItem>
        )}
      </TextField>
    </Box>
  );
});

export default CustomSelect;
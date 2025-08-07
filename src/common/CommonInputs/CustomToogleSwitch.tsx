import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
  styled,
} from "@mui/material";
import React, { memo } from "react";

interface groupList {
  value: any;
  lable: any;

}

interface InputProps {
  label: string;
  value: any;
  list?: groupList[];
  required?: boolean;
  error?: boolean | undefined; // Error message or boolean indicating presence of error
  onChange?: (newValue: any) => void; // onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  readOnly?: boolean; // Disabled state
  helperText?: string; // Helper text
  Width?: any;
  direction?: string;
  dynamicLabel?: string;
  title?: string;
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 18,
  padding: 0,
  display: "flex",
  margin: '0px 10px',
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 16,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(14px)",
      color: theme.palette.primary.main,
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary.light
            : theme.palette.primary.light,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 14,
    height: 14,
    borderRadius: 9,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const CustomToogleSwitch = memo((props: InputProps) => {
  const {
    label,
    value,
    required = false,
    error,
    onChange,
    className,
    disabled = false,
    readOnly = false,
    helperText,
    Width = "100%",
    list,
    direction = "row",
    dynamicLabel = null,
    title,
  } = props;

  return (
    <>
      <FormControl
        required={required}
        sx={{ width: Width }}
        error={error}
        variant="standard"
      >
        {title && <FormLabel
          id="demo-controlled-radio-buttons-group"
          sx={{ textAlign: "start", mb:1, color: "#1F1F1F !important"  }}
        >
          {title}
        </FormLabel>}
        <FormGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          row={direction === "row"}
        >
          <FormControlLabel
            // Add a unique key for each FormControlLabel
            control={
              <AntSwitch
                disabled={disabled}
                readOnly={readOnly}
                checked={value}
                // value={value}
                onChange={(e: any) => {
                  if (onChange && !readOnly) {
                    console.log(e.target?.checked);
                    onChange(e.target?.checked);
                  }
                }}
              />
            }
            label={dynamicLabel ? dynamicLabel : label}
          />
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
});
export default CustomToogleSwitch;

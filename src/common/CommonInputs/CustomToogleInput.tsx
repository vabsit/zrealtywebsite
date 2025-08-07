import { Box, FormHelperText, Paper, TextField, TextFieldVariants, Typography } from "@mui/material";
import React, { memo } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled , useTheme } from '@mui/material/styles';
interface InputProps {
  name: string;
  label: string;
  type?: string;
  value: any;
  optionLabelKey: string;
  valueKey: string;
  variant?: TextFieldVariants;
  required?: boolean;
  options : any[];
  readOnly?: boolean;
  error?: string | boolean; // Error message or boolean indicating presence of error
  onChange?: (value: any, name?: string) => void; /// onChange event handler
  className?: string; // Custom CSS class
  disabled?: boolean; // Disabled state
  helperText?: string; // Helper text
  inputProps?: object; // Additional input element attributes
  Width?: any;
  size?: "small" | "medium";
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  positionSet? : boolean
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    width: '100%',
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      margin: theme.spacing(0.2),
      border: 0,
      borderRadius: theme.shape.borderRadius,
    },
    
  }));

const CustomToogleinput = memo((props: InputProps) => {
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
    options = [],
    onChange,
    optionLabelKey,
    valueKey,
    className,
    onKeyDown,
    disabled = false,
    helperText,
    inputProps,
    onBlur,
    Width = "100%",
    size = "small",
    positionSet = false,
  } = props;


  const onChangevalue = (val : any) => {
      if(!readOnly && onChange){
        console.log(val , "val");
        onChange(val)
        // onChange(val)
      }
  }

  return (
    <>
       <Box sx={{position:'relative'}}>
    <Box sx={{width:'100%', position : positionSet ? 'absolute' : "" , top : positionSet ? '-9px' : "" }}>

  
        <Box  sx={{display :'flex' , height:'0px' , paddingBottom:'8px', alignItems:'center' , justifyContent:'start'}}>   <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
        {`${label}`}&nbsp;{required ? <span style={{ color: "red" }}>*</span> : null}
      </Typography>  </Box>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: 'flex',
          border: `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        })}
      >
        <StyledToggleButtonGroup
          size="small"
        
        //   value={value}
        //   onChange={onChangevalue}
          aria-label="text alignment"
        >
          
{options.map((item: any, index: number) => (
 <ToggleButton style={{ textTransform: "none" }} aria-readonly={readOnly} onClick={() => onChangevalue(item[valueKey])} sx={{padding :"0px !important" ,width: `${100 / options.length}%`}} value={item[valueKey]}>
    <Box key={`value-${index}-${label}`} sx={{width:'100%' , padding : '5px 10px' , borderRadius : '5px', color : value == item[valueKey] ?  'white' : "black" , backgroundColor : value == item[valueKey] ? item?.color ? item?.color :  `${theme.palette.primary.main} ` : null}}>
    {item[optionLabelKey]}
    </Box>

   </ToggleButton>
))}
 
        </StyledToggleButtonGroup>
      </Paper>
      </Box>
      </Box>
     {error && <FormHelperText sx={{color :theme.palette.error.main}} id="standard-weight-helper-text">{helperText}</FormHelperText>}
    </>
  );
});
export default CustomToogleinput;

import {   useTheme } from "@mui/material";
import { Grid } from '@mui/material';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';



const ResponsiveGridItem = ({ 
  children,
  spacing = 2,
  columns = { xs: 1, sm: 2, md: 3, lg: 3, xl: 4 },
  styles = {},
  debug = false,
  ...props 
}: any) => {
  const theme = useTheme();

  // Calculate responsive column spans
  const getGridSpan = (breakpoint: Breakpoint): number => {
    const cols = columns[breakpoint] || 1;
    return Math.floor(12 / cols);
  };

  // Calculate responsive spacing with proper typing
  const getSpacingValue = (breakpoint: Breakpoint): number => {
    if (typeof spacing === 'number') return spacing;
    return spacing[breakpoint] ?? 2;
  };

  // Generate responsive sx prop
  const responsiveSx = {
    ...(debug && {
      border: `1px solid ${theme.palette.error.main}`,
      backgroundColor: theme.palette.action.hover
    }),
    xs: { 
      ...(styles.xs || {}),
      width: `calc(100% - ${theme.spacing(getSpacingValue('xs'))})`
    },
    sm: { 
      ...(styles.sm || {}),
      width: `calc(${100 / (columns.sm || 2)}% - ${theme.spacing(getSpacingValue('sm'))})`
    },
    md: { 
      ...(styles.md || {}),
      width: `calc(${100 / (columns.md || 3)}% - ${theme.spacing(getSpacingValue('md'))})`
    },
    lg: { 
      ...(styles.lg || {}),
      width: `calc(${100 / (columns.lg || 4)}% - ${theme.spacing(getSpacingValue('lg'))})`
    },
    xl: { 
      ...(styles.xl || {}),
      width: `calc(${100 / (columns.xl || 4)}% - ${theme.spacing(getSpacingValue('xl'))})`
    }
  };

  return (
    <Grid
      sx={responsiveSx}
       size={ {   xs : props.xs || getGridSpan('xs') ,
        sm : props.sm || getGridSpan('sm') ,
        md : props.md || getGridSpan('md') ,
        lg : props.lg || getGridSpan('lg') ,
        xl : props.xl || getGridSpan('xl')} }
     
      >
      {children}
    </Grid>
  );
};

export default ResponsiveGridItem;
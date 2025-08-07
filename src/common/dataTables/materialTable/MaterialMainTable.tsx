

import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  MRT_Column,
  MRT_GlobalFilterTextField,
  MRT_RowData,
  MRT_ShowHideColumnsButton,
  MRT_ShowHideColumnsMenuItems,
  MRT_TableHeadCellFilterContainer,
  MRT_TablePagination,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import React from 'react';
import { Box, lighten, ListItemIcon, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import CustomDialog from '../../CommonDialog/CustomFormDialog';


interface CustomMaterialReactTableProps{
  
  columns : any , 
  data  : any[]
  
}

const Example : React.FC<CustomMaterialReactTableProps> = ({columns  , data  }) => {
  //should be memoized or stable
  const [isCustomFilter,setIsCustomFilter]=useState<boolean>(false)

  const table = useMaterialReactTable({
    columns,
    data, 
    mrtTheme: (theme : any) => ({
      baseBackgroundColor: theme.palette.background.default, //change default background color
    }),
    muiTableContainerProps:({}) => ({
      sx:{
        
             boxShadow : "none"
      }  
    }),
    muiTablePaperProps:({}) => ({
       elevation : 0,
       sx:{
        boxShadow : "0"
       }
    }),
    enableColumnOrdering: false,
    // enableGrouping: true,
    enableColumnPinning: false,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    enableKeyboardShortcuts: false,
    enableColumnActions: false,
    enableColumnFilters: true,
    initialState: {
      
      showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiPaginationProps: {
    rowsPerPageOptions: [10, 20, 30],
   showRowsPerPage : false
    },

    renderRowActionMenuItems: ({}) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
        //   closeMenu();
        }}
        sx={{ m: 0 }}
      >
        {/* <ListItemIcon>
          <AccountCircle />
        </ListItemIcon> */}
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
        //   closeMenu();
        }}
        sx={{ m: 0 }}
      >
        {/* <ListItemIcon>
          <Send />
        </ListItemIcon> */}
        Send Email
      </MenuItem>,
    ],
    renderTopToolbar: ({ }) => {
     

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
         
          </Box>
          <Box>
            <Box    onClick={() => {
             setIsCustomFilter(!isCustomFilter)
        }} >cus F</Box>
          <MRT_ToggleFiltersButton table={table} />
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleFullScreenButton table={table} />
         
          </Box>
        </Box>
      );
    },
    renderBottomToolbar : ({}) => {
          return (<>
           <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
       {/* Rows per page selector on the left */}
       <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        
        </Box>

        {/* Pagination controls on the right */}
        <Box gap={2}>
      
          <MRT_TablePagination
            table={table}
            
          />
        </Box>

        </Box>
          </>)
    },
    
    muiTableProps: {
      sx: {
        border: '1px solid rgba(232, 229, 229, 0.21)',
        caption: {
          captionSide: 'top',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(232, 229, 229, 0.21)',
        fontStyle: 'italic',
        fontWeight: 'normal',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(232, 229, 229, 0.21)',
      },
    },
  });

  return <><MaterialReactTable table={table} />
             <CustomDialog maxWidth={"xs"} title={ "Custom Filter"}  open={isCustomFilter} onClose={()=> setIsCustomFilter(false)}
        children={<>
           <Box>
           <Stack p="8px" gap="24px">
        {table
            .getLeafHeaders()
            .map(
              (header) =>
                header.column.getCanFilter() && (
                  <MRT_TableHeadCellFilterContainer
                    key={header.id}
                    header={header}
                    table={table}
                    in
                  />
                ),
            )}
        </Stack>
           </Box>
      
        </>}
      />
   </>;
};

export default Example;

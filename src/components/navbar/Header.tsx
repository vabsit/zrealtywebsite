// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Menu,
//   MenuItem,
//   Box,
//   Paper,
// } from '@mui/material';
// import { ExpandMore } from '@mui/icons-material';
// import { styled } from '@mui/system';
// import zlendoLogo from '../../assets/zlendo.png';

// const NavButton = styled(Button)({
//   color: '#1f1f1f',
//   fontWeight: 600,
//   textTransform: 'none',
//   fontSize: '16px',
  
// });

// const menuStyle = {
//   mt: 1,
//   borderRadius: 3,
//   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//   minWidth: 280,
// };

// const menuItemStyle = {
//   px: 3,
//   py: 1.5,
//   fontSize: '15px',
//   fontWeight: 500,
//   '&:hover': {
//     backgroundColor: '#f5f5f5',
//   },
// };

// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [menuType, setMenuType] = React.useState('');

//   const handleOpenMenu = (event:any, type:any) => {
//     setAnchorEl(event.currentTarget);
//     setMenuType(type);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//     setMenuType('');
//   };

//   const menus:any = {
//     Products: [
//       '2D to 3D Converter',
//       'Smart Room Styler',
//       'Smart Cost Estimator',
//       'Vastu Layout Optimizer',
//       '3D Export Toolkit',
//       'Zlendo API Suite',
//       'Immersive Design Preview',
//       'AI Room Inspiration',
//       'Zlendo VR Studio',
//     ],
//     UseCases: ['Interior Designers', 'Architects', 'Contractors'],
//     Resources: ['Documentation', 'Community', 'Support'],
//     Business: ['Enterprise Solutions', 'Partnerships'],
//   };

//   return (
//     <AppBar position="static" elevation={0} color="transparent" sx={{ backgroundColor: '#fff', pt: 2, pb: 2, boxShadow: 'none' }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         {/* Logo */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <img src={zlendoLogo} alt="Zlendo Realty" height="50" />
//         </Box>

//         {/* Navigation */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           {Object.keys(menus).map((menuKey) => (
//             <NavButton
//               key={menuKey}
//               endIcon={<ExpandMore />}
//               onClick={(e) => handleOpenMenu(e, menuKey)}
//             >
//               {menuKey}
//             </NavButton>
//           ))}
//           <NavButton>Pricing</NavButton>
//         </Box>

//         {/* CTA */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button
//             variant="outlined"
//             sx={{
//               borderRadius: '30px',
//               borderColor: '#ccc',
//               color: '#29B0A1',
//               fontWeight: 500,
//               textTransform: 'none',
//               px: 3,
//             }}
//           >
//             Login
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               borderRadius: '30px',
//               background: ' #29B0A1',
//               textTransform: 'none',
//               color: '#fff',
//               fontWeight: 500,
//               px: 3,
//             }}
//           >
//             Get Started
//           </Button>
//         </Box>

//         {/* Dropdown */}
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleCloseMenu}
//           PaperProps={{
//             elevation: 0,
//             sx: menuStyle,
//             component: Paper,
//           }}
//         >
//           {menuType &&
//             menus[menuType].map((item:any) => (
//               <MenuItem key={item} sx={menuItemStyle} onClick={handleCloseMenu}>
//                 {item}
//               </MenuItem>
//             ))}
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import { ExpandMore, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import zlendoLogo from '../../assets/zlendo.png';

const NavButton = styled(Button)({
  color: '#1f1f1f',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '18px',
});

const menuStyle = {
  mt: 1,
  borderRadius: 3,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  minWidth: 280,
};

const menuItemStyle = {
  px: 3,
  py: 1.5,
  fontSize: '18px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
};

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuType, setMenuType] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenMenu = (event: any, type: string) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuType('');
  };

  const menus: Record<string, string[]> = {
    Products: [
      '2D to 3D Converter',
      'Smart Room Styler',
      'Smart Cost Estimator',
      'Vastu Layout Optimizer',
      '3D Export Toolkit',
      'Zlendo API Suite',
      'Immersive Design Preview',
      'AI Room Inspiration',
      'Zlendo VR Studio',
    ],
    UseCases: ['Interior Designers', 'Architects', 'Contractors'],
    Resources: ['Documentation', 'Community', 'Support'],
    Business: ['Enterprise Solutions', 'Partnerships'],
  };

  return (
    <AppBar position="static" elevation={0} color="transparent" sx={{ backgroundColor: '#fff', py: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={zlendoLogo} alt="Zlendo Realty" height="70" />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {Object.keys(menus).map((menuKey) => (
              <NavButton
                key={menuKey}
                endIcon={<ExpandMore />}
                onClick={(e) => handleOpenMenu(e, menuKey)}
              >
                {menuKey}
              </NavButton>
            ))}
            <NavButton>Pricing</NavButton>
          </Box>
        )}

        {/* CTA / Hamburger */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {!isMobile && (
            <>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '30px',
                  borderColor: '#ccc',
                  color: '#29B0A1',
                  fontWeight: 500,
                  textTransform: 'none',
                  px: 3,
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '30px',
                  background: ' #29B0A1',
                  textTransform: 'none',
                  color: '#fff',
                  fontWeight: 500,
                  px: 3,
                }}
              >
                Get Started
              </Button>
            </>
          )}

          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Dropdown Menu for Desktop */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          PaperProps={{
            elevation: 0,
            sx: menuStyle,
            component: 'div',
          }}
        >
          {menuType &&
            menus[menuType].map((item: string) => (
              <MenuItem key={item} sx={menuItemStyle} onClick={handleCloseMenu}>
                {item}
              </MenuItem>
            ))}
        </Menu>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <img src={zlendoLogo} alt="Zlendo Realty" height="40" />
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 2 }} />

          {Object.entries(menus).map(([menuKey, items]) => (
            <Box key={menuKey} mb={2}>
              <Box fontWeight={600} mb={1}>
                {menuKey}
              </Box>
                {items.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
                {/* ))} */}
              {/* </List> */}
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Box display="flex" flexDirection="column" gap={1}>
            <Button variant="outlined" sx={{ borderRadius: '30px', color: '#29B0A1', borderColor: '#ccc' }}>
              Login
            </Button>
            <Button variant="contained" sx={{ borderRadius: '30px', background: '#29B0A1', color: '#fff' }}>
              Get Started
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;



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
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import zlendoLogo from '../../assets/zlendo.png';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const NavButton = styled(Button)({
  color: '#1f1f1f',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '16px !important',
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
  fontSize: '16px !important',
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

  const menus: any = {
    Products: [
      { label: '2D to 3D Converter', url: '/2d3dconvertor' },
      { label: 'Smart Room Styler', url: '/smartroomstyler' },
      { label: 'Smart Cost Estimator', url: '/smartcostestimator' },
      { label: 'Vastu Layout Optimizer', url: '/products/vastu-layout-optimizer' },
      { label: '3D Export Toolkit', url: '/products/3d-export-toolkit' },
      { label: 'Zlendo API Suite', url: '/zlendoapisuite' },
      { label: 'Immersive Design Preview', url: '/products/immersive-design-preview' },
      { label: 'AI Room Inspiration', url: '/airoominspiration' },
      { label: 'Zlendo VR Studio', url: '/vrstudio' },
    ],
    UseCases: [
      {
        title: "For Property Owners",
        Submenu: [
          { label: 'Home Design', url: '/use-cases/Home_designers' },
          { label: 'Home Remodeling', url: '/homeremodeling' },
          { label: 'interior Design', url: '/use-cases/Interior_designers' },
          { label: 'Vastu-Optimized Spaces', url: '/use-cases/Vastu' },
          { label: 'NRI & Remote Planning', url: '/use-cases/Remote_Planning' },
        ]
      },
      {
        title: "For Professionals",
        Submenu: [
          { label: 'Commercial Spaces', url: '/use-cases/interior-designers' },
          { label: 'Collaborate With Designers', url: '/use-cases/architects' },
          { label: 'For Real Estate Brokers', url: '/use-cases/contractors' },
        ]
      },

    ],
    Resources: [
      { label: 'Library', url: '/library' },
      { label: 'Tutorials', url: '/tutorials' },
      { label: 'Blogs', url: '/resources/support' },
      { label: 'Help Center', url: '/resources/support' },
      { label: 'Realty App', url: '/resources/support' },
    ],
    Business: [
      { label: 'Affiliate', url: '/affiliate' },
      { label: 'Indian Partner', url: '/indianpartner' },
    ],
  };

  const navigate = useNavigate();

  const handleMenuItemClick = (url: string) => {
    navigate(url);
    handleCloseMenu(); // close desktop menu
    setDrawerOpen(false); // close drawer if open
  };

  return (
    <AppBar position="static" elevation={0} color="transparent" sx={{ backgroundColor: '#fff', py: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
          <img src={zlendoLogo} alt="Zlendo Realty" height="50" onClick={() => { navigate("/"); }} />
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
            // sx: {
            //   borderRadius: '12px',
            //   backgroundColor: '#fff',
            //   boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            //   mt: 1.5,
            //   minWidth: 500,
            //   p: 2
            // },
            sx: menuStyle,
            component: 'div',
          }}
        >
          {menuType === "UseCases" ? (
            <Box sx={{ display: 'flex', gap: 6, px: 2, py: 2  }}>
              {menus.UseCases.map((section: any) => (
                <Box key={section.title}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ mb: 1, color: 'text.secondary' }}
                  >
                    {section.title}
                  </Typography>
                  {section.Submenu.map((item: any) => (
                    <MenuItem
                      key={item.label}
                      // sx={{ px: 0, py: 0.5 }}
                      sx={menuItemStyle}
                      onClick={() => handleMenuItemClick(item.url)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Box>
              ))}
            </Box>
          ) : (
            menus[menuType]?.map(({ label, url }: any) => (
              <MenuItem
                key={label}
                // sx={{ px: 2 }}
                sx={menuItemStyle}
                onClick={() => handleMenuItemClick(url)}
              >
                {label}
              </MenuItem>
            ))
          )}
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

          {Object.entries(menus).map(([menuKey, items]: any) => (
            <Box key={menuKey} mb={2}>
              <Box fontWeight={600} mb={1}>
                {menuKey}
              </Box>
              {items.map(({ label, url }: any) => (
                <ListItem key={label} disablePadding>
                  <ListItemButton onClick={() => handleMenuItemClick(url)}>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}

            </Box>
          ))}

          {/* {Object.entries(menus).map(([menuKey, items]:any) => (
            <Box key={menuKey} mb={2}>
              {menuKey === "UseCases" ? (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>{menuKey}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {items.map((section: any) => (
                      <Box key={section.title} mb={1}>
                        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 0.5 }}>
                          {section.title}
                        </Typography>
                        {section.Submenu.map((sub: any) => (
                          <ListItem key={sub.label} disablePadding>
                            <ListItemButton onClick={() => handleMenuItemClick(sub.url)}>
                              <ListItemText primary={sub.label} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <>
                  <Box fontWeight={600} mb={1}>
                    {menuKey}
                  </Box>
                  {items.map((item: any) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton onClick={() => handleMenuItemClick(item.url)}>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </>
              )}
            </Box>
          ))} */}

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


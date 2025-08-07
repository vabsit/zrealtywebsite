import * as React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menus from "./Menus";
import { Drawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { setThemeMode } from "../../store/master/slices/themeSlice";
export default function TopNavBar() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const {  userData } = useAppSelector((state) => state.authdata);
  const { themeMode } = useAppSelector((state) => state.themedata);

  const isMenuOpen = Boolean(anchorEl);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const handleThemeChange = () => {
    dispatch(setThemeMode(themeMode === "light" ? "dark" : "light"));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: "55px",
          boxShadow: "00px 4px 16px 0px rgba(103, 103, 103, 0.16)",
          zIndex: (theme) =>
            open ? theme.zIndex.drawer - 1 : theme.zIndex.drawer + 1,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Toolbar sx={{ minHeight: "55px" }}>
          <IconButton
            size="medium"
            edge="start"
            onClick={() => setOpen(true)}
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" color="primary">
            Zlendo
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="toggle theme"
              onClick={handleThemeChange}
              color="primary"
            >
              {themeMode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Menus fullMenu={true} />
      </Drawer>
    </Box>
  );
}

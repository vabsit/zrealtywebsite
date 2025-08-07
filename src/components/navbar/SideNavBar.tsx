import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import Menus from "./Menus";
import CustomSvgIcon from "../../common/customsvg";

const drawerWidth = "250px !important";
const closeddrawerWidth = 60;


const SideNavBar = () => {
  const theme = useTheme();
  
  const [fullMenu, setFullMenu] = useState(false);
  const toggleMenu = () => {
     setFullMenu(!fullMenu);
  };


  useEffect(() => {
   console.log(fullMenu , "fullMenu");
   
  },[fullMenu])
  
  return (
    <>
    <Box
       key={"sidenavebar"}
  sx={{
    width: fullMenu ? drawerWidth : `${closeddrawerWidth}px`,
    boxShadow: "0px 1px 4px 0px rgb(103 103 103 / 7%)",
    transition: 'width 0.3s ease',
    bgcolor: "background.paper",
    display: { xs: 'none', md: 'flex' },
    flexDirection: "column",
    borderRight: "none",
    pt: 1,
    flexShrink: 0, // Add this to prevent shrinking
    overflow: 'hidden' // Add this to handle content overflow
  }}
    >
  
     < Menus fullMenu={fullMenu} setFullMenu={setFullMenu} />

     {
      <>
     
       {false &&  <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: fullMenu ? "right" : "center",
          cursor: "pointer",
        }}
        onClick={() => toggleMenu()}
      >
        <CustomSvgIcon
          name={fullMenu ? "chevron_left" : "chevron_right"}
          color={theme.palette.text.secondary}
          size="20px"
        />
      </Box>}
    
      
      </>}
    </Box>
  
  </>
  );
};

export default SideNavBar;
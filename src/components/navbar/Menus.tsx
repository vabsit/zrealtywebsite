import { Box, Collapse, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomSvgIcon from "../../common/customsvg";
import {  useAppSelector } from "../../store/store";
import {  MenuItem } from "../../store/master/slices/authSlice";

interface MenusProps {
  fullMenu: boolean;
  setFullMenu?: (value: boolean) => void;
}

const Menus: React.FC<MenusProps> = ({ fullMenu, setFullMenu }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { mainMenus   } = useAppSelector((state) => state.authdata);
  const [moduleMenuItems, setModuleMenuItems] = useState<any>([]);
  const [menuItems, setMenuItems] = useState<any>([]);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [expandedmoduleItems, setExpandedModuleItems] = useState<string | null>(null);
  const [activeModuleItem, setActiveModuleItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);


  useEffect(() => {
    setModuleMenuItems( mainMenus);
  }, [ mainMenus]);
  
  useEffect(() => {
    const currentPath = location.pathname;

    for (const item of moduleMenuItems) {
      if (item.url && currentPath.startsWith(item.url)) {
        setActiveModuleItem(item.text);
        setActiveItem(null);
        setActiveSubItem(null);
        return;
      }
      if (item.subMenu) {
        for (const subItem of item.subMenu) {
          if (subItem.url && currentPath.startsWith(subItem.url)) {
            setActiveModuleItem(item.text);
            setActiveItem(subItem.text);
            setActiveSubItem(null);
            setExpandedItems((prev) => ({ ...prev, [subItem.text]: true }));
            return;
          }
      if (subItem.subMenu) {
        for (const subItemlast of subItem.subMenu) {
          if (subItemlast.url && currentPath.startsWith(subItemlast.url)) {
            setActiveModuleItem(item.text);
            setActiveItem(subItem.text);
            setActiveSubItem(subItemlast.text);
            setExpandedItems((prev) => ({ ...prev, [subItem.text]: true }));
            return;
          }
        }
      }
        }
      }
      setActiveItem(null);
      setActiveSubItem(null);
    }
  }, [location , location.pathname, moduleMenuItems ]);

   const handleModuleItemClick = (item: MenuItem) => {
    if (item.url) {
      navigate(item.url);
      setActiveModuleItem(item.text);
      setActiveItem(null);
      setActiveSubItem(null);
      setMenuItems([])
      setFullMenu?.(false);
      setExpandedModuleItems(null)
      setExpandedItems({});
    } else if (item.subMenu) {
      setMenuItems(item.subMenu)
      setFullMenu?.(true);
      setExpandedModuleItems(item.text)
    }
     
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.url) {
      navigate(item.url);
      setActiveItem(item.text);
      setActiveSubItem(null);
    } else if (item.subMenu && item.subMenu.length > 0) {
      setExpandedItems((prev) => ({
        ...prev,
        [item.text]: !prev[item.text],
      }));
      setFullMenu?.(true);
    }
  };

 

  

  const handleSubItemClick = (parent: MenuItem, subItem: MenuItem) => {
    if (subItem.url) {
      navigate(subItem.url);
      setActiveItem(parent.text);
      setActiveSubItem(subItem.text);
      setExpandedItems((prev) => ({ ...prev, [parent.text]: true }));
    }
  };


  const renderModuleMenuItem = (item: MenuItem) => (
    <Box key={item.text} sx={{ width: "calc(100% - 16px)", p: 0.5 ,  }}>
      <Tooltip title={ item.text } placement="right">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            p: 1,
            backgroundColor: activeModuleItem === item.text
              ? theme.palette.primary.main
              : expandedmoduleItems === item.text
              ? theme.palette.action.hover
              : "transparent",
            color: activeModuleItem === item.text
              ? theme.palette.primary.contrastText
              : theme.palette.text.secondary,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: activeModuleItem === item.text
                ? theme.palette.primary.dark
                : theme.palette.action.hover,
            },
            justifyContent: "center",
          }}
          onClick={() => handleModuleItemClick(item)}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomSvgIcon
              name={item.icon}
              color={activeModuleItem === item.text
                ? theme.palette.primary.contrastText
                : theme.palette.text.secondary}
              size="20px"
            />
          </Box>
         
        </Box>
      </Tooltip>
  </Box>
  );

  const renderMenuItem = (item: MenuItem) => (
    <Box key={item.text} sx={{ width: "calc(100% - 16px)", p: 0.5 }}>
      <Tooltip title={!fullMenu ? item.text : ""} placement="right">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            p: 1,
            backgroundColor: activeItem === item.text
              ? theme.palette.primary.main
              : (expandedItems[item.text] && item.subMenu)
              ? theme.palette.action.hover
              : "transparent",
            color: activeItem === item.text
              ? theme.palette.primary.contrastText
              : theme.palette.text.secondary,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: activeItem === item.text
                ? theme.palette.primary.dark
                : theme.palette.action.hover,
            },
            justifyContent: fullMenu ? "space-between" : "center",
          }}
          onClick={() => handleItemClick(item)}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomSvgIcon
              name={item.icon}
              color={activeItem === item.text
                ? theme.palette.primary.contrastText
                : theme.palette.text.secondary}
              size="20px"
            />
            {fullMenu && (
              <Typography sx={{ ml: 2, fontWeight: 500 }}>
                {item.text}
              </Typography>
            )}
          </Box>
          {fullMenu && item.subMenu && (
            <CustomSvgIcon
              name={expandedItems[item.text] ? "acc_down_arrow" : "acc_up_arrow"}
              color={activeItem === item.text
                ? theme.palette.primary.contrastText
                : theme.palette.text.secondary}
              size="18px"
            />
          )}
        </Box>
      </Tooltip>

      {fullMenu && item.subMenu && (
        <Collapse in={expandedItems[item.text]}>
          <Box sx={{ pl: 3, mt: 0.5 }}>
            {item.subMenu.map((subItem) => (
              <Tooltip key={subItem.text} title={!fullMenu ? subItem.text : ""} placement="right">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    p: 1,
                    mb: 0.5,
                    backgroundColor: activeSubItem === subItem.text
                      ? `${theme.palette.primary.main}30`
                      : "transparent",
                    color: activeSubItem === subItem.text
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: activeSubItem === subItem.text
                        ? `${theme.palette.primary.main}30`
                        : theme.palette.action.hover,
                    },
                  }}
                  onClick={() => handleSubItemClick(item, subItem)}
                >
                  {fullMenu && (
                    <Typography sx={{ ml: 1 }}>{subItem.text}</Typography>
                  )}
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );

  return (

      <Box
      className="scrollable-section"
      sx={{
        display: "flex",
        flex: 1,
        overflowY: "auto",
        width: "100%",
      }}
    >
 <Box
      className="scrollable-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        width: fullMenu ? "22%" : "100%",
        borderRight : fullMenu ? "1px solid #dbd6d6" : ""
      }}
    >
      {moduleMenuItems.map((item : any) => renderModuleMenuItem(item))}

      </Box>
   {(fullMenu && menuItems && menuItems.length > 0) && <Box
      className="scrollable-section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        overflowY: "auto",
        width: "78%",
      }}
    >
      

      {/* Render Menu Items */}

      {menuItems.map((item : any) => renderMenuItem(item))}

    
    </Box> }

        </Box>
  );
};

export default Menus;

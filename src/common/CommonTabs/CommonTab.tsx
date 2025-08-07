import React, { memo, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import CustomSvgIcon from "../customsvg";
interface TabProps {
  steps: any[];
  activeTab : number;
  setActiveTab?: (value : any) => void
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTab = memo((props: TabProps) => {
  const {steps, activeTab , setActiveTab} = props
  const theme = useTheme();

  const [variant, setVariant] = useState<string>("fullWidth");

  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab && setActiveTab(newValue)
  };

  const calculateTotalWidth = () => {
    const tabWidth = 200;
    const totalWidth = steps.length * tabWidth;
    return totalWidth;
  };

  useEffect(() => {
    const totalWidth = calculateTotalWidth();
    const containerWidth = window.innerWidth;

    if (totalWidth > containerWidth) {
      setVariant("scrollable");
    } else {
      setVariant("fullWidth");
    }
  }, [steps]);

  return (
    <Box sx={{ width: "100%" }}>
    <Box >
        <Tabs
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              height: "2px",
            },
          }}
          variant={variant === "scrollable" ? "scrollable" : "standard"}
          // variant={ "fullWidth"}
          value={activeTab}
          aria-label="basic tabs example"
        >
           
          {steps.map((item, index) => (
            <Tab
              sx={{
                padding: variant === "scrollable" ? "4px 22px" : "4px 16px",
                width: variant === "scrollable" ? 200 : 'fit-content',
                minWidth: variant === "scrollable" ? 200 : 'fit-content',
                textTransform: "capitalize",
                // maxWidth: 200,
                // minHeight: "55px",
                maxHeight: "55px",
                textAlign: "left",
                color: index === activeTab
                ? `${theme.palette.primary.main}`
                : `${theme.palette.text.primary}`,
                // borderRight:`1px solid #00000030`
              }}
              icon={
                item.icon ? (
                  <CustomSvgIcon
                    name={item.icon}
                    color={
                      index === activeTab
                        ? `${theme.palette.primary.main}`
                        : `${theme.palette.text.primary}`
                    }
                    size="22px"
                  />
                ) : undefined
              }
              disabled={item.disabled}
              iconPosition="start"
              label={item.name}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
});

export default CustomTab;

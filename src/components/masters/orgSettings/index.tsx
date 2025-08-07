import { Box } from "@mui/material";
import { useState } from "react";
import CustomTab from "../../../common/CommonTabs/CommonTab";
import OrganisationProfile from "./OrgProfile";
import Branding from "./Branding";
import SpacedStack from "../../../common/CommonSections/SpacedStack";
import Loading from "../../../common/CommonLoading/Loading";

const OrganisationSettings = () => {
  const [tabs, setTabs] = useState([
    { name: "Organisation Profile" },
    { name: "Branding"},
  ]);
  const [activeTab, setActiveTabs] = useState(0)


  return (
    <>
      <Box >
      <SpacedStack>
        <CustomTab steps={tabs} activeTab={activeTab} setActiveTab={setActiveTabs}/>
        {activeTab == 0 ? <OrganisationProfile/> : null}
        {activeTab == 1 ? <Branding/> : null}
        

        </SpacedStack>
      </Box>
     

       </>
  );
};
export default OrganisationSettings;

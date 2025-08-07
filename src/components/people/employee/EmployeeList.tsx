import { Box, Stack } from "@mui/material"
import PageTitle from "../../../common/headings/PageTitle";
import { useMemo, useState } from "react";
import Example from "../../../common/dataTables/materialTable/MaterialMainTable";
import EmployeeBasicDetails from "./addEmployee/EmployeeBasicDetails";
import SpacedStack from "../../../common/CommonSections/SpacedStack";
import AddNewEmployee from "./addEmployee";
import CustomButton from "../../../common/CommonButton/CustomButton";

type PageType = "list" | "add" | "view" | "edit";

const EmployeeList = () => {
    const [Data, setData] = useState([{name : "jino" , email : "jinox@cartx.com"},{name : "jino x" , email : "jinox1@cartx.com"}])
    const [pageType, setPageType] = useState<PageType>("list");
    const [selectedData, setSelectedData] = useState<any>(null);
  
    const handleSwitchPage = (type: PageType, data?: any) => {
      setSelectedData(data || null);
      setPageType(type);
    };
  
    const columns = useMemo(() => [
        {
          accessorKey: 'name', 
          header: 'First Name',
          size: 150,
            filterVariant: 'select',
        },
        {
          accessorKey: 'email', 
          header: 'Email',
          size: 150,
            filterVariant: 'select',
        }
      ], []); 
      
 return(
 <>
          {pageType == "add" &&  <AddNewEmployee onClose={() => handleSwitchPage("list")} />
} 
           {pageType == "list" &&  <Box>
        <SpacedStack>
          <PageTitle title="Employees"  subSection={  <CustomButton  name={"Add Employee"} onClick={()=> handleSwitchPage('add')}/>}/>
          <Example columns={columns} data={Data} />
        </SpacedStack> 
    </Box>}
   </>

 )

  
 }
     
export default EmployeeList;
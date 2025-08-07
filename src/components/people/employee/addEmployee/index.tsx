
import { Box } from "@mui/material";
import CustomStepper from "../../../../common/CommonStepper/CustomStepper";
import { useEffect, useRef, useState } from "react";
import EmployeeBasicDetails from "./EmployeeBasicDetails";
import SpacedStack from "../../../../common/CommonSections/SpacedStack";
import FormTitle from "../../../../common/headings/FormTitle";
import EmployeePersionalDetails from "./EmployeePersionalDetails";
import { useAppSelector } from "../../../../store/store";

const steps = [
    'Basic Details',
    'Persional Details'
  ];
  interface AddNewEmployeeProps {
    onClose? : () => void
}

const AddNewEmployee : React.FC<AddNewEmployeeProps> = ({onClose}) => {
   const { isEmployeeBasicDetailsAdded , error , successMessage } =
     useAppSelector((state) => state.employeedata);
 
  const [activeStep , setActiveStep] = useState<number>(0)


  useEffect(() => {
        

         if(successMessage && successMessage !== null){
            // window.alert(successMessage)
         }
         if(error && error !== null){
          //  window.alert(error)
            setActiveStep(1)
         }
        
          
  },[successMessage , error , isEmployeeBasicDetailsAdded ])
  const closeBasicDetails = () => {
    onClose && onClose()
  }

  const closePersionalDetails = () => {
     setActiveStep(0)
  }

  

  return (
  

    <Box >
           <SpacedStack> 
        <FormTitle title="Add Employee"  />
            
       <CustomStepper steps={steps} activeStep={activeStep}/>
        {activeStep === 0 ? <EmployeeBasicDetails onClose={closeBasicDetails}/> : null}
       {activeStep === 1 ? <EmployeePersionalDetails onClose={closePersionalDetails}/> : null} 
       </SpacedStack> 
    </Box>


  );
};

export default AddNewEmployee;
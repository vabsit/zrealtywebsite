import { useForm, Controller } from "react-hook-form";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import CustomTextField from "../../../../common/CommonInputs/CustomTextField";
import CustomSelect from "../../../../common/CommonInputs/CustomSelect";
import CustomButton from "../../../../common/CommonButton/CustomButton";
import ResponsiveGridItem from "../../../../common/CommonSections/ResponsiveGridItem";
import SpacedStack from "../../../../common/CommonSections/SpacedStack";
import CustomDatePicker from "../../../../common/CommonInputs/CustomDatePicker";
import FormSubTitle from "../../../../common/headings/FormSubTitle";
import CustomNumberField from "../../../../common/CommonInputs/CustomNumberField";
import { useAppDispatch } from "../../../../store/store";
import { addEmployeePersionalDetails } from "../../../../store/people/slices/EmployeeSlice";
import CustomConformDialog from "../../../../common/CommonDialog/CustomConformDialog";
import { useState } from "react";

interface FormData {
  employee_dob: any;
  employee_age: any;
  employee_fathers_name: any;
  employee_pan: any;
  employee_persional_email: any;
  employee_blood_group: any;
  employee_marital_status: any;
  employee_nationality: any;
  employee_religion: any;
  employee_diffenetly_abled_type: any;
  address_line_one: any;
  address_line_two: any;
  country: any;
  state: any;
  location: any;
  pincode: any;
}

interface EEmployeePersionalDetailsProps {
  onClose?: () => void;
}

const EmployeePersionalDetails: React.FC<EEmployeePersionalDetailsProps> = ({
  onClose,
}) => {
   const [isConfirmClose,setIsConfirmClose] = useState<boolean>(false)
   const [isConfirmSave,setIsConfirmSave] = useState<boolean>(false)
   const dispatch = useAppDispatch();
  const formdata: any = {
    employee_dob: null,
    employee_age: "",
    employee_fathers_name: "",
    employee_pan: "",
    employee_persional_email: "",
    employee_blood_group: "",
    employee_marital_status: "",
    employee_nationality: "",
    employee_religion: "",
    employee_diffenetly_abled_type: "",
    address_line_one: "",
    address_line_two: "",
    country: "",
    state: "",
    location: "",
    pincode: "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: formdata,
    mode: "onChange",
  });

  const employeeTypeOptions = [
    { Label: "Full-time", value: "full_time" },
    { Label: "Part-time", value: "part_time" },
    { Label: "Contract", value: "contract" },
  ];

  const employeeStatusOptions = [
    { Label: "Active", value: "active" },
    { Label: "Inactive", value: "inactive" },
    { Label: "On Leave", value: "on_leave" },
  ];

  const titleOptions = [
    { Label: "Mr.", value: "mr" },
    { Label: "Mrs.", value: "mrs" },
    { Label: "Ms.", value: "ms" },
    { Label: "Dr.", value: "dr" },
  ];



  const onSubmit = async (data: any) => {
    console.log(data);
    setIsConfirmSave(true)
    // Handle form submission
  };


    const onConfirmSubmit = () => {
      let basicData : any = getValues()
             dispatch(addEmployeePersionalDetails(basicData))
    }
  return (
    <Box>
      <SpacedStack>
        <Box>
          <Grid  container spacing={3}>
            {/* Date of Birth */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={null}
                name="employee_dob"
                rules={{ required: "Date of Birth is required" }}
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    value={field.value}
                    onChange={field.onChange}
                    label="Date of Birth"
                    error={!!errors.employee_dob}
                    helperText={errors.employee_dob?.message?.toString()}
                    name="employee_dob"
                  />
                )}
              />
            </ResponsiveGridItem>
            {/* Age */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_age"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    name="employee_age"
                    value={field.value}
                    readOnly={true}
                    onChange={field.onChange}
                    label="Age"
                  />
                )}
              />
            </ResponsiveGridItem>
            {/* Father's Name */}
            <ResponsiveGridItem>
              <Controller
                name="employee_fathers_name"
                control={control}
                defaultValue={""}
                rules={{
                  required: "Father's Name is required",
                }}
                render={({ field }) => (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    name="employee_fathers_name"
                    label="Father's Name"
                    error={!!errors.employee_fathers_name}
                    helperText={errors.employee_fathers_name?.message?.toString()}
                    required={true}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* PAN */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_pan"
                control={control}
                // rules={{ required: "PAN is required" }}
                render={({ field }) => (
                  <CustomTextField
                    name="employee_pan"
                    value={field.value}
                    onChange={field.onChange}
                    label="PAN"
                    error={!!errors.employee_pan}
                    helperText={errors.employee_pan?.message?.toString()}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Email */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_persional_email"
                control={control}
                rules={{
                  // required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    label="Persional Email"
                    error={!!errors.employee_persional_email}
                    helperText={errors.employee_persional_email?.message?.toString()}
                    name={"employee_persional_email"}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Blood Group */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_blood_group"
                control={control}
                rules={{ required: "Blood Group is required" }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Blood Group"
                    options={employeeTypeOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_blood_group}
                    helperText={errors.employee_blood_group?.message?.toString()}
                    required
                    name={"employee_blood_group"}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Marital Status */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_marital_status"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Marital Status"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_marital_status}
                    helperText={errors.employee_marital_status?.message?.toString()}
                    name={"employee_marital_status"}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Nationality */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_nationality"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    label="Nationality"
                    name={"employee_nationality"}
                  />
                )}
              />
            </ResponsiveGridItem>
            {/* Religion */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_religion"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Religion"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_religion}
                    helperText={errors.employee_religion?.message?.toString()}
                    name={"employee_religion"}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Differently Abled Type */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="employee_diffenetly_abled_type"
                rules={{ required: "Differently Abled Type is required" }}
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Differently Abled Type"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_diffenetly_abled_type}
                    helperText={errors.employee_diffenetly_abled_type?.message?.toString()}
                    required
                    name={"employee_diffenetly_abled_type"}
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Submit Button */}
          </Grid>
        </Box>
        <Divider></Divider>
      <FormSubTitle title="Residential Address"  />
      <Box>
      <Grid container spacing={3}>
     
          {/* Address Line 1 */}
         <ResponsiveGridItem >
          <Controller
          defaultValue={""}
            name="address_line_one"
            control={control}
            rules={{ required: "Address Line 1 is required" }}
            render={({ field }) => (
              <CustomTextField
                    name="address_line_one"
                    value={field.value}
                    onChange={field.onChange}
                    required
                    label="Address Line 1"   
                    error={!!errors.address_line_one}
                    helperText={errors.address_line_one?.message?.toString()}    />
            )}
          />
        </ResponsiveGridItem> 
          {/* Address Line 2 */}
          <ResponsiveGridItem >
          <Controller
          defaultValue={""}
            name="address_line_two"
            rules={{ required: "Address Line 2 is required" }}
            control={control}
            render={({ field }) => (
              <CustomTextField
                    name="address_line_two"
                    value={field.value}
                    required
                    onChange={field.onChange}
                    label="Address Line 2"  
                    error={!!errors.address_line_two}
                    helperText={errors.address_line_two?.message?.toString()}  />
            )}
          />
        </ResponsiveGridItem>
        
            {/* Country */}
            <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="country"
                rules={{ required: "Country is required" }}
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Country"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.country}
                    helperText={errors.country?.message?.toString()}
                    required
                    name={"country"}
                  />
                )}
              />
            </ResponsiveGridItem>

             {/* State */}
             <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="state"
                rules={{ required: "State is required" }}
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="State"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.state}
                    helperText={errors.state?.message?.toString()}
                    required
                    name={"state"}
                  />
                )}
              />
            </ResponsiveGridItem>

             {/* Location */}
             <ResponsiveGridItem>
              <Controller
                defaultValue={""}
                name="location"
                rules={{ required: "Location is required" }}
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Location"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.location}
                    helperText={errors.location?.message?.toString()}
                    required
                    name={"location"}
                  />
                )}
              />
            </ResponsiveGridItem>
               {/* Pincode */}
   <ResponsiveGridItem >
          <Controller
          defaultValue={""}
            name="pincode"
            control={control}
            render={({ field }) => (
              <CustomNumberField
                    value={field.value}
                    onChange={field.onChange}
                    label="Pincode"
                    error={!!errors.pincode}
                    readOnly={true}
                    helperText={errors.pincode?.message?.toString()}
                    required name={"pincode"}              />
            )}
          />
        </ResponsiveGridItem>
      </Grid>
      
      </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
            <CustomButton variant="outlined" name={"Back"} onClick={() => setIsConfirmClose(true)}/>
          <CustomButton
            name={"Save & Continue"}
            onClick={handleSubmit(onSubmit)}
          />
        </Box>
      </SpacedStack>

        <CustomConformDialog  open={isConfirmClose} onConfirm={() => onClose && onClose()} onClose={()=>  setIsConfirmClose(false)} title="Confirm" message="Are you sure want to Close?"/>
              <CustomConformDialog  open={isConfirmSave} onConfirm={() => onConfirmSubmit()} onClose={()=> setIsConfirmSave(false)} title="Confirm" message="Are you sure want to Save?"/>
         
    </Box>
  );
};

export default EmployeePersionalDetails;

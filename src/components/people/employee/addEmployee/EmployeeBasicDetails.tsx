import { useForm, Controller } from "react-hook-form";
import { Box, Divider, Grid } from "@mui/material";
import CustomTextField from "../../../../common/CommonInputs/CustomTextField";
import CustomSelect from "../../../../common/CommonInputs/CustomSelect";
import CustomButton from "../../../../common/CommonButton/CustomButton";
import ResponsiveGridItem from "../../../../common/CommonSections/ResponsiveGridItem";
import SpacedStack from "../../../../common/CommonSections/SpacedStack";
import CustomDatePicker from "../../../../common/CommonInputs/CustomDatePicker";
import CustomNumberField from "../../../../common/CommonInputs/CustomNumberField";
import CustomCheckBox from "../../../../common/CommonInputs/CustomCheckBox";
import FormSubTitle from "../../../../common/headings/FormSubTitle";
import CustomConformDialog from "../../../../common/CommonDialog/CustomConformDialog";
import { useState } from "react";
import CustomAutoComplete from "../../../../common/CommonInputs/CustomAutoComplete";
import { useAppDispatch } from "../../../../store/store";
import { addEmployeeBasicDetails } from "../../../../store/people/slices/EmployeeSlice";
interface FormData {
  employee_no: any,
  employee_title: any,
  employee_first_name: any,
  employee_middle_name: any,
  employee_last_name: any,
  employee_type: any,
  employee_status: any,
  employee_doj: any,
  employee_email: any
  gender: any
  employee_mobileno: any
  employee_work_location: any
  employee_designation: any
  employee_department: any
  isenable_employee_portal: boolean
  isemployee_provident_fund: boolean
  employee_PF_number: any
  employee_UAN_number: any
  isemployee_pension_scheme: boolean
  isemployee_pf_wages: boolean
  isemployee_state_insurance: boolean
  employee_ESI_number: any
  is_directorPersion: boolean
}

interface EmployeeBasicDetailsProps {
  onClose?: () => void
}

const EmployeeBasicDetails: React.FC<EmployeeBasicDetailsProps> = ({ onClose }) => {

  const dispatch = useAppDispatch();
  const [isConfirmClose, setIsConfirmClose] = useState<boolean>(false)
  const [isConfirmSave, setIsConfirmSave] = useState<boolean>(false)
  const formdata: any = {
    employee_no: "",
    employee_title: "",
    employee_first_name: "",
    employee_middle_name: "",
    employee_last_name: "",
    employee_type: "",
    employee_status: "",
    employee_doj: null,
    employee_email: "",
    gender: "",
    employee_mobileno: "",
    employee_work_location: "",
    employee_designation: "",
    employee_department: "",
    isenable_employee_portal: false,
    isemployee_provident_fund: false,
    employee_PF_number: "",
    employee_UAN_number: "",
    isemployee_pension_scheme: false,
    isemployee_pf_wages: false,
    isemployee_state_insurance: false,
    employee_ESI_number: "",
    is_directorPersion: false
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
    clearErrors,
    watch
  } = useForm<FormData>({
    defaultValues: formdata,
    mode: "onChange"
  });

  const employeeTypeOptions = [
    { Label: "Full-time", value: "full_time" },
    { Label: "Part-time", value: "part_time" },
    { Label: "Contract", value: "contract" }
  ];

  const employeeStatusOptions = [
    { Label: "Active", value: "active" },
    { Label: "Inactive", value: "inactive" },
    { Label: "On Leave", value: "on_leave" }
  ];

  const titleOptions = [
    { Label: "Mr.", value: "mr" },
    { Label: "Mrs.", value: "mrs" },
    { Label: "Ms.", value: "ms" },
    { Label: "Dr.", value: "dr" }
  ];

  const countries: any[] = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
      code: 'BA',
      label: 'Bosnia and Herzegovina',
      phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
      code: 'CA',
      label: 'Canada',
      phone: '1',
      suggested: true,
    },
    {
      code: 'CC',
      label: 'Cocos (Keeling) Islands',
      phone: '61',
    },
    {
      code: 'CD',
      label: 'Congo, Democratic Republic of the',
      phone: '243',
    },
    {
      code: 'CF',
      label: 'Central African Republic',
      phone: '236',
    },
    {
      code: 'CG',
      label: 'Congo, Republic of the',
      phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
      code: 'DE',
      label: 'Germany',
      phone: '49',
      suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
      code: 'DO',
      label: 'Dominican Republic',
      phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
      code: 'FK',
      label: 'Falkland Islands (Malvinas)',
      phone: '500',
    },
    {
      code: 'FM',
      label: 'Micronesia, Federated States of',
      phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
      code: 'FR',
      label: 'France',
      phone: '33',
      suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
      code: 'GS',
      label: 'South Georgia and the South Sandwich Islands',
      phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
      code: 'HM',
      label: 'Heard Island and McDonald Islands',
      phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
      code: 'IO',
      label: 'British Indian Ocean Territory',
      phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
      code: 'IR',
      label: 'Iran, Islamic Republic of',
      phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
      code: 'JP',
      label: 'Japan',
      phone: '81',
      suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
      code: 'KN',
      label: 'Saint Kitts and Nevis',
      phone: '1-869',
    },
    {
      code: 'KP',
      label: "Korea, Democratic People's Republic of",
      phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
      code: 'LA',
      label: "Lao People's Democratic Republic",
      phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
      code: 'MD',
      label: 'Moldova, Republic of',
      phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
      code: 'MF',
      label: 'Saint Martin (French part)',
      phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
      code: 'MK',
      label: 'Macedonia, the Former Yugoslav Republic of',
      phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
      code: 'MP',
      label: 'Northern Mariana Islands',
      phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
      code: 'PM',
      label: 'Saint Pierre and Miquelon',
      phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
      code: 'PS',
      label: 'Palestine, State of',
      phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
      code: 'SJ',
      label: 'Svalbard and Jan Mayen',
      phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
      code: 'ST',
      label: 'Sao Tome and Principe',
      phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
      code: 'SX',
      label: 'Sint Maarten (Dutch part)',
      phone: '1-721',
    },
    {
      code: 'SY',
      label: 'Syrian Arab Republic',
      phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
      code: 'TC',
      label: 'Turks and Caicos Islands',
      phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
      code: 'TF',
      label: 'French Southern Territories',
      phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
      code: 'TT',
      label: 'Trinidad and Tobago',
      phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
      code: 'TW',
      label: 'Taiwan',
      phone: '886',
    },
    {
      code: 'TZ',
      label: 'United Republic of Tanzania',
      phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
      code: 'US',
      label: 'United States',
      phone: '1',
      suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
      code: 'VA',
      label: 'Holy See (Vatican City State)',
      phone: '379',
    },
    {
      code: 'VC',
      label: 'Saint Vincent and the Grenadines',
      phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
      code: 'VG',
      label: 'British Virgin Islands',
      phone: '1-284',
    },
    {
      code: 'VI',
      label: 'US Virgin Islands',
      phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: ' Zambia', phone: '260' },
    { code: 'ZW', label: ' Zimbabwe', phone: '263' },
  ];

  // Mock function to check uniqueness
  const checkUnique = async (field: string, value: string) => {
    // Replace with actual API call
    return true
  };

  const onSubmit = async (data: any) => {
    setIsConfirmSave(true)
  };

  const onConfirmSubmit = () => {
    let basicData: any = getValues()
    dispatch(addEmployeeBasicDetails(basicData))
  }

  return (
    <Box   >
      <SpacedStack>
        <Box>
          <Grid container spacing={3}>




            <ResponsiveGridItem>
              <Grid container spacing={1}>
                <Grid size={3}>
                  {/* Title */}
                  <Controller
                    defaultValue=""
                    name="employee_title"
                    control={control}
                    rules={{ required: "Title is required" }}
                    render={({ field }) => (
                      <CustomSelect
                        name="employee_title"
                        value={field.value}
                        onChange={field.onChange}
                        label="Title"
                        options={titleOptions}
                        optionLabelKey="Label"
                        optionValueKey="value"
                        error={!!errors.employee_title}
                        helperText={errors.employee_title?.message?.toString()}
                        required
                      />
                    )}
                  />
                </Grid>

                <Grid size={9}>
                  {/* First Name */}
                  <Controller
                    defaultValue=""
                    name="employee_first_name"
                    control={control}
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <CustomTextField
                        name="employee_first_name"
                        value={field.value}
                        onChange={field.onChange}
                        label="First Name"
                        error={!!errors.employee_first_name}
                        helperText={errors.employee_first_name?.message?.toString()}
                        required
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </ResponsiveGridItem>


            {/* Middle Name */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_middle_name"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    name="employee_middle_name"
                    value={field.value}
                    onChange={field.onChange}
                    label="Middle Name" />
                )}
              />
            </ResponsiveGridItem>

            {/* Last Name */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_last_name"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    label="Last Name" name={"employee_last_name"} />
                )}
              />
            </ResponsiveGridItem>
            {/* Employee Number */}
            <ResponsiveGridItem >
              <Controller
                name="employee_no"
                control={control}
                defaultValue={""}
                rules={{
                  required: "Employee number is required",
                  validate: {
                    unique: async (value: any) => {
                      const isUnique = await checkUnique('employee_no', value);
                      return isUnique || "Employee number must be unique";
                    }
                  }
                }}
                render={({ field }) => (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    name="employee_no"
                    label="Employee No"
                    error={!!errors.employee_no}
                    helperText={errors.employee_no?.message?.toString()}
                    required={true} />
                )}
              />
            </ResponsiveGridItem>
            {/* Employee Type */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_type"
                control={control}
                rules={{ required: "Employee type is required" }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Employee Type"
                    options={employeeTypeOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_type}
                    helperText={errors.employee_type?.message?.toString()}
                    required name={"employee_type"} />
                )}
              />
            </ResponsiveGridItem>

            {/* Employee Status */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_status"
                control={control}
                rules={{ required: "Employee status is required" }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Employee Status"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_status}
                    helperText={errors.employee_status?.message?.toString()}
                    required name={"employee_status"} />
                )}
              />
            </ResponsiveGridItem>

            {/* Date of Joining */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={null}
                name="employee_doj"
                rules={{ required: "Date of Joining is required" }}
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    value={field.value}
                    onChange={field.onChange}
                    label="Date of Joining"
                    error={!!errors.employee_doj}
                    helperText={errors.employee_doj?.message?.toString()}
                    name="employee_doj"
                  />
                )}
              />
            </ResponsiveGridItem>

            {/* Email */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  },
                  validate: {
                    unique: async (value: any) => {
                      const isUnique = await checkUnique('employee_email', value);
                      return isUnique || "Email must be unique";
                    }
                  }
                }}
                render={({ field }) => (
                  <CustomTextField
                    value={field.value}
                    onChange={field.onChange}
                    label="Email"
                    error={!!errors.employee_email}
                    helperText={errors.employee_email?.message?.toString()}
                    required name={"employee_email"} placeholder={"abc@xyx.com"} />
                )}
              />
            </ResponsiveGridItem>

            {/* Gender */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="gender"
                control={control}
                rules={{ required: "Gender is required" }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Gender"
                    options={countries}
                    optionLabelKey="label"
                    optionValueKey="code"
                    error={!!errors.gender}
                    helperText={errors.gender?.message?.toString()}
                    required name={"gender"}
                    addField={true}
                    onAddClick={() => console.log("")
                    } />
                )}
              />
            </ResponsiveGridItem>
            {/* Mobile Number */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_mobileno"
                control={control}
                rules={{ required: "Mobile Number is required" }}
                render={({ field }) => (
                  <CustomNumberField
                    value={field.value}
                    onChange={field.onChange}
                    label="Mobile Number"
                    error={!!errors.employee_mobileno}
                    helperText={errors.employee_mobileno?.message?.toString()}
                    required name={"employee_mobileno"} />
                )}
              />
            </ResponsiveGridItem>
            {/* Work Location */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_work_location"
                control={control}
                rules={{ required: "Work Location is required" }}
                render={({ field }) => (
                  <CustomAutoComplete
                    value={field.value}
                    onChange={field.onChange}
                    label="Work Location"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_work_location}
                    helperText={errors.employee_work_location?.message?.toString()}
                    required name={"employee_work_location"} addField={true}
                    onAddClick={() => console.log("")} />
                )}
              />
            </ResponsiveGridItem>
            {/* Designation */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_designation"
                control={control}
                rules={{ required: "Designation is required" }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Designation"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_designation}
                    helperText={errors.employee_designation?.message?.toString()}
                    required name={"employee_designation"} />
                )}
              />
            </ResponsiveGridItem>

            {/* Designation */}
            <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_department"
                control={control}
                rules={{ required: "Department is required" }}
                render={({ field }) => (
                  <CustomSelect
                    value={field.value}
                    onChange={field.onChange}
                    label="Department"
                    options={employeeStatusOptions}
                    optionLabelKey="Label"
                    optionValueKey="value"
                    error={!!errors.employee_department}
                    helperText={errors.employee_department?.message?.toString()}
                    required name={"employee_department"} />
                )}
              />
            </ResponsiveGridItem>

            {/* Enable Portal Access */}
            <ResponsiveGridItem xs={12} sm={12} md={12} lg={12} xl={12} >
              <Controller
                defaultValue={false}
                name="isenable_employee_portal"
                control={control}
                render={({ field }) => (
                  <CustomCheckBox
                    value={field.value}
                    onChange={field.onChange}
                    label="Enable Portal Access"
                    error={!!errors.isenable_employee_portal}
                    helperText={errors.isenable_employee_portal?.message?.toString()}
                    required
                    name={"isenable_employee_portal"} />
                )}
              />
            </ResponsiveGridItem>

            {/* E\Director/person */}
            <ResponsiveGridItem xs={12} sm={12} md={12} lg={12} xl={12} >
              <Controller
                defaultValue={false}
                name="is_directorPersion"
                control={control}
                render={({ field }) => (
                  <CustomCheckBox
                    value={field.value}
                    onChange={field.onChange}
                    label="Employee is a Director/person with substantial interest in the company."
                    error={!!errors.is_directorPersion}
                    helperText={errors.is_directorPersion?.message?.toString()}
                    required
                    name={"is_directorPersion"} />
                )}
              />
            </ResponsiveGridItem>

          </Grid>

        </Box>
        <Divider></Divider>
        <FormSubTitle title="Statutory Components" />
        <Box>
          <Grid container spacing={3}>
            {/* Employees' Provident Fund */}
            <ResponsiveGridItem xs={12} sm={12} md={12} lg={12} xl={12} >
              <Controller
                defaultValue={false}
                name="isemployee_provident_fund"
                control={control}
                render={({ field }) => (
                  <CustomCheckBox
                    value={field.value}
                    onChange={field.onChange}
                    label="Employees' Provident Fund"
                    error={!!errors.isemployee_provident_fund}
                    helperText={errors.isemployee_provident_fund?.message?.toString()}
                    required
                    name={"isemployee_provident_fund"} />
                )}
              />
            </ResponsiveGridItem>
            {/* PF Account Number */}
            {watch("isemployee_provident_fund") ? <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_PF_number"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    name="employee_PF_number"
                    value={field.value}
                    onChange={field.onChange}
                    required
                    label="PF Account Number" placeholder={"AA/AAA/0000000/XXX/0000000"} />
                )}
              />
            </ResponsiveGridItem> : null}
            {/* UAN */}
            {watch("isemployee_provident_fund") ? <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_UAN_number"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    name="employee_UAN_number"
                    value={field.value}
                    required
                    onChange={field.onChange}
                    label="UAN" placeholder={"000000000000"} />
                )}
              />
            </ResponsiveGridItem> : null}
          </Grid>

        </Box>
        {watch("isemployee_provident_fund") ? <Box>
          <Grid container spacing={3}>
            {/* Contribute to Employee Pension Scheme */}
            <ResponsiveGridItem  >
              <Controller
                defaultValue={false}
                name="isemployee_pension_scheme"
                control={control}
                render={({ field }) => (
                  <CustomCheckBox
                    value={field.value}
                    onChange={field.onChange}
                    label="Contribute to Employee Pension Scheme"
                    error={!!errors.isemployee_pension_scheme}
                    helperText={errors.isemployee_pension_scheme?.message?.toString()}
                    required
                    name={"isemployee_pension_scheme"} />
                )}
              />
            </ResponsiveGridItem>
            {/* Contribute EPS at actual PF Wages */}
            {watch("isemployee_pension_scheme") ? <ResponsiveGridItem  >
              <Controller
                defaultValue={false}
                name="isemployee_pf_wages"
                control={control}
                render={({ field }) => (
                  <CustomCheckBox
                    value={field.value}
                    onChange={field.onChange}
                    label="Contribute EPS at actual PF Wages"
                    error={!!errors.isemployee_pf_wages}
                    helperText={errors.isemployee_pf_wages?.message?.toString()}
                    required
                    name={"isemployee_pf_wages"} />
                )}
              />
            </ResponsiveGridItem> : null}
          </Grid>
        </Box> : null}
        <Box>
          <Grid container spacing={3}>
            {/* Employees' State Insurance */}
            <ResponsiveGridItem xs={12} sm={12} md={12} lg={12} xl={12} >
              <Controller
                defaultValue={false}
                name="isemployee_state_insurance"
                control={control}
                render={({ field }) => (
                  <CustomCheckBox
                    value={field.value}
                    onChange={field.onChange}
                    label="Employees' State Insurance"
                    error={!!errors.isemployee_state_insurance}
                    helperText={errors.isemployee_state_insurance?.message?.toString()}
                    required
                    name={"isemployee_state_insurance"} />
                )}
              />
            </ResponsiveGridItem>
            {/* ESI Insurance Number */}
            {watch("isemployee_state_insurance") ? <ResponsiveGridItem >
              <Controller
                defaultValue={""}
                name="employee_ESI_number"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    name="employee_ESI_number"
                    value={field.value}
                    onChange={field.onChange}
                    label="ESI Insurance Number"
                    required
                    placeholder={'0000000000'} />
                )}
              />
            </ResponsiveGridItem> : null}

          </Grid>

        </Box>

        {/* Submit Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "flex-end" }}>
          <CustomButton variant="outlined" name={"Close"} onClick={() => setIsConfirmClose(true)} />
          <CustomButton name={"Save & Continue"} onClick={handleSubmit(onSubmit)} />
        </Box>
      </SpacedStack>
      <CustomConformDialog open={isConfirmClose} onConfirm={() => onClose && onClose()} onClose={() => setIsConfirmClose(false)} title="Confirm" message="Are you sure want to Close?" />
      <CustomConformDialog open={isConfirmSave} onConfirm={() => onConfirmSubmit()} onClose={() => setIsConfirmSave(false)} title="Confirm" message="Are you sure want to Save?" />
    </Box>
  );
};

export default EmployeeBasicDetails;
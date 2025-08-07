import { Box, TextField } from "@mui/material"
import CustomTextField from "../../common/CommonInputs/CustomTextField"
import { useState } from "react"
import CustomSelect from "../../common/CommonInputs/CustomSelect"
import { Label } from "@mui/icons-material"
import CustomAutoComplete from "../../common/CommonInputs/CustomAutoComplete"
import OrgChart from "./OrganizationLevel"

const Layout = () => {
    
     const [plaintext , setplaintext] = useState<any>("")
     const [selecttext , setselecttext] = useState<any>("")
     const [selecttextoptions , setselecttextoptions] = useState<any>([{Label:"val 1" , value : "1"},{Label:"val 2" , value : "2"}])

    return (

        <>
    
<Box
    
    >
     <OrgChart/>
    
    </Box>
        </>
    )
}

export default Layout
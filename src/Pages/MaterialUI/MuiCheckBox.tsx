import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckBox = () => {
    const [accept, setAccept] = useState(false);
    console.log(accept);
    const [skills, setSkills] = useState<string[]>([]);
    console.log(skills);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked);
    }

    const handleSkillchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if(index === -1){
            setSkills([...skills, event.target.value]);
        } else{
            setSkills(skills.filter(skill => skill !== event.target.value));
        }
    }

     return (
         <Box m={10}>
             <Box>
                 <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={accept} onChange={handleChange} size="small" color="secondary"/>}/>
             </Box>

             <Box>
                 <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={accept} onChange={handleChange}/>
             </Box>

             <Box>
                 <FormControl error>
                     <FormLabel>Skills</FormLabel>
                     <FormGroup row>
                     <FormControlLabel label="HTML" control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillchange}/>}/>
                     <FormControlLabel label="CSS" control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillchange}/>}/>
                     <FormControlLabel label="JS" control={<Checkbox value="js" checked={skills.includes('js')} onChange={handleSkillchange}/>}/>
                     </FormGroup>
                     <FormHelperText>Invalid selection</FormHelperText>
                 </FormControl>
             </Box>
         </Box>
     )
}
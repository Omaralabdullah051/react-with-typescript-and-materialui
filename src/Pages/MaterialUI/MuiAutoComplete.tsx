import {Stack, Autocomplete, TextField} from "@mui/material";
import { useState } from "react";

interface Skill {
    id: number,
    label: string
}

const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);
    console.log(value);
    console.log(skill);

    //using array
    const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT'];

    //using array of objects
    const skillsOptions = skills.map((skill, index) => ({
          id: index + 1,
          label: skill
    }));

    return (
        <Stack spacing={2} width="250px" m={10}>
           <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="skills"/>} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue) } freeSolo/>

           <Autocomplete options={skillsOptions} renderInput={(params) => <TextField {...params} label="skills"/>} value={skill} onChange={(event: any, newValue: Skill | null) => setSkill(newValue) }/>
        </Stack>

    );
};

export default MuiAutoComplete;
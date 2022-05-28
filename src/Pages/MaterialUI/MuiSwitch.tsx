import {Box, FormControlLabel, Switch, FormGroup,FormControl,FormLabel,FormHelperText} from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    console.log(checked);

    const [switches, setSwitches] = useState<string[]>([]);
    console.log(switches);

    const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    const handleSwitches = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = switches.indexOf(event.target.value);
        if(index === -1){
            setSwitches([...switches, event.target.value]);
        }else{
            setSwitches(switches.filter(switc => switc !== event.target.value));
        }
    }

    return (
        <Box>
            <Box>
            <FormControlLabel label="Dark mode" control={<Switch checked={checked} onChange={handleChage} size="small" color="success"/>}/>
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Switch</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label="HTML" value="html" control={<Switch checked={switches.includes('html')} onChange={handleSwitches}/>}/>
                        <FormControlLabel label="CSS" value="css" control={<Switch checked={switches.includes('css')} onChange={handleSwitches}/>}/>
                        <FormControlLabel label="JS" value="js" control={<Switch checked={switches.includes('js')} onChange={handleSwitches}/>}/>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiSwitch;
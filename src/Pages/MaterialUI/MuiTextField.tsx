import {Stack, TextField, InputAdornment} from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}  p={6}>
        <Stack direction="row" spacing={2}>
            <TextField label="name" variant="outlined"/>
            <TextField label="name" variant="filled"/>
            <TextField label="name" variant="standard"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Small secondary" size="small" color="secondary"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Form Input" required value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password'}/>
            <TextField label="password" type="password" required helperText="Do not share your password with anyone"/>
            <TextField label="Read Only" inputProps={{readOnly: true}}/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Amount" InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}/>
            <TextField label="Weight" InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>
            }}/>
        </Stack>
        </Stack>
    );
};

export default MuiTextField;
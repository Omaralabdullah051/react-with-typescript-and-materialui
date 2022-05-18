import {Box, TextField, MenuItem} from '@mui/material';
import React, { useState } from 'react';

const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [value, setValue] = useState<string | null>(null);

    console.log(country);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setCountry(event.target.value);
    }

    return (
        <Box width="250px" p={6}>
            <TextField label="Select Country" value={country} select onChange={handleChange} fullWidth size="small" color="secondary" error={!value}  helperText="Please Select Your Country" >
                <MenuItem value="In">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
            </TextField>
        </Box>
    );
};

export default MuiSelect;
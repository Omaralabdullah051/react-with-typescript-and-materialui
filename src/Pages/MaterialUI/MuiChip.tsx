import {Stack, Chip, Avatar} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip2', 'Chip3']);

    const handleDelete = (chipToDelete :string) => {
        setChips((chips) => chips.filter((chip) => chip!== chipToDelete));
    }

    return (
        <Stack direction="row" spacing={1} m={10}>
            <Chip icon={<FaceIcon/>} label="chip" color="primary" size="small"></Chip>

            <Chip label="chip-outlined" color="secondary" size="small" variant="outlined" avatar={<Avatar>V</Avatar>}></Chip>
            
            <Chip label="click" color="success" onClick={() => alert('Clicked')}/>
            <Chip label="delete" color="error" onClick={() => alert('Clicked')} onDelete={() => alert('Deleted')}/>

            {
                chips.map(chip => <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>)
            }
        </Stack>
    );
};

export default MuiChip;
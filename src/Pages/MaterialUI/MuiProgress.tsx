import {Stack, CircularProgress, LinearProgress} from "@mui/material";

const MuiProgress = () => {
    return (
        <Stack spacing={2}>
            <CircularProgress color="success"/>
            <CircularProgress color="error"/>
            <CircularProgress variant="determinate" value={60}/>

            <LinearProgress color="success"/>
            <LinearProgress color="error"/>
            <LinearProgress variant="determinate" value={60}/>
        </Stack>
    );
};

export default MuiProgress;
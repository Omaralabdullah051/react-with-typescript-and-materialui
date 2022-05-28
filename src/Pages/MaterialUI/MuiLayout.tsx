import {Box, Stack,Divider,Grid, Paper} from "@mui/material";

const MuiLayout = () => {
    return (
        <Paper sx={{padding: '32px', margin:'64px'}} elevation={4}>
        <Stack>
            <Stack 
            sx={{border: '1px solid'}} 
            direction="row" 
            spacing={2} 
            mx="auto"
            divider={<Divider orientation="vertical" flexItem/>}>  {/*also row-reverse or column-reverse */}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color:'white',
            height: '100px',
            weight: "100px",
            padding: '16px',
            '&:hover': {
                backgroundcolor: 'primary.light',
            }
          }}
          >
            WELCOME
        </Box>
        <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}></Box>
        </Stack>

        <Stack 
            sx={{border: '1px solid'}} 
            direction="row" 
            spacing={2} 
            divider={<Divider orientation="vertical" flexItem/>}>  {/*also row-reverse or column-reverse */}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color:'white',
            height: '100px',
            width: {
                lg: '35vw',
                md: '50vw',
                xs: '70vw'
              },
            padding: '16px',
            '&:hover': {
                backgroundcolor: 'primary.light',
            }
          }}
          >
            WELCOME
        </Box>
        </Stack>
        </Stack>
        <Grid container my={4} px={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={12} sm={6} md={3}>
               <Box bgcolor="primary.light" p={2}>Item1</Box>     
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor="primary.light" p={2}>Item2</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor="primary.light" p={2}>Item3</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box bgcolor="primary.light" p={2}>Item4</Box>
            </Grid>
        </Grid>
        </Paper>
    );
};

export default MuiLayout;
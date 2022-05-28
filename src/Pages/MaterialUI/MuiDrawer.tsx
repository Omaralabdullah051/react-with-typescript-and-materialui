import {Drawer,Box,Typography, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MuiDrawer = () => {
     const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box p={2} width="250px" role="presentation">
               <Typography variant="h6" component="div">
                   Side Panel
               </Typography>
            </Box>
        </Drawer>
        </>
    );
};

export default MuiDrawer;
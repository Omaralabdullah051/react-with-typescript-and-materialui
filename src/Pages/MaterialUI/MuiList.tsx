import {Box, List, ListItem, ListItemText, ListItemIcon,Avatar,ListItemAvatar,ListItemButton,Divider} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
    return (
        <Box sx={{width: '400px', bgcolor: "#efefef"}} m={20}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List item 1" secondary="secondary Text"/>
                    </ListItemButton>
                </ListItem>
                <Divider></Divider>
                <ListItem>
                <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="List item 2"/>
                </ListItem>
                <Divider></Divider> 
                <ListItem>
                <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="List item 3"/>
                </ListItem>
            </List>
                    
        </Box>
    );
};

export default MuiList;
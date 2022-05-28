import {Stack, Avatar, AvatarGroup} from "@mui/material";

const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={1}>
                <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
            </Stack>

            <Stack direction="row" spacing={1}>
                <AvatarGroup> {/*can also use max props */}
                <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg"/>
                <Avatar src="https://randomuser.me/api/portraits/men/51.jpg"/>
                </AvatarGroup>
            </Stack>

            <Stack direction="row" spacing={1}>
                <Avatar variant="square" sx={{width:55, height: 55}} src="https://randomuser.me/api/portraits/women/79.jpg"/>
                <Avatar sx={{width:55, height: 55}} src="https://randomuser.me/api/portraits/men/51.jpg"/>
            </Stack>
        </Stack>
    );
};

export default MuiAvatar;
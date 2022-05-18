import { Typography } from "@mui/material";

const MyTypography = () => {
    return (
        <div>
           <Typography variant="h1">h1 heading</Typography>
           <Typography variant="h2">h2 heading</Typography>
           <Typography variant="h3" gutterBottom={true} align="left">h3 heading</Typography>
           <Typography variant="h4" component="h1">h4 heading</Typography>
           <Typography variant="h5">h5 heading</Typography>
           <Typography variant="h6">h6 heading</Typography>

           <Typography variant="subtitle1">subtitle 1</Typography>
           <Typography variant="subtitle2">subtitle 2</Typography>

           <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur placeat at cum id, rem nesciunt itaque autem ratione iure voluptatum ullam maxime voluptate, quia illum numquam. Mollitia, perferendis, accusantium vero magni doloremque, dolore ad cupiditate consectetur maxime id a est neque? Laboriosam explicabo quae expedita aspernatur, distinctio dolor quod tempore.</Typography>
           <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quo assumenda voluptatum expedita harum deleniti cumque ad voluptatem nisi illo aut laboriosam rem aperiam quas enim iure facere temporibus dicta, sint quos dignissimos atque tempora sapiente. Id, temporibus nesciunt perferendis, repellendus veritatis minus mollitia quos nisi ut eius quibusdam enim!</Typography>
        </div>
    );
};

export default MyTypography;
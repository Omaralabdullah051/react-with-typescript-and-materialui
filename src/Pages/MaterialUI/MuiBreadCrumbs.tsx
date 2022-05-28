import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadCrumbs = () => {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon/>} maxItems={2} itemsBeforeCollapse={2}>
               <Link underline="hover" href="#">Home</Link>
               <Link underline="hover" href="#">Catalog</Link>
               <Link underline="hover" href="#">Accessories</Link>
               <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
        </Box>
    );
};

export default MuiBreadCrumbs;
import {Stack, Rating} from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null);
    console.log(value);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }

    const ratingValue = 3;
    return (
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} size="large"/>

            <Rating value={value} onChange={handleChange} precision={0.5} size="large"  icon={<FavoriteIcon fontSize="inherit" color="error"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}/>

            <Rating value={ratingValue} onChange={handleChange} precision={0.5} size="large"  icon={<FavoriteIcon fontSize="inherit" color="error"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>} readOnly/>
        </Stack>
    )
}
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
  createTheme,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, useState } from "react";
import { Context } from "../../App";

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const value = useContext(Context);

  let theme;
  if (value?.checked) theme = "dark";
  else theme = "light";

  let backgroundColor;
  let color;
  if (theme === "dark") {
    backgroundColor = "#111827";
    color = "#fff";
  } else {
    backgroundColor = "#fff";
    color = "#000";
  }

  return (
    <AppBar sx={{ backgroundColor }} position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button sx={{ fontWeight: 700 }} color="inherit">
            Features
          </Button>
          <Button sx={{ fontWeight: 700 }} color="inherit">
            Pracing
          </Button>
          <Button sx={{ fontWeight: 700 }} color="inherit">
            About
          </Button>
          <Button
            sx={{ fontWeight: 800, fontFamily: "sans-serif" }}
            onClick={handleClick}
            id="resources-button"
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button sx={{ fontWeight: 700 }} color="inherit">
            Login
          </Button>
          <FormControlLabel
            label="Dark mode"
            control={
              <Switch
                checked={value?.checked}
                onChange={value?.handleChange}
                size="small"
                color="success"
              />
            }
          />
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;

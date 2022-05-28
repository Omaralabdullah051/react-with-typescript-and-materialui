import { Route, Routes } from 'react-router-dom';
import './App.css';
import Functionality from './Pages/Functionality/Functionality';
import { Home } from './Pages/Home/Home';
import MaterialUI from './Pages/MaterialUI/MaterialUI';
import {Box} from "@mui/material";
import { createContext, useState } from "react";
import MuiNavbar from "./Pages/MaterialUI/MuiNavbar";

type Props = {
  checked: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Context = createContext<Props | null>(null);

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
}

let theme;
if(checked) theme = "dark";
else theme = 'light';

let backgroundColor;
let color;
if(theme === 'dark'){
  backgroundColor = '#000';
  color = '#e11d48';
} else{
  backgroundColor = '#fff';
  color = '#000';
}



  return (
   <Context.Provider value={{checked, handleChange}}>
      <Box sx={{backgroundColor, color}}>
      <MuiNavbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/materialui" element={<MaterialUI/>}/>
        <Route path="/functionality" element={<Functionality/>}/>
      </Routes>
    </Box>
   </Context.Provider>
  )
}

export default App;

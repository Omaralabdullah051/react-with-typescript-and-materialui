import AddItem from "./AddItem";
import DataFetching from "./DataFetching";
import Form from './Form';
import Infos from "./Infos";
import Services from "./Services";
import React, { createContext } from "react"

export const theme = {
    color: '#fff',
    backgroundColor: 'black'
}

export const ThemeContext = createContext(theme);

const Functionality = () => {
    return (
        <div>
             <ThemeContext.Provider value={theme}>
                <DataFetching/>    
                <Form />     
                <Services />   
                <AddItem/>
                <Infos/>
             </ThemeContext.Provider>
        </div>
    );
};
export default Functionality;
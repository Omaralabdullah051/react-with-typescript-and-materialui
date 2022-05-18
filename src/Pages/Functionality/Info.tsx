import { useContext } from "react";
import { ThemeContext } from "./Functionality";

interface InfoProps{
    as?: React.ElementType,
    children: React.ReactNode
}

const Info = ({as,children}: InfoProps) => {

    const {color,backgroundColor} = useContext(ThemeContext);

    const Component = as || 'div';
    return (
        <Component style={{color, backgroundColor}}>
             {children}
        </Component>
    )
}

export default Info;
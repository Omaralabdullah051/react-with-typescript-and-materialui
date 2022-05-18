import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h2 style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme is here</h2>
        </div>
    )
}
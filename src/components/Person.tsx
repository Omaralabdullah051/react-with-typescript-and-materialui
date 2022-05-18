import { PersonProps } from "./Types/Types";

export const Person = ({name}: PersonProps) => {
    const {first,last} = name;
    return (
        <div>
             <h2>Hello {first} {last}! How are you?</h2>
        </div>
    )
}
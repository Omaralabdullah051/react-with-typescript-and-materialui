import React from "react";

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value,handleChange} : InputProps) => {
    const handleChangeTwice = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <input onChange={handleChange} type="text" value={value}/>
            <input onChange={handleChangeTwice} type="text" value={value}/>
        </div>
    )
}
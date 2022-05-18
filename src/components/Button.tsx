import React from "react"

type  ButtonProps = {
    handleClick: () => void,
    handleClickTwice: (event : React.MouseEvent<HTMLButtonElement>, id:number) => void
}

export const Button = ({handleClick,handleClickTwice}: ButtonProps) => {
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <button onClick={(event) => handleClickTwice(event, 1)}>Click again</button>
        </div>
    )
}
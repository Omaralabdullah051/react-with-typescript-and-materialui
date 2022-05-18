type PersonListProps = {
    names : {
        first: string, 
        last: string
    }[]
}

export const PersonList = ({names}: PersonListProps) => {
    return (
        <div>
            {
                names.map((name,index) => (<div key={index}><h2>{name.first} {name.last}</h2></div>))
            }
        </div>
    )
}
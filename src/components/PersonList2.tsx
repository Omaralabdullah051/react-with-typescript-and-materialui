import { Name } from "./Types/Types"

type PersonList2Props = {
    names: Name[]
}

export const PersonList2 = ({names}: PersonList2Props) => {
    return (
        <div>
            {
                names.map((name,index) => (<div key={index}><h2>{name.first} {name.last}</h2></div>))
            }
        </div>
    )
}
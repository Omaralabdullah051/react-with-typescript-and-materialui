import { useEffect, useState } from "react";
import Info from "./Info";

interface InfosProps{
    _id: string,
    info: string,
}

const Infos = () => {
    const [infos,setInfos] = useState<InfosProps[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://hidden-eyrie-82910.herokuapp.com/informations');
            const data = await res.json();
            setInfos(data);
        })()
    },[]);

    return (
        <div>
            {
                infos?.map(info => <Info as="h5" key={info._id}>{info.info}</Info>)
            }
        </div>
    )
}

export default Infos;
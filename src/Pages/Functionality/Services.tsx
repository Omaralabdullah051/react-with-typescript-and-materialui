import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {

    interface ServiceType {
        _id: string,
        name: string,
        discription: string,
        img: string
    }

    const [services, setServices] = useState<ServiceType[] | null>(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    (async () => {
        try {
            const res = await fetch('https://hidden-eyrie-82910.herokuapp.com/services');
            const data = await res.json();
            setLoading(false);
            setServices(data);
        }
        catch (err) {
            setLoading(false);
        }
    })()
}, []);
return (
    <div>
        <h3>Our Services</h3>
        {loading ? <h3>Loading....</h3> : ''}
        <div>
            {
                services?.map(service => (<Service key={service._id} service={service}/>))
            }
        </div>
    </div>
);
}

export default Services;
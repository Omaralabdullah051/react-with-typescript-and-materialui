interface ServiceProps {
   service: {
    _id: string,
    name: string,
    discription: string,
    img: string
   }
}

const Service = ({service}: ServiceProps) => {
    return (
        <div>
           <img src={service.img} alt="" />
            <h5>{service.name}</h5>
            <p>{service.discription}</p>
         </div>
    )
}

export default Service;
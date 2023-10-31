import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { BsFillCalendarCheckFill, BsTelephoneForwardFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center my-20 space-y-5 text-black">
                <h4 className="text-[#FF3811] font-bold text-xl">Service</h4>
                <h2 className="text-4xl font-semibold">Our Service Area</h2>
                <p className="capitalize">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="my-5 flex justify-center">
                <button className="btn btn-outline border-[#FF3811] border-2 text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-white">More Services</button>
            </div>

            <div className="flex flex-col md:flex-row gap-10 justify-center py-20 px-8 bg-[#151515] text-white rounded-xl">
                <div className="flex items-center gap-5">
                    <BsFillCalendarCheckFill className="text-5xl" />
                    <div>
                        <p>We are open monday-friday</p>
                        <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <BsTelephoneForwardFill className="text-5xl"></BsTelephoneForwardFill>
                    <div>
                        <p>Have a question?</p>
                        <p className="text-2xl font-bold">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <CiLocationOn className="text-5xl"></CiLocationOn>
                    <div>
                        <p>Need a repair? our address</p>
                        <p className="text-2xl font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
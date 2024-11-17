import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatment = () => {
    const services = useLoaderData();

    return (
        <div className="grid grid-cols-4 gap-11 w-10/12 mx-auto mt-12">
            {
                services.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatment;
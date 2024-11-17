import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
    const services =useLoaderData();
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-11 w-10/12 mx-auto mt-12">
                {
                    services.map((service,idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;
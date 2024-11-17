import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
    const services =useLoaderData();
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    services.map((service,idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;
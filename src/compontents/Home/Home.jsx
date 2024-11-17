import { NavLink, useLoaderData } from "react-router-dom";
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
                    services.slice(0,5).map((service,idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
            <button className="mx-auto block text-red-200 btn btn-primary"><NavLink to='/allTreatment' >See More</NavLink></button>
        </div>
    );
};

export default Home;
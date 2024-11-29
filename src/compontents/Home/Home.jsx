import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
    const services =useLoaderData();
    const {serviceData,feedback} =services
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-11 w-10/12 mx-auto mt-12">
                {
                    serviceData.slice(0,5).map((service,idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
            <button className="mx-auto block text-red-200 btn bg-green-900 my-7"><NavLink to='/allTreatment' >See More</NavLink></button>

            <FeedBack feedback={feedback} ></FeedBack>
        </div>
    );
};

export default Home;
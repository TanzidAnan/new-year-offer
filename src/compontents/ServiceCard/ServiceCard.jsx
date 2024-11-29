/* eslint-disable react/prop-types */

const ServiceCard = ({ service }) => {
    const {id,image,treatment_description,treatment_name,cost} =service
    console.log(service)
    const hendleChecking =(id) =>{
        console.log(id)
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="w-full h-52">
                    <img
                    className="w-full h-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {treatment_name}
                    </h2>
                    <p className="text-lg font-bold text-lime-400">Price: ${cost}</p>
                    <p title={treatment_description}>{treatment_description.slice(0,100)} </p>
                    <div className="card-actions justify-end">
                        <div onClick={() =>hendleChecking(id)} className="badge badge-outline font-bold p-5 cursor-pointer bg-green-900 text-white">Chack Out More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
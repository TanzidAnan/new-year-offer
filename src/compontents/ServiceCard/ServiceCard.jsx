
const ServiceCard = ({ service }) => {
    const {image,treatment_description,treatment_name,cost} =service
    console.log(service)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="w-full">
                    <img
                    className="w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {treatment_name}
                        <div className="badge badge-secondary">Price:{cost}</div>
                    </h2>
                    <p>{treatment_description.slice(0,100)} <a className="text-red-600" href="">reed more</a></p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
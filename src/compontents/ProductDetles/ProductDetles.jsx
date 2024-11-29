import { useLoaderData, useParams } from "react-router-dom";

const ProductDetles = () => {
    const allData = useLoaderData();
    console.log(allData)
    const { id } = useParams();
    console.log(parseInt(id))
    const productId = allData.find(data => data.id === parseInt(id));
    console.log(productId)
    const {treatment_name,treatment_description,image,cost} =productId
    return (
        <div>
            <div className="card bg-base-100 w-8/12 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-semibold">{treatment_name}</h2>
                    <p>{treatment_description}</p>
                    <p className="text-4xl font-bold">Price: {cost} tk</p>
                    <div className="card-actions">
                        <button className="btn bg-green-900 text-white text-lg font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetles;
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetles = () => {
    const allData =useLoaderData();
    const {id}=useParams();
    console.log(parseInt(id))
    return (
        <div>
            
        </div>
    );
};

export default ProductDetles;
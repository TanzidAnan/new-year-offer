import { useLoaderData, useParams } from "react-router-dom";

const ProductDetles = () => {
    const allData =useLoaderData();
    console.log(allData)
    const {id}=useParams();
    console.log(parseInt(id))
    const productId =allData.find(data => data.id ===parseInt(id));
    console.log(productId)
    return (
        <div>
            
        </div>
    );
};

export default ProductDetles;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../compontents/MainLayout/MainLayout";
import Home from "../compontents/Home/Home";
import Profile from "../compontents/Profile/Profile";
import AllTreatment from "../compontents/AllTreatment/AllTreatment";
import MYApperment from "../compontents/MYApperment/MYApperment";
import ProductDetles from "../compontents/ProductDetles/ProductDetles";

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async() => {
                    const serviceRes =await fetch('/service.json');
                    const serviceData =await serviceRes.json()

                    const feedbackRes =await fetch('/fitback.json');
                    const feedback =await feedbackRes.json();

                    return{serviceData,feedback}
                },
            },
            {
                path:'/allTreatment',
                element:<AllTreatment></AllTreatment>,
                loader:() => fetch('/service.json')
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/myApperment',
                element:<MYApperment></MYApperment>
            },
            {
                path:'/product/:id',
                element:<ProductDetles></ProductDetles>,
                loader:() => fetch('/service.json')
            }
        ]
    }
])

export default router
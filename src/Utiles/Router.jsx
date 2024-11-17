import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../compontents/MainLayout/MainLayout";
import Home from "../compontents/Home/Home";
import About from "../compontents/About/About";
import Profile from "../compontents/Profile/Profile";
import AllTreatment from "../compontents/AllTreatment/AllTreatment";

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/AllTreatment',
                element:<AllTreatment></AllTreatment>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    }
])

export default router
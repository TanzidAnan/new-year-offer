import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../compontents/MainLayout/MainLayout";
import Home from "../compontents/Home/Home";
import Profile from "../compontents/Profile/Profile";
import AllTreatment from "../compontents/AllTreatment/AllTreatment";
import MYApperment from "../compontents/MYApperment/MYApperment";

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/service.json')
            },
            {
                path:'/allTreatment',
                element:<AllTreatment></AllTreatment>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/myApperment',
                element:<MYApperment></MYApperment>
            }
        ]
    }
])

export default router
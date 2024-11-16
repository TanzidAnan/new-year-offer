import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../compontents/MainLayout/MainLayout";
import Home from "../compontents/Home/Home";
import About from "../compontents/About/About";

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
                path:'/about',
                element:<About></About>
            }
        ]
    }
])

export default router
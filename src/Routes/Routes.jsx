import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../SignUp/SignUp";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },

        ]
    }
])

export default Routes;
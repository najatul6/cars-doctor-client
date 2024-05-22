import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../SignUp/SignUp";
import Checkout from "../Pages/Shared/Checkout/Checkout";
import ServicesDetail from "../Pages/ServiceDetails/ServicesDetail";
import Orders from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/serviceDetails/:id",
                element: <ServicesDetail></ServicesDetail>,
                loader: ({ params }) => fetch(`https://car-doctor-server-psi-five.vercel.app/services/${params.id}`),
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://car-doctor-server-psi-five.vercel.app/services/${params.id}`),
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
        ]
    }
])

export default Routes;
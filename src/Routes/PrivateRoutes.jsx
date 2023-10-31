import { useContext } from "react";
import { AuthContext } from "../Pages/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <progress className="progress w-56 "></progress>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoutes;
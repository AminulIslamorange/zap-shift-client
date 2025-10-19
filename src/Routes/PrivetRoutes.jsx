import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location=useLocation();
    if (loading) {


        <span className="loading loading-spinner loading-xl"></span>
    }
    if(!user){
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivetRoutes;
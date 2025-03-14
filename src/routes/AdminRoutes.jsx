import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoutes = ({ children }) => {
    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
   
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-primary"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;
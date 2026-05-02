import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import Loader from "./Loader.jsx";

/**
 * Wraps a route element so only authenticated users can access it.
 * Shows a spinner while the auth state is being resolved.
 * Redirects to /signin if no valid session exists.
 */
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <Loader />;
    if (!user)   return <Navigate to="/signin" replace />;
    return children;
};

export default ProtectedRoute;

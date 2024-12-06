import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoutes = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    // Wait for authentication state to load
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Redirect to /login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Render protected routes
    return <Outlet />;
};

export { ProtectedRoutes };

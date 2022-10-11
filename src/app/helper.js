import {
    Navigate,
} from "react-router-dom";

export const PublicRoute = ({ children }) => {
    const authUser = localStorage.getItem('xxx')
    if (authUser) return <Navigate to="/dashboard" />
    return children;
}

export const PrivateRoute = ({ children }) => {
    const authUser = localStorage.getItem('xxx')
    if (!authUser) return <Navigate to="/" />
    return children;
}

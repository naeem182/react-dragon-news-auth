import { useContext } from "react"
import { AuthContex } from "../Provider/Authprovider"
import { Navigate } from "react-router-dom";


const PriateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContex)


    if (loading) {
        return <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PriateRoute

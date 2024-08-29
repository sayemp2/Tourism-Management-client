import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)

    if(loader){
        return <span className="loading loading-spinner mx-auto loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default PrivateRoute;
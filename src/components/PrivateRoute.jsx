import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hook/useAuthStatus";

export default function PrivateRoute(){
    const {logginIn, checkingStatus} = useAuthStatus();
    if(checkingStatus){
        return <h1>Loading...</h1>
    }
    return logginIn ? <Outlet/> : <Navigate to="/sign-in"/>
}
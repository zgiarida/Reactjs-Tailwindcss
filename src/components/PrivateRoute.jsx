import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hook/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const { logginIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner/>;
  }
  return logginIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

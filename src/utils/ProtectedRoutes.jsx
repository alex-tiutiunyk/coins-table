import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const userEmail = useSelector(state => state.user.email)
  return userEmail ? <Outlet /> : <Navigate to="/coins-table"/>
}

export default ProtectedRoutes
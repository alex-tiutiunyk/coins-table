import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const userEmail = localStorage.getItem('userEmail')
  return userEmail ? <Outlet /> : <Navigate to="/coins-table"/>
}

export default ProtectedRoutes
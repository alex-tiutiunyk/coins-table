import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Bot from "./pages/Bot"
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import { setUser } from "./store/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const dispatch = useDispatch();

  const userEmail = localStorage.getItem('userEmail')

  dispatch(setUser({
    email: userEmail
  }))
  const email = useSelector(state => state.user.email)


  return (
    <>
      <Routes>
        {
          !email && (
            <>
              <Route path="/coins-table" element={<Login />}/>
              <Route path="/" element={<Navigate to="/coins-table"/>}/>
            </>
          )
        }
        <Route element={<ProtectedRoutes />}>
          <Route path="/coins-table" element={<Navigate to="/coins-table/bot"/>}/>
          <Route path="/" element={<Navigate to="/coins-table/bot"/>}/>
          <Route path="/coins-table/bot" element={<Bot />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App

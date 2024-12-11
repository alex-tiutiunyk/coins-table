import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Bot from "./pages/Bot"
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./utils/ProtectedRoutes"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="coins-table/" element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path="coins-table/bot" element={<Bot />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Bot from "./pages/Bot"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="coins-table/" element={<Login />}/>
        <Route path="coins-table/bot" element={<Bot />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App

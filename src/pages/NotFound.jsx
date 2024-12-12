import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-5xl mb-4">404</h1>
      <Link to="/coins-table" className="text-blue-500 hover:underline">Go to Login</Link>
    </div>
  )
}

export default NotFound

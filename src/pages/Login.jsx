import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center h-screen max-w-md mx-auto p-6">
          {/* Left: Image */}
        {/* Right: Login Form */}
        <div className= "bg-gray-100 rounded-lg w-full p-6">
          <a href="https://crypto-fund.zojax.com"><img src="https://crypto-fund.zojax.com/logo.png" alt="" width="150" className="mb-4 block mx-auto"/></a>
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST">
          {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">Password</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-red-500"/>
              <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
            </div>
            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
            {/* Login Button */}
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full max-w-52 mx-auto block">Login</button>
          </form>
          {/* Sign up  Link */}
          <div className="mt-6 text-green-500 text-center">
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full max-w-52 mx-auto block">Request Registration</a>
          </div>
        </div>
      </div>
      {/* <Link to="/coins-table/bot">Bot</Link> */}
    </>
  )
}

export default Login

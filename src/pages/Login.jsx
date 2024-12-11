import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    if (e.target.name === "username") return setEmail(e.target.value);
    if (e.target.name === "password") return setPassword(e.target.value);
    return
  }

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(setUser({
          email: user.user.email,
          id: user.user.uid,
          token: user.user.accessToken
        }))
        setEmail('');
        setPassword('');
        navigate('/coins-table/bot');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center min-h-screen max-w-md mx-auto p-6">
        {/* Right: Login Form */}
        <div className= "bg-gray-100 rounded-lg w-full p-6">
          <a href="https://crypto-fund.zojax.com"><img src="https://crypto-fund.zojax.com/logo.png" alt="" width="150" className="mb-4 block mx-auto"/></a>
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleForm}
              value={email}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleForm}
              value={password}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
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
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full max-w-52 mx-auto block" onClick={handleLogIn}>Login</button>
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

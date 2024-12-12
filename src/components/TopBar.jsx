import { useDispatch } from "react-redux"
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";

const TopBar = () => {
  const userEmail = localStorage.getItem('userEmail')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        localStorage.removeItem('userEmail')
        navigate('/coins-table')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <div className="border-b p-3">
      User: {userEmail}
      <button type="submit" className="bg-green-600 hover:bg-green-500 text-white font-semibold rounded-md py-1 px-2 ml-2" onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default TopBar

import {useDispatch, useSelector} from "react-redux";
import {loginAndLogout} from "../../store/AuthSlice.js"
import { useEffect } from "react";
function Login() {
    const dispatch = useDispatch(); 
    const {user} = useSelector(state => state.auth);
    const handelAuth = () => {
        dispatch(loginAndLogout());
    }

    useEffect(() => {
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user))
    },[user])

  return (
    <button onClick={handelAuth}>{user.isLoged ? "LogOut" : "Login"}</button>
  )
}

export default Login
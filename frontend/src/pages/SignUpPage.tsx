import { useEffect } from "react"
import SignUp from "../components/auth/User/SignUp"




const SignUpPage = () => {
  useEffect(() => {
    document.title = "Sign Up"
  },[])
  return (
   <SignUp/>
  )
}

export default SignUpPage
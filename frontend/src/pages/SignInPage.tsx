
import { useEffect } from 'react'
import SignIn from '../components/auth/User/SignIn.tsx'

const SignInPage = () => {
    useEffect(() => {
        document.title = "Sign In"
      },[])
  return (
    <SignIn/>
  )
}

export default SignInPage
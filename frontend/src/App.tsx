
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUpPage } from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  document.title = "App"

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/api/auth/signup" element={<SignUpPage/>} />
        <Route path="/api/auth/signin" element={<SignInPage/>} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

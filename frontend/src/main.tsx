import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import ErrorPage from "./pages/ErrorPage"
import Cart from './components/cart/Cart.tsx'
import HomePage from './pages/HomePage.tsx'
// show  Header in all routes except signin signup  and errorPage

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/api/auth/signup",
        element: <SignUpPage />,
      },
      {
        path: "/api/auth/signin",
        element: <SignInPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </React.StrictMode>
)

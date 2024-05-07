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
import Tshirts from './pages/T-shirts.tsx'
import Stickers from './pages/Stickers.tsx'
import Merchantdise from './pages/Merchantdise.tsx'
import Header from './components/Appbar/Header.tsx'
import { Provider } from 'react-redux'
import { store } from './redux-store/store.ts'
import Profile from './pages/Profile.tsx'

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
        path: "/auth/signup",
        element: <SignUpPage />,
      },
      {
        path: "/auth/signin",
        element: <SignInPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/t-shirts",
        element: <>
          <Header />
          <Tshirts />
        </>,
      },
      {
        path: "/stickers",
        element: <>
          <Header />
          <Stickers />
        </>,
      },
      {
        path: "/merchandise",
        element: <>
          <Header />
          <Merchantdise />
        </>,
      }
      ,
      {
        path: "/profile",
        element: <>
          <Header />
          <Profile />
        </>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

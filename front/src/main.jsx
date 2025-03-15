import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HomePage} from './HomePage.jsx'
import {Login} from './Login.jsx'
import {Register} from './register.jsx'
import {Territories} from './territories.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/territories",
    element: <Territories />,    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

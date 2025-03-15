import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HomePage} from './HomePage.jsx'
import {Login} from './Login.jsx'
import {Register} from './register.jsx'
import {Territories} from './territories.jsx'
import { HomeInfo } from './homeInfo.jsx'
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
  },
  {
    path: "/home/:territory_number",
    element: <HomeInfo />,
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

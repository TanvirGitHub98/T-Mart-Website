import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Products from './components/Products/Products.jsx'
import ViewInfo from './components/ViewInfo/ViewInfo.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/products',
        loader:()=>fetch('https://fakestoreapi.com/products'),
        element:<Products></Products>,
    
      },
      {
        path:'/viewInfo/:productId',
        loader: ({params})=>fetch(`https://fakestoreapi.com/products/${params.productId}`) ,
        element:<ViewInfo></ViewInfo>

      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

const router=createBrowserRouter([{
  path:'/', element:<App/> , children:[{
    path:'/',element:<Hero/>
  },{path:'/projects',element:<Projects/>}]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

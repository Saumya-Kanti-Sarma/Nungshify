import React from 'react'
import { Outlet, RouterProvider } from "react-router-dom";
import Router from './routes/Router.jsx';
const App = () => {



  return (
    <>
      <RouterProvider router={Router} />
      <Outlet />
    </>
  )
}

export default App

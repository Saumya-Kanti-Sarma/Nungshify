import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Pages/home/Home';
import Downloads from './Pages/yt-downloads/Downloads';
import About from './Pages/about/About';
const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/yt-download",
      element: <Downloads></Downloads>
    },
    {
      path: "/about",
      element: <About></About>
    },
  ])

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App

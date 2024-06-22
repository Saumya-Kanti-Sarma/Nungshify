import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home.jsx";
import Downloads from "../Pages/yt-downloads/Downloads.jsx";
import About from "../Pages/about/About.jsx";

const Router = createBrowserRouter([
  {
    path: "/Nungshify/",
    element: <Home />,
  },
  {
    path: "/Nungshify/yt-download",
    element: <Downloads />,
  },
  {
    path: "/Nungshify/about",
    element: <About />,
  },
])

export default Router
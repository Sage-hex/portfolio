import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Mentorship from "../pages/Mentorship";
import Portfolio from "../pages/Portfolio";
import Snippet from "../pages/Snippets";
import Blog from "../pages/Blog";
import Layout from "../components/layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "home", element: <Home /> },
      { path: "mentorship", element: <Mentorship /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "snippets", element: <Snippet /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

export default router;

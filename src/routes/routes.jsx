import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Community from "../pages/Community";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/community',
            element:<Community></Community> 
        },
        {
            path: '/contact',
            element:<Contact></Contact>
        },
        {
            path: '/blogs',
            element:<Blogs></Blogs>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path: '/login',
            element: <Signin></Signin>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
      ]
    },
  ]);
  export default router
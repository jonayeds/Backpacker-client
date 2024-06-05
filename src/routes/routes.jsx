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
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../pages/dashboard/MyProfile";
import MyWishlist from "../pages/dashboard/MyWishlist";
import MyBookings from "../pages/dashboard/MyBookings";
import Request from "../pages/dashboard/Request";
import PackageDetails from "../pages/PackageDetails";
import GuideProfile from "../Components/GuideProfile";
import AssignedTours from "../pages/dashboard/AssignedTours";
import ManageUsers from "../pages/dashboard/ManageUsers";
import AddPackage from "../pages/dashboard/AddPackage";
import TypedPackage from "../pages/TypedPackage";

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
        {
            path: '/package/:id',
            element: <PackageDetails></PackageDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/package/${params.id}`),
        },
        {
            path: '/guide/:email',
            element: <GuideProfile></GuideProfile>,
            loader: ({params})=>fetch(`http://localhost:5000/users/${params.email}`),
        },
        {
            path: '/tours/:type',
            element: <TypedPackage></TypedPackage>,
            loader: ({params})=>fetch(`http://localhost:5000/tours/${params.type}`),
        },
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'/dashboard/myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path:'/dashboard/bookings',
          element: <MyBookings></MyBookings>
        },
        {
          path:'/dashboard/wishlist',
          element: <MyWishlist></MyWishlist>
        },
        {
          path:'/dashboard/request',
          element: <Request></Request>
        },
        {
          path:'/dashboard/assignedTours',
          element: <AssignedTours></AssignedTours>
        },
        {
          path:'/dashboard/manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path:'/dashboard/addPackage',
          element: <AddPackage></AddPackage>
        },
        
      ]
    }
  ]);
  export default router
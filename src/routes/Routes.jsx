import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mainlayout/MainLayout";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/secret/Secret";
import Dashboard from "../mainlayout/Dashboard";
import MyCart from "../pages/dashboard/mycart/MyCart";
import AllUsers from "../pages/dashboard/allusers/AllUsers";
import AddItem from "../pages/dashboard/addItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import Payment from "../pages/dashboard/payment/Payment";
import UserHome from "../pages/dashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'menu',
          element: <Menu/>
        },
        {
          path: '/order/:category',
          element: <Order/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'secret',
          element: <PrivateRoute> <Secret/> </PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard/> </PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <UserHome/>
        },
        {
          path: 'mycart',
          element: <MyCart/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        // -----------admin routes here----------
        {
          path: 'adminhome',
          element: <AdminRoute> <AdminHome/> </AdminRoute>
        },
        {
          path: 'allusers',
          element: <AdminRoute> <AllUsers/> </AdminRoute>
        },
        {
          path: 'additem',
          element: <AdminRoute> <AddItem/> </AdminRoute>,

        },
        {
          path: 'manageitems',
          element: <AdminRoute> <ManageItems/> </AdminRoute>
        }
      ]
    },
  ]);
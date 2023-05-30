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
      element: <Dashboard/>,
      children: [
        {
          path: 'mycart',
          element: <MyCart/>
        }
      ]
    },
  ]);
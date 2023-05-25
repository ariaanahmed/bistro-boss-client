import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mainlayout/MainLayout";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";

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
        }
      ]
    },
  ]);
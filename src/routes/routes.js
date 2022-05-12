import React from "react";
import { Navigate } from "react-router-dom";
import Users from "../views/Users/List";
import Home from "../containers/Home";
import Border from "../pages/Border";
import Color from "../pages/ColorPage";
import Animation from "../pages/Animation";
import Other from "../pages/Other";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Charts from "../pages/Charts";
import Dashboard from "../pages/Dashboard";
import Forget from "../pages/Forget";
import Buttons from "../pages/Buttons";
import Cards from "../pages/Cards";
import Tables from "../pages/Tables";
import Register from "../pages/Register";
import Blank from "../pages/Blank";
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/users", element: <Users /> },
      { path: "/color", element: <Color /> },
      { path: "/border", element: <Border /> },
      { path: "/animation", element: <Animation /> },
      { path: "/other", element: <Other /> },
      { path: "/login", element: <Login /> },
      { path: "/page404", element: <Page404 /> },
      { path: "/forget", element: <Forget /> },
      { path: "/charts", element: <Charts /> },
      { path: "/cards", element: <Cards /> },
      { path: "/buttons", element: <Buttons /> },
      { path: "/tables", element: <Tables /> },
      { path: "/register", element: <Register /> },
      { path: "/blank", element: <Blank /> },
      // { path: "/Dashboard", element: <Dashboard /> },

      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

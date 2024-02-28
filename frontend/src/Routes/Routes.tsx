import React from "react";
import LoginPage from "../Pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

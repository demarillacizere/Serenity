import React from "react";
import LoginPage from "../Pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import AboutUs from "../Pages/AboutUsPage";
import Resources from "../Pages/ResourcesPage";
import Chat from "../Pages/CommunityHubPage";
import Professional from "../Pages/ProfessionalDashboardPage";
import User from "../Pages/UserDashboardPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "resources", element: <Resources /> },
      { path: "chat-corner", element: <Chat /> },
      { path: "professional", element: <Professional /> },
      { path: "user", element: <User /> },
    ],
  },
]);

import React from "react";
import "./App.css";
import { Navbar } from "./Layouts/Navbar";
import { WelcomeBanner } from "./Layouts/WelcomeBanner";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

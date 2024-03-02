import React from "react";
import "./App.css";
import { Navbar } from "./Layouts/Navbar";
import { Footer } from "./Layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;

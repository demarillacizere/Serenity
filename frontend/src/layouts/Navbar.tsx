import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../Pages/LoginPage";
import { User } from "lucide-react";
import logo from "../assets/logo_color.png";
import { Button } from "../Components/Button";
import LanguageSwitcher from "../Components/LanguageSwitcher";
export function Navbar() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between items-center pt-8 mb-4 mx-14 px-10 content-center">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button></button>
        <a href="/">
          <Link to="/">
            <h3 className="text-3xl font-semibold text-primary-gradient-end">
              Serenity
            </h3>
            {/* <img src={logo} className=" w-3/4 " /> */}
          </Link>
        </a>
      </div>
      <div className="flex flex-grow md:gap-4 max-w-[600px] ">
        <Link
          to="/"
          className="font-semibold text-gray-600 hover:text-gray400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold text-gray-600 hover:text-gray400 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/resources"
          className="font-semibold text-gray-600 hover:text-gray400 transition duration-300 "
        >
          Resources
        </Link>
        <Link
          to="/chat-corner"
          className="font-semibold text-gray-600 hover:text-gray400 transition duration-300"
        >
          Chat Corner
        </Link>
        <Link
          to="/user"
          className="font-semibold text-gray-600 hover:text-gray400 transition duration-300"
        >
          User Dashboard
        </Link>
      </div>
      <div className="flex flex-shrink-0 md:gap-2 font-medium">
        {/* <Link to="/" className="font-semibold text-gray-600 hover:text-gray400 transition duration-300 antialiased">Login</Link> */}
        <Button className="h-8 rounded">
          <Link to="/login">Login</Link>
        </Button>
        {/* <Button size="icon" variant="ghost">
          {" "}
          <User />{" "}
        </Button> */}
        <LanguageSwitcher></LanguageSwitcher>
      </div>
    </div>
  );
}

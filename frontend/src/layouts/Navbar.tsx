import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../Pages/LoginPage";
import { User } from "lucide-react";
import logo from "../assets/logo_color.png";
import { Button } from "../Components/Button";
export function Navbar() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-5 mb-6 mx-14 px-14">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button></button>
        <a href="/">
          <Link to="/">
            <img src={logo} className="h-[65px] w-[160px] " />
          </Link>
        </a>
      </div>
      <div className="flex flex-grow md:gap-4 max-w-[600px] ">
      <Link to="/" className="font-semibold text-gray-600 hover:text-gray400 transition duration-300 antialiased">Home</Link>
        <Link to="/about" className="font-semibold text-gray-600 hover:text-gray400 transition duration-300 antialiased">About</Link>
        <Link to="/resources" className="font-semibold text-gray-600 hover:text-gray400 transition duration-300 antialiased">Services</Link>
        <Link to="/resources" className="font-semibold text-gray-600 hover:text-gray400 transition duration-300 antialiased">Explore Resources</Link>
      </div>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button><Link to="/login">Login</Link></Button>
        <Button size="icon" variant="ghost">
          {" "}
          <User />{" "}
        </Button>
      </div>
    </div>
  );
}

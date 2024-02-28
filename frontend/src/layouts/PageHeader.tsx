import { User } from "lucide-react";
import logo from "../assets/logo_color.png";
import { Button } from "../components/Button";
export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-5 mb-6 mx-14 px-14">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button></button>
        <a href="/">
          <img src={logo} className="h-[65px] w-[160px] " />
        </a>
      </div>
      <div className="flex flex-grow md:gap-2 max-w-[600px] ">
        <a>Home</a>
        <a>About Us</a>
        <a>Our Services</a>
        <a>Self-Help Resources</a>
      </div>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button> Login </Button>
        <Button size="icon" variant="ghost">
          {" "}
          <User />{" "}
        </Button>
      </div>
    </div>
  );
}

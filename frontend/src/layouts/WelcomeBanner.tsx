import { Link } from "react-router-dom";
import Professional from "../assets/professional.png";
import { Button } from "../Components/Button";
export function WelcomeBanner() {
  return (
    <div>
      <div className="flex gap-20 lg:gap-20 justify-between pt-5 mb-6 mx-14 px-14">
        <div className="w-3/6 flex flex-col gap-10 pt-20 mt-10">
          <h2 className="text-6xl font-semibold antialiased tracking-normal mt-5 text-gray-800 space-">
            Welcome to our<br></br>
            <span className="text-primary-orange inline-block py-2">
              {" "}
              Mental Wellness{" "}
            </span>
            Community
          </h2>
          <p>
            Whether you're seeking professional therapy, connecting with peers
            in our supportive community, or exploring self-help resources, we're
            here to empower you on your journey to mental well-being
          </p>
          <div className="flex gap-3 font-semibold">
            <Button className=" w-max">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button
              variant={"ghost"}
              className="w-max border bg-white border-primary-orange text-primary-orange"
            >
              <Link to="#">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="w-2/4 pt-20">
          <img src={Professional} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end ... p-5 text-white flex justify-around flex-shrink text-lg">
        <div className="flex-col p-5">
          <p className="font-semibold">Users</p>
          <p className="font-extrabold text-5xl mt-4">300 +</p>
        </div>
        <div className="flex-col p-5">
          <p className="font-semibold">Professionals</p>
          <p className="font-extrabold text-5xl mt-4">30 +</p>
        </div>
        <div className="flex-col p-5">
          <p className="font-semibold">Appointments</p>
          <p className="font-extrabold text-5xl mt-4">120 +</p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Professional from "../assets/professional.png";
import { Button } from "../Components/Button";
export function WelcomeBanner() {
  return (
    <div>
      <div className="flex gap-20 lg:gap-20 justify-between pt-5 mb-6 mx-14 px-14">
        <div className="w-2/6 flex flex-col gap-10 pt-10">
          <h2 className="text-4xl font-semibold antialiased tracking-wide mt-5 text-gray-800">
            Healthy Minds, Happy Lives <br/>Welcome to our
            <span className="text-primary-orange"> Mental Wellness </span>
            Community
          </h2>
          <p>
          Whether you're seeking professional therapy, connecting with peers in our supportive community, or exploring self-help resources, we're here to empower you on your journey to mental well-being
          </p>
          <Button className="font-bold w-max"><Link to="/register">Get Started</Link></Button>
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

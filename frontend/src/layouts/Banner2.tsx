import { Link } from "react-router-dom";
import Professional from "../assets/professional.png";
import { Button } from "../Components/Button";
export function Banner2() {
  return (
    <div className="bg-gradient-to-r from-primary-gradient-end via-primary-gradient-end to-primary-gradient-start ...">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-100 sm:text-6xl">
          <span className="inline-block">
            <span className=" text-orange-500">Community</span>
          </span>
          <br></br>
          <span className="inline-block">Chat Corner</span>
        </h1>

        <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-white sm:mt-6">
          <span className="inline-block">
            Where understanding hearts and supportive minds come together,
            providing solace through shared experiences and empathetic
            connections
          </span>
        </p>
      </div>
    </div>
  );
}

import Professional from "../assets/professional.png";
import { Button } from "../components/Button";
export function WelcomeBanner() {
  return (
    <div>
      <div className="flex gap-20 lg:gap-20 justify-between pt-5 mb-6 mx-14 px-14">
        <div className="w-2/5 flex flex-col gap-10 pt-10">
          <h2 className="text-5xl font-semibold antialiased tracking-wide">
            Healthy Minds, Happy Lives
            <span className="text-primary-orange"> Mental Health </span>
            Consultancy
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
            eros sed dolor consectetur, at imperdiet odio mollis. Phasellus a
            dui pharetra, sagittis ex quis.
          </p>
          <Button className="font-bold w-max">Register</Button>
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

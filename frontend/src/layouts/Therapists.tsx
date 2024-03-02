import React, { useState } from "react";
import { Button } from "../Components/Button";
import therapist1 from "../assets/therapist1.jpg";
import therapist2 from "../assets/therapist2.jpg";
import { Link } from "react-router-dom";

export default function Therapists() {
  const availableTherapists = [
    {
      name: "Albert Einstein",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist1,
      reviews: "4.8",
      rate: 200,
    },
    {
      name: "Maria Mukantwali",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist2,
      reviews: 4.3,
      rate: 300,
    },
    {
      name: "Ernestine Abera",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist1,
      reviews: 4.3,
      rate: 100,
    },
    {
      name: "Ernestine Abera",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist2,
      reviews: 5,
      rate: 100,
    },
    { name: "Albert Einstein",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist1,
      reviews: "4.8",
      rate: 200,
    },
    {
      name: "Maria Mukantwali",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist2,
      reviews: 4.3,
      rate: 300,
    },
    {
      name: "Ernestine Abera",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist1,
      reviews: 4.3,
      rate: 100,
    },
    { name: "Albert Einstein",
      bio: "I have a master's degree in Psychology from Toronto University. I am experienced in families.",
      image: therapist1,
      reviews: "4.8",
      rate: 200,
    },
  ];

  const [therapists] = useState(availableTherapists);

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md mt-10 p-2 w-1/4"
        />
      </div>
      <div className="grid grid-cols-4 gap-10">
        {therapists.map((therapist) => {
          return (
            <div className=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className=" mx-4 mt-4 overflow-hidden shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={therapist.image} alt={therapist.name} />
                <div className="absolute inset-0 w-full h-full to-bg-black-10  from-transparent via-transparent to-black/60"></div>
                <button
                  className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                ></button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                    {therapist.name}
                  </h5>
                  <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {therapist.reviews}
                  </p>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                  {therapist.bio}
                </p>
                {/* <div className="inline-flex flex-wrap items-center gap-3 mt-8 group"> */}
                {/* <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clip-rule="evenodd"
                ></path>
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
              </svg>
            </span> */}
                {/* </div> */}
              </div>
              <div className="p-6 pt-3 flex gap-2">
                <Button
                  className="block  select-none rounded-lg  py-3.5 px-4 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                    <Link to="/">Book Now</Link>
                  
                </Button>
                <Button
                  className="block bg-white select-none border border-primary-orange rounded-lg  py-3.5 px-4 text-center align-middle font-sans text-sm font-semibold uppercase text-primary-orange shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read More
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import profilePicture from "../assets/professional.png"; // Import the profile picture
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  ClipboardCopy,
  CircleDollarSign,
  Settings,
  CheckCircle2,
  Clock4,
} from "lucide-react";
import { MessagesSquare, User } from "lucide-react";
import Logo from "../assets/logo_white.png";

const ProfessionalDashboardPage = () => {
  // Sample data for past appointments
  const pastAppointments = [
    {
      date: "November 20, 2023",
      time: "9:00 AM - 10:00 AM",
      client: "Alice Johnson",
    },
    {
      date: "November 18, 2023",
      time: "3:00 PM - 4:00 PM",
      client: "Bob Smith",
    },
    {
      date: "November 15, 2023",
      time: "11:00 AM - 12:00 PM",
      client: "Emily Brown",
    },
  ];

  return (
    <div className="flex justify-between w-full rounded-sm bg-gray-700">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-3 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto  text-white p-3">
          <h3 className="text-3xl py-5 px-2 font-bold pb-8">Serenity</h3>
          <h3 className="text-xs py-2 px-2">MAIN MENU</h3>
          <ul className="space-y-2 font-medium text-sm">
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5  transition duration-75xt-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ClipboardCheck />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Appointments
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  23
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ClipboardCopy />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Past Appointments
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span>
                  <MessagesSquare />
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium text-sm  dark:border-gray-700">
            <h3 className="text-xs px-2">OTHER MENU</h3>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Notes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CircleDollarSign />
                <span className="ms-3">Payments</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium text-sm  dark:border-gray-700">
            <h3 className="text-xs px-2">HELP & SETTINGS</h3>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <User />
                <span className="ms-3">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Settings />
                <span className="ms-3">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 21"
                >
                  <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                </svg>
                <span className="ms-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 flex-grow text-gray-700">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 bg-gray-100 w-full">
          <h3 className="flex items-center py-3 gap-3 hover:text-gray-900 rounded-lg border-b">
            <svg
              className="w-5 h-5  transition duration-75xt-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            Dashboard
          </h3>
          <h4 className="py-4 font-medium bg-white rounded mb-4 w-max px-4 my-4">
            Welcome Back Dr. Louise
          </h4>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="rounded p-6 bg-white">
              <div className="card-header font-semibold flex items-center gap-3">
                <svg
                  fill="#5170cd"
                  version="1.1"
                  id="Capa_1"
                  width="28px"
                  height="28px"
                  viewBox="0 0 610.398 610.398"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="2.441592"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052 c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553 V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"></path>{" "}
                        <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992 h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"></path>{" "}
                        <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117 V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818 c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764 V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"></path>{" "}
                        <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017 c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"></path>{" "}
                        <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017 c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"></path>{" "}
                        <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017 c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"></path>{" "}
                        <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017 c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"></path>{" "}
                        <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032 c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"></path>{" "}
                        <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032 c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"></path>{" "}
                        <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032 c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"></path>{" "}
                        <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032 c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div>Appointments</div>
              </div>
              <div className="border-t mt-5 py-5">
                <span className="font-semibold text-3xl">35</span>
                <br />
                <span className="text-gray-400">Appointments</span>
              </div>
            </div>
            <div className="rounded p-6 bg-white">
              <div className="flex items-center gap-3 font-semibold">
                <svg
                  fill="#ea6d2a"
                  version="1.1"
                  id="Capa_1"
                  width="28px"
                  height="28px"
                  viewBox="0 0 45.902 45.902"
                  stroke="#ea6d2a"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M43.162,26.681c-1.564-1.578-3.631-2.539-5.825-2.742c1.894-1.704,3.089-4.164,3.089-6.912 c0-5.141-4.166-9.307-9.308-9.307c-4.911,0-8.932,3.804-9.281,8.625c4.369,1.89,7.435,6.244,7.435,11.299 c0,1.846-0.42,3.65-1.201,5.287c1.125,0.588,2.162,1.348,3.066,2.26c2.318,2.334,3.635,5.561,3.61,8.851l-0.002,0.067 l-0.002,0.057l-0.082,1.557h11.149l0.092-12.33C45.921,30.878,44.936,28.466,43.162,26.681z"></path>{" "}
                        <path d="M23.184,34.558c1.893-1.703,3.092-4.164,3.092-6.912c0-5.142-4.168-9.309-9.309-9.309c-5.142,0-9.309,4.167-9.309,9.309 c0,2.743,1.194,5.202,3.084,6.906c-4.84,0.375-8.663,4.383-8.698,9.318l-0.092,1.853h14.153h15.553l0.092-1.714 c0.018-2.514-0.968-4.926-2.741-6.711C27.443,35.719,25.377,34.761,23.184,34.558z"></path>{" "}
                        <path d="M6.004,11.374v3.458c0,1.432,1.164,2.595,2.597,2.595c1.435,0,2.597-1.163,2.597-2.595v-3.458h3.454 c1.433,0,2.596-1.164,2.596-2.597c0-1.432-1.163-2.596-2.596-2.596h-3.454V2.774c0-1.433-1.162-2.595-2.597-2.595 c-1.433,0-2.597,1.162-2.597,2.595V6.18H2.596C1.161,6.18,0,7.344,0,8.776c0,1.433,1.161,2.597,2.596,2.597H6.004z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div>New Clients</div>
              </div>
              <div className="border-t mt-5 py-5">
                <span className="font-semibold text-3xl">20</span>

                <br />
                <span className="text-gray-400">New Clients</span>
              </div>
            </div>
            <div className="rounded p-6 bg-white">
              <div className="flex items-center gap-3 font-semibold">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="#f0c528"
                  stroke="#f0c528"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                      <path d="M21 3c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H6.455L2 22.5V4c0-.552.448-1 1-1h18zm-1 2H4v13.385L5.763 17H20V5zm-3 2v8h-2V7h2zm-6 1v1.999L13 10v2l-2-.001V14H9v-2.001L7 12v-2l2-.001V8h2z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div>Follow-Up Clients</div>
              </div>
              <div className="border-t mt-5 py-5">
                <span className="font-semibold text-3xl">16</span>
                <br />
                <span className="text-gray-400">Follow-Up Clients</span>
              </div>
            </div>
            <div className="rounded p-6 bg-white">
              <div className="flex items-center gap-3 font-semibold">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 16 16"
                  fill="#3da03b"
                  stroke="#3da03b"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.032"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M8,0 C8.55228,0 9,0.447715 9,1 L11,1 L11,2 L13,2 C13.5523,2 14,2.44772 14,3 L14,15 C14,15.5523 13.5523,16 13,16 L3,16 C2.44772,16 2,15.5523 2,15 L2,3 C2,2.44772 2.44772,2 3,2 L5,2 L5,1 L7,1 C7,0.447715 7.44772,0 8,0 Z M5,4 L4,4 L4,14 L12,14 L12,4 L11,4 L11,5 L5,5 L5,4 Z M6,10 L10,10 C10.5523,10 11,10.4477 11,11 C11,11.51285 10.613973,11.9355092 10.1166239,11.9932725 L10,12 L6,12 C5.44772,12 5,11.5523 5,11 C5,10.48715 5.38604429,10.0644908 5.88337975,10.0067275 L6,10 Z M10,7 C10.5523,7 11,7.44772 11,8 C11,8.55228 10.5523,9 10,9 L6,9 C5.44772,9 5,8.55228 5,8 C5,7.44772 5.44772,7 6,7 L10,7 Z M8,2 C7.44772,2 7,2.44772 7,3 C7,3.55228 7.44772,4 8,4 C8.55228,4 9,3.55228 9,3 C9,2.44772 8.55228,2 8,2 Z"
                    ></path>{" "}
                  </g>
                </svg>
                <div></div>Review Reports
              </div>
              <div className="border-t mt-5 py-5">
                <span className="font-semibold text-3xl">18</span>
                <br />
                <span className="text-gray-400">Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="rounded bg-white">
              <div className="bg-indigo-50  p-6 border-b flex justify-between">
                <h3 className="font-semibold">Today's Appointments</h3>
                <Link className="text-blue-500 hover:underline" to="/">
                  View All
                </Link>
              </div>
              <div className="rounded p-6 ">
                <ol className="relative border-s border-gray-300 dark:border-gray-700 ml-10">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-[-60px] pr-3">
                      9 am
                    </time>
                    <div className="flex mt-[-25px] justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                        Rolande Anne Uwase
                      </h3>
                      <CheckCircle2 className="text-green-700" />
                    </div>

                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Consultation
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-[-60px] pr-3">
                      11 am
                    </time>
                    <div className="flex mt-[-25px] justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                        Jack Bauer
                      </h3>
                      <CheckCircle2 className="text-green-700" />
                    </div>

                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Stress Management, Social Anxiety
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-[-60px] pr-3">
                      12 pm
                    </time>
                    <div className="flex mt-[-25px] justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                        Peter Krang
                      </h3>
                      <Clock4 className="text-blue-700" />
                    </div>

                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Follow Up
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-[-60px] pr-3">
                      14 pm
                    </time>
                    <div className="flex mt-[-25px] justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                        Yeremiya Butera
                      </h3>
                      <Clock4 className="text-blue-700" />
                    </div>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Follow Up
                    </p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ml-[-60px] pr-3">
                      15 pm
                    </time>
                    <div className="flex mt-[-25px] justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                        Ange Bwiza
                      </h3>
                      <Clock4 className="text-blue-700" />
                    </div>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Anxiety
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className=" rounded bg-gray-50 h-28 dark:bg-gray-800">
              <div className="bg-indigo-50  p-6 border-b flex justify-between">
                <h3 className="font-semibold">
                  New Appointments <span className="text-blue-500">(5)</span>
                </h3>
                <Link className="text-blue-500 hover:underline" to="/">
                  View All
                </Link>
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Client Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Start
                      </th>
                      <th scope="col" className="px-6 py-3">
                        End
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Mode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Judith Niyonsenga
                      </th>
                      <td className="px-6 py-4">26/03/2023</td>
                      <td className="px-6 py-4">15:00</td>
                      <td className="px-6 py-4">15:30</td>
                      <td className="px-6 py-4">Virtual</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                      >
                        Claude Max
                      </th>
                      <td className="px-6 py-4">19/02/2024</td>
                      <td className="px-6 py-4">12:30</td>
                      <td className="px-6 py-4">13:10</td>
                      <td className="px-6 py-4">In-Person</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Sam
                      </th>
                      <td className="px-6 py-4">02/03/2024</td>
                      <td className="px-6 py-4">09:45</td>
                      <td className="px-6 py-4">10:45</td>
                      <td className="px-6 py-4">In-Person</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Uwase Karen
                      </th>
                      <td className="px-6 py-4">02/03/2024</td>
                      <td className="px-6 py-4">09:45</td>
                      <td className="px-6 py-4">10:45</td>
                      <td className="px-6 py-4">In-Person</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Galileon Musoni
                      </th>
                      <td className="px-6 py-4">02/03/2024</td>
                      <td className="px-6 py-4">09:45</td>
                      <td className="px-6 py-4">10:45</td>
                      <td className="px-6 py-4">Virtual</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboardPage;

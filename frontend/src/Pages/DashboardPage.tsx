import React from "react";
import profilePicture from "../assets/professional.png"; // Import the profile picture
import { Link } from "react-router-dom";

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
    <div className="w-full flex gap-10 mt-10">
      <div className="">
        <aside
          className="  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
              <li></li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex flex-col border-gray-800 gap-3">
          <h3 className="text-gray-600 antialiased font-semibold">
            Primary Menu
          </h3>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray400 transition duration-300 antialiased "
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray400 transition duration-300 antialiased"
          >
            Upcoming Appointments
          </Link>
          <Link
            to="/resources"
            className="text-gray-600 hover:text-gray400 transition duration-300 antialiased"
          >
            Past Appointments
          </Link>
          <Link
            to="/resources"
            className="text-gray-600 hover:text-gray400 transition duration-300 antialiased"
          >
            Logs
          </Link>
          <Link
            to="/chat-corner"
            className="text-gray-600 hover:text-gray400 transition duration-300 antialiased"
          >
            Chat Corner
          </Link>
        </div>
      </div>
      <div>
        {/* Greeting and Profile Picture */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Hello, John Doe
            </h1>
            <p className="text-lg text-gray-600">Welcome to your dashboard</p>
          </div>
          <img
            src={profilePicture}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Current Appointments */}
        <div className="bg-orange-200 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Appointments</h2>
          {/* Current appointments content */}
          {/* Sample appointment */}
          <ul>
            <li className="text-gray-700 mb-2">Date: November 25, 2023</li>
            <li className="text-gray-700 mb-2">Time: 10:00 AM - 11:00 AM</li>
            <li className="text-gray-700 mb-2">Client: John Doe</li>
          </ul>
        </div>

        {/* Past Appointments */}
        <div className="bg-blue-200 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
          {/* Past appointments content */}
          {pastAppointments.map((appointment, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{appointment.date}</h3>
              <p className="text-gray-700">{appointment.time}</p>
              <p className="text-gray-700">Client: {appointment.client}</p>
            </div>
          ))}
        </div>

        {/* New Appointments for Approval */}
        <div className="bg-green-200 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            New Appointments for Approval
          </h2>
          {/* New appointments content */}
          <ul>
            {/* Sample appointment */}
            <li className="text-gray-700 mb-2">Date: November 28, 2023</li>
            <li className="text-gray-700 mb-2">Time: 2:00 PM - 3:00 PM</li>
            <li className="text-gray-700 mb-2">Client: Jane Smith</li>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-4">
              Approve
            </button>
          </ul>
        </div>

        {/* Add New Resource Button */}
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add New Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboardPage;
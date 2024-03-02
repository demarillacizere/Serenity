import React, { useState } from "react";
import { Button } from "./Button";
import france from "../assets/france.png";
import rwanda from "../assets/rwanda.png";
import uk from "../assets/united-kingdom.png";

const LanguageSwitcher: React.FC = () => {
  // Initialize state for the selected language with default value 'English'
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Language");
  // State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to handle language change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Perform any additional actions based on the selected language (e.g., update translations)
    // For now, let's just log the selected language to the console
    console.log("Selected language:", language);
  };

  // Function to toggle the dropdown open and closed
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        variant={"nobg"}
        className="flex items-center space-x-1 text-gray-700  px-2 py-1 h-8"
        aria-label="Select language"
        onClick={toggleDropdown}
      >
        <span>{selectedLanguage}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          )}
        </svg>
      </Button>
      {isOpen && (
        <ul className="absolute top-10 right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
          <li>
            <button
              className="flex items-center justify-start w-full px-2 py-2 text-left hover:bg-gray-100 focus:outline-none"
              onClick={() => handleLanguageChange("English")}
            >
              <img
                src={uk}
                alt="English"
                className="w-4 h-4 mr-2"
                style={{ verticalAlign: "middle" }}
              />{" "}
              English
            </button>
          </li>

          <li>
            <button
              className=" flex items-center justify-start w-full px-2 py-2 text-left hover:bg-gray-100 focus:outline-none"
              onClick={() => handleLanguageChange("French")}
            >
              <img src={france} alt="French" className="w-4 h-4 mr-1" /> French
            </button>
          </li>
          <li>
            <button
              className="flex items-center justify-start w-full px-2 py-2 text-left hover:bg-gray-100 focus:outline-none"
              onClick={() => handleLanguageChange("Kinyarwanda")}
            >
              <img src={rwanda} alt="French" className="w-4 h-4 mr-1" />{" "}
              Kinyarwanda
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;

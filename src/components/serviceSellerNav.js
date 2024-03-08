import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logos from "../images/logos.png";
import { faArrowDown, faHome, faTachometerAlt,faGear, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

export default function ServiceSellerNav() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="sidebar !w-60 bg-white h-[100vh] fixed pt-10 shadow-sm">
      {/* company logo */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500">BingiHome</p>
        <img className="w-40 h-10" src={logos} alt="Company Logo" />
      </div>

      {/* menu */}
      <div className="flex ml-8 mt-14">
        <p className="text-lg">Menu</p>
        <div className="border w-[140px] h-[1px] mt-3 ml-4"></div>
      </div>

      {/* Side navigation bar*/}
      <ul className="ml-10">
        <li className="mt-4">
          <Link to="/dashboard" className="text-gray-400">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>
        <li>
          {/* Dropdown trigger */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-400 mt-4 focus:outline-none"
            >
              <FontAwesomeIcon icon={faArrowDown} /> Services Management
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul className="absolute w-full bg-white shadow-sm mt-2">
                <li>
                  <Link
                    to="/services/create"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Create Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/manage"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Manage Services
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>

        <li className="mt-4">
          <Link to="/dashboard" className="text-gray-400 ">
            <FontAwesomeIcon icon={faHandHoldingDollar} /> Earnings
          </Link>
        </li>
      </ul>


       {/* menu */}
       <div className="flex ml-8 mt-14">
          <p className="text-lg">Others</p>
          <div className="border w-[130px] h-[1px] mt-3 ml-4"></div>
        </div>
      <ul className="ml-10">
        <li className="mt-4">
          <Link to="/dashboard" className="text-gray-400 ">
            <FontAwesomeIcon icon={fa} /> Report
          </Link>
        </li>

        <li className="mt-4">
          <Link to="/dashboard" className="text-gray-400 ">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
        </li>

        <li className="mt-4">
          <Link to="/dashboard" className="text-gray-400 ">
            <FontAwesomeIcon icon={faGear} /> Settings
          </Link>
        </li>
        <li className="mt-4">
          <Link to="/dashboard" className="text-gray-400 ">
            <FontAwesomeIcon icon={faHome} /> Logout
          </Link>
        </li>
      </ul>


    </nav>
  );
}

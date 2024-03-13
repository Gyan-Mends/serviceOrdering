import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logos from "../images/logos.png";
import { faArrowDown, faTachometerAlt, faGear, faHandHoldingDollar, faUser, faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function ServiceSellerNav() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="sidebar hidden lg:block !w-60 bg-white h-[100vh] fixed pt-10 shadow-sm">
      {/* company logo */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500">BingiHome</p>
        <img className="w-40 h-10" src={logos} alt="Company Logo" />
      </div>

      {/* menu */}
      <div className="flex ml-8 mt-14">
        <p className="text-lg text-[#007ee5]">Menu</p>
        <div className="border w-[140px]  h-[1px] mt-3 ml-4"></div>
      </div>

      {/* Side navigation bar*/}
      <ul className="ml-10">
        <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          <Link to="/dashboard" >
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>

        <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          {/* Dropdown trigger */}
          <div className="relative">
            <button
              onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faArrowDown} /> Services Management
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul className="absolute w-full bg-white shadow-lg mt-2">
                <li>
                  <Link
                    to="/serviceseller/services"
                    className="block px-4 py-2 text-sm hover:text-[#007EE5] text-gray-800 hover:bg-gray-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/manage"
                    className="block text-sm hover:text-[#007EE5] px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/manage"
                    className="block text-sm hover:text-[#007EE5] px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Estimates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/manage"
                    className="block text-sm hover:text-[#007EE5] px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/manage"
                    className="block text-sm hover:text-[#007EE5] px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Orders
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>

        <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          <Link to="/dashboard" c>
            <FontAwesomeIcon icon={faHandHoldingDollar} /> Earnings
          </Link>
        </li>
      </ul>


      {/* menu */}
      <div className="flex ml-8 mt-14">
        <p className="text-lg text-[#007ee5]">Others</p>
        <div className="border w-[130px] text-sm hover:text-[#007EE5] h-[1px] mt-3 ml-4"></div>
      </div>
      <ul className="ml-10">
      <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          <Link to="/dashboard" >
           <FontAwesomeIcon icon={faSheetPlastic}/> Report
          </Link>
        </li>

        <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faUser}/> Profile
          </Link>
        </li>

        <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          <Link to="/dashboard" >
            <FontAwesomeIcon icon={faGear} /> Settings
          </Link>
        </li>
        <li className="text-gray-400 text-sm  p-2 hover:bg-gray-200 hover:text-[#007EE5] mt-2">
          <Link to="/dashboard" >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Logout
          </Link>
        </li>
      </ul>


    </nav>
  );
}

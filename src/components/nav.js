import React from "react";
import { Link } from "react-router-dom";

import "./navTogglee";



export default function Nav() {
  return (
    <div>
      <navToggle />

      <div class="topnav lg:!ml-auto register bg-gray-600 h-12 flex items-center justify-center" id="myTopnav">
        <div className="gap-10">
          <Link to="/" class="a text-white p-2 text-md hover:bg-[#007EE5] rounded-md">Home</Link>
          <Link to="about" class="a text-white p-2 text-md hover:bg-[#007EE5] rounded-md">Contact</Link>
          <Link to="" class="a text-white p-2 text-md hover:bg-[#007EE5] rounded-md">About</Link>
          <Link to="" class="a text-white p-2 text-md hover:bg-[#007EE5] rounded-md">Services</Link>
          <Link to="/pages/login" class="a text-white hover:bg-[#007EE5] rounded-md p-2 text-md">Login</Link>
          <a href="javascript:void(0)" class="icon lg:hidden a -mt-4 text-white" onclick="myFunction()">
          </a>
        </div>
      </div>
    </div>
  )
}
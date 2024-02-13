import React from "react";
import { Link } from "react-router-dom";

import "./navTogglee";



export default function Nav(){
  return(
    <div>
      <navToggle/>

    <div class="topnav lg:!ml-auto register" id="myTopnav">
      <Link to="" class="a !text-blue-100 hover:!text-white p-2 text-md">Home</Link>
      <Link to="about" class="a !text-blue-100 hover:!text-white p-2 text-md">Contact</Link>
      <Link to="" class="a !text-blue-100 hover:!text-white p-2 text-md">About</Link>
      <Link to="" class="a !text-blue-100 hover:!text-white p-2 text-md">Services</Link>
      <Link to="./pages/login" class="a !text-blue-100 hover:!text-white p-2 text-md">Login</Link>     
        <a href="javascript:void(0)" class="icon lg:hidden a -mt-4 text-white" onclick="myFunction()">
        </a>
    </div>
    <div class="mt-4 h-[0.1px] bg-gray-500"></div>
    </div>
  )
}
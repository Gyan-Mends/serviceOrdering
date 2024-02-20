import React from "react";
import { Link } from "react-router-dom";

import "./navTogglee";



export default function Nav(){
  return(
    <div>
      <navToggle/>

    <div class="topnav lg:!ml-auto register" id="myTopnav">
      <Link to="" class="a   p-2 text-md">Home</Link>
      <Link to="about" class="a   p-2 text-md">Contact</Link>
      <Link to="" class="a   p-2 text-md">About</Link>
      <Link to="" class="a  p-2 text-md">Services</Link>
      <Link to="./pages/login" class="a   p-2 text-md">Login</Link>     
        <a href="javascript:void(0)" class="icon lg:hidden a -mt-4 text-white" onclick="myFunction()">
        </a>
    </div>
    </div>
  )
}
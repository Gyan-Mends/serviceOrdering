import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css"
import { useState } from "react";
import axios from "axios";

export default function Login() {
  //accepting input
  const[email,setEmail]= useState();
  const[password, setPassword] = useState();

  //handling the email inputs
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  }

  //handling the password input
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
  }

  //handling submit
  const handleSubmit = (event) =>{
    //prventing the default behavior of the form
    event.preventDefault();

    //making request to the server
    axios.post("http://localhost/gyan/src/backend/login.php", {
        email : email,
        password : password
    },{
      headers : {
        "Content-Type" : "application/json"
      }
    }).then(response => {
      try{
        //redirecting the admin to admin dashboard
        if(response.data === "Admin"){
          
        }
        //redirecting the service seller to the dashboard
        else if(response.data === "serviceSeller"){
          
        }
        //redirecting the customer to the dashboard
        else if (response.data === "Customer"){
         
        }else{
          //statement comes here
          console.log("invalide")
        }
      }catch (error){
        console.error("Navigation error", error)
      }
    })
  }


  return (
    <div class=" flex justify-center items-center h-screen bg-gray-800">
      <div class=" h-[23rem] w-[23rem]  dark:bg-gray-600 lg:border lg:border-gray-500 rounded-md items-center flex  justify-center ">
        <form >
          <div class="flex justify-center items-center text-white">
            <h1 class="text-2xl font-poppins">Login</h1>
          </div>

          {/* email input field */}
          <label htmlFor="Email" class="text-white text-sm font-Nunito">Email</label><br />
          <input
            class="h-8 w-60 rounded outline-none pl-2 text-sm"
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="enter email"
            required
          /><br /><br/>

          {/* password input field */}
          <label htmlFor="password" class="text-white text-sm font-Nunito">Password</label><br />
          <input
            type="password"
            class="h-8 w-60 rounded outline-none pl-2 text-sm"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="enter password"
            required
          /><br />

          {/* forgot pasword */}
          <div class="text-right pt-1 text-red-500">
            <Link to=""> <a class="text-sm font-Nunito ">Forgot Password</a></Link>
          </div><br />

          {/* login button */}
          <div class=" ">
            <input class="text-white w-60  bg-blue-500 h-8 rounded" 
            type="submit" 
            id="login" 
            value="Login" 
            name="submit"
            onSubmit={handleSubmit}
            />
          </div>

          {/* signup */}
          <p class="mt-8 text-white text-[13px] font-Nunito">Don't have an account? </p>

        </form>
      </div>
    </div>
  )
}
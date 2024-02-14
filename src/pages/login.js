//importion of react components
import React, { useState, } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  //accepting user input
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, SetRole] = useState("");

  //handling the username input
  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  //handling the password input
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  //handling the role input
  const handleRoleChange = (event) => {
    SetRole(event.target.value)
  }

  const handleSubmit = event => {
    //preventing the default behaviour of the form
    event.preventDefault()

    axios.post('http://localhost/gyan/src/backend/login.php', {
      email: email,
      password: password,
      role: role
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      try {
        if (response.data === "admin") {
          navigate('/dashboard');
        } else if (response.data === "voter") {
          navigate("/Voters")
        } else if (response.data === "candidate") {
          navigate("/candidate")
        } else {
          navigate('/');
          alert('Invalid election id or password or check your role selection well');
        }
      } catch (error) {
        console.error('Navigation error:', error);
      }


    })
  }



  return (
    <div class=" flex items-center justify-center h-[100vh] bg-gray-800">
      <div class=" mt-10  border border-gray-500 border-[0.5px] rounded-lg p-4 shadow-md" >
        <form onSubmit={handleSubmit}>
          <div>

            {/* role input field*/}
            <label
              htmlFor="role"
              class="text-sm md:text-lg text-white font-poppins lg:text-sm "
            >Role</label><br />
            <select
              value={role}
              onChange={handleRoleChange}
              class="hover:bg-blue-50 w-80  h-9 outline-none border  border-gray-300 rounded pl-2  shadow-sm"
              type="text"
              id="username"
              required
            >
              <option class="text-sm text-gray-500">-- select role--</option>
              <option class="text-sm text-gray-500">Admin</option>
              <option class="text-sm text-gray-500">Customer</option>
              <option class="text-sm text-gray-500">Service Seller</option>
            </select><br /><br />
          </div>

          <div class="">
            {/* Email input field*/}
            <label
              htmlFor="email "
              class="text-sm md:text-lg text-white"
            >Email</label><br />
            <input
              value={email}
              onChange={handleEmailChange}
              class="hover:bg-blue-50 h-9 w-80 lg:ml-2 md:ml-2 outline-none border  border-gray-300 rounded pl-2  shadow-sm"
              type="text"
              id="username"
              required
            /><br></br>
          </div>

          {/* Password input field*/}
          <div class="mt-4">
            <label htmlFor="username " class="text-sm md:text-lg text-gray-600 lg:text-sm">Password </label>
            <input value={password} onChange={handlePasswordChange} class="hover:bg-blue-50 h-8 w-60 lg:ml-2 outline-none md:ml-2 border border-gray-300 rounded pl-2  shadow-sm" type="password" id="username" required /><br></br>
          </div>
          {/* Submit button*/}
          <div>
            <button class="h-16 w-16 rounded-full border border-blue-200 border-4 text-white  bg-blue-400 !text-lg"></button>
          </div>
        </form>
        {/* Link to signup page*/}
        <p class="text-sm md:text-lg text-gray-600 mt-6 lg:text-sm">
          Don't have an account? <Link class="text-blue-400" to="/signup">Sign up</Link>
        </p>

        {/* forgot password */}
        <p class="text-sm lg:text-sm md:text-lg text-gray-600 mt-4 text-right">
          <Link class="text-red-500" to="/dashboard">Forgot Password?</Link>
        </p>
      </div>
    </div>
  )
}
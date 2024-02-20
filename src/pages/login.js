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
    <div class="grid grid-cols-2 pt-10 h-[100vh] bg-[#f4f7fa]">
      <div>

      </div>
      <div className='bg-white h-60 shadow-lg rounded-md w-[700px]'>
        <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
        <form onSubmit={handleSubmit} className='p-4'>
          <p className='text-lg mb-2'>Existing User </p>
          <div>
            {/* role input field*/}

            <select
              value={role}
              onChange={handleRoleChange}
              class="hover:bg-blue-50 w-[650px]  h-9 outline-none border  border-gray-300 rounded pl-2  shadow-sm"
              type="text"
              id="username"
              required
            >
              <option class="text-sm text-blue-100">-- select role--</option>
              <option class="text-sm text-gray-500">Admin</option>
              <option class="text-sm text-gray-500">Customer</option>
              <option class="text-sm text-gray-500">Service Seller</option>
            </select><br /><br />
          </div>

          <div className='grid grid-cols-2'>
            <div class="">
              {/* Email input field*/}

              <input
                value={email}
                onChange={handleEmailChange}
                class="hover:bg-blue-50 h-9 w-80  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="text"
                id="username"
                placeholder='Username or Email'
                required
              /><br /><br />
            </div>

            {/* Password input field*/}
            <div class="">
              <input
                value={password}
                onChange={handlePasswordChange}
                class="hover:bg-blue-50 h-9 w-80  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="password"
                id="username"
                placeholder='Password'
                required />
            </div>
          </div>
          {/* Submit button*/}
          <div className='grid grid-cols-2'>
            <button
              class="h-9 w-80 text-white outline-none bg-[#007EE5] rounded pl-2  shadow-sm"
            >LOGIN</button>
            <Link className='text-red-500 text-decoration text-right mr-4' to="">Lost password</Link>
          </div>

        </form>


        {/* sign up form */}
        {/* sign up form */}
        {/* sign up form */}
        {/* sign up form */}

        <div className='bg-white  shadow-lg rounded-md w-[700px] mt-20'>          
        <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
        <form className='bg-white  shadow-lg rounded-md w-[700px] p-4 ' onSubmit={handleSubmit} >
          <p className='text-lg mb-4'>Create New Account  And <span className='text-[#007ee5]'>Access Our Services</span></p>
          <div>
            {/* role input field*/}
            <div className='grid grid-cols-2'>
            <div class="">
              {/* Email input field*/}

              <input
                value={email}
                onChange={handleEmailChange}
                class="hover:bg-blue-50 h-9 w-80 placeholder:text-sm outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="text"
                id="username"
                placeholder='First Name'
                required
              /><br /><br />
            </div>

            {/* Password input field*/}
            <div class="">
              <input
                value={password}
                onChange={handlePasswordChange}
                class="hover:bg-blue-50 h-9 w-80  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="password"
                id="username"
                placeholder='Last Name'
                required />
            </div>
          </div>

            <input
              value={role}
              onChange={handleRoleChange}
              class="hover:bg-blue-50 w-[650px]  h-9 outline-none border  border-gray-300 rounded pl-2  shadow-sm"
              type="text"
              id="username"
              required
              placeholder='Email'
            />
             <br /><br />
          </div>

          <div className='grid grid-cols-2'>
            <div class="">
              {/* Email input field*/}

              <input
                value={email}
                onChange={handleEmailChange}
                class="hover:bg-blue-50 h-9 w-80  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="text"
                id="username"
                placeholder='Password'
                required
              /><br /><br />
            </div>

            {/* Password input field*/}
            <div class="">
              <input
                value={password}
                onChange={handlePasswordChange}
                class="hover:bg-blue-50 h-9 w-80  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="password"
                id="username"
                placeholder='Repeat Password'
                required />
            </div>
          </div>
          {/* Submit button*/}
          <div className=''>
            <button
              class="h-9 w-80 text-white outline-none bg-[#007EE5] rounded pl-2  shadow-sm"
            >LOGIN</button>
          </div>

        </form>
          
        </div>
      </div>
    </div>
  )
}
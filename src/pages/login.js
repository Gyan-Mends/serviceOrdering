//importion of react components
import React, { useState, } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import log from "../images/log1.png"



export default function Login() {
  //Login form handling
  //Login form handling
  //Login form handling
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

    axios.post('http://localhost/serviceOrdering/src/backend/login.php', {
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
          navigate('/admin');
        } else if (response.data === "Service Seller") {
          navigate("/serviceSeller")
        } else if (response.data === "clients") {
          navigate("/candidate")
        } else {
          navigate('/');
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error('Navigation error:', error);
      }


    })
  }

  //signup form handling
  //signup form handling
  //signup form handling
  //signup form handling

  //accepting sign up inputs
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Mail, setMail] = useState("");
  const [Pass, setPass] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  //handling the input from the input field
  // first name input handling
  const handleSignUpFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  //last name input handling
  const handleSignUpLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  //email input handling
  const handleSignUpEmailChange = (event) => {
    setMail(event.target.value)
  }

  //hanling password input
  const handleSignUpPasswordChange = (event) => {
    setPass(event.target.value)
  }

  //handling confirm password
  const handleSignUpConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  //handling submit
  const handleSignUpSubmit = (event) => {
    //preventing the default behaviour of the form
    event.preventDefault();

    axios.post("http://localhost/serviceOrdering/src/backend/signup.php", {
      FirstName: FirstName,
      LastName: LastName,
      Mail: Mail,
      Pass: Pass,
      ConfirmPassword: ConfirmPassword
    }, {
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      //checking if user already exist
      if (response.data === "Exist") {
        alert("User with same email already exist");
      } else {
        //checking if password is equal to confirmed password
        if (Pass === ConfirmPassword) {
          //checking for successfull insertion
          if (response.data === "Success") {
            alert("User registeration successful");
          } else {
            alert("Unable to register user");
          }
        } else {
          alert("Sorry, password does not match");
        }
      }
    })
  }




  return (
    <div class="lg:grid lg:grid-cols-2 lg:gap-10 pl-10  pr-10 lg:h-[100vh] bg-[#f4f7fa]">
      {/* other login details */}
      {/* other login  details */}
      <div className='pt-20'>
        {/* image comes here */}
        <img className='lg:h-80 lg:w-[30vw]  ' src={log} alt='company logo' />

        <div className=' mt-4  lg:pl-20 '>
          <p className='text-xl '>Please login to continue</p>
          <p className='text-sm'>or sign up to join in and enjoy our services offers</p>
          <p className=' text-xl mt-6'>Why create a FREE account?</p>
          <p className='mt-2 text-sm '>If you do not have an account, you can create a Free Account</p>
          <p className=' text-sm'>and order any of our service that we offer</p>
          <p className='mt-10 text-sm '><FontAwesomeIcon className='text-[#007EE5]' icon={faCheck} /> Keep track of your favorite services</p>
          <p className='mt-2 text-sm '><FontAwesomeIcon className='text-[#007EE5]' icon={faCheck} /> Get updated before any one else get</p>
          <p className='mt-2 text-sm '><FontAwesomeIcon className='text-[#007EE5] text-sm' icon={faCheck} /> Offering quality services to clients </p>

        </div>
      </div>

      <div className='bg-white lg:h-60 h-[370px] shadow-lg rounded-md mt-20 lg:w-[46vw]'>
        <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md "></div>
        {/* sign forms */}
        {/* sign forms */}
        {/* sign forms */}
        <form onSubmit={handleSubmit} className='p-4 '>
          <p className='text-lg mb-2'>Existing User </p>
          <div>
            {/* role input field*/}

            <select
              value={role}
              onChange={handleRoleChange}
              class="hover:bg-blue-50 lg:w-[490px] w-60 text-sm  h-9 outline-none border  border-gray-300 rounded pl-2  shadow-sm"
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

          <div className='lg:grid lg:grid-cols-2'>
            <div class="">
              {/* Email input field*/}

              <input
                value={email}
                onChange={handleEmailChange}
                class="hover:bg-blue-50 h-9 w-60 text-sm outline-none border  border-gray-300 rounded pl-2  shadow-sm"
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
                class="hover:bg-blue-50 h-9 w-60 text-sm outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="password"
                id="username"
                placeholder='Password'
                required />
            </div>
          </div>
          {/* Submit button*/}
          <div className='lg:grid lg:grid-cols-2'>
            <button
              class="h-9 mt-6 lg:mt-0 lg:mb-0 mb-6 w-60 text-white outline-none bg-[#007EE5] rounded pl-2  shadow-sm"
            >LOGIN</button>
            <Link className='text-red-400 text-decoration text-right mr-4 ' to="">Lost password?</Link>
          </div>

        </form>


        {/* sign up form */}
        {/* sign up form */}
        {/* sign up form */}
        {/* sign up form */}

        <div className='bg-white  shadow-lg rounded-md mt-40 lg:mt-20'>
          <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md "></div>
          <form className='bg-white  shadow-lg rounded-md  p-4 ' onSubmit={handleSignUpSubmit} >
            <p className='text-lg mb-4'>Create New Account  And <span className='text-[#007ee5]'>Access Our Services</span></p>
            <div>
              {/* role input field*/}
              <div className='grid grid-cols-2'>
                <div class="">
                  {/* Email input field*/}

                  <input
                    value={FirstName}
                    onChange={handleSignUpFirstNameChange}
                    class="hover:bg-blue-50 h-9 w-60 text-sm placeholder:text-sm outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                    type="text"
                    id="username"
                    placeholder='First Name'
                    required
                  /><br /><br />
                </div>

                {/* Password input field*/}
                <div class="">
                  <input
                    value={LastName}
                    onChange={handleSignUpLastNameChange}
                    class="hover:bg-blue-50 h-9 w-60 text-sm  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                    type="text"
                    id="username"
                    placeholder='Last Name'
                    required />
                </div>
              </div>

              <input
                value={Mail}
                onChange={handleSignUpEmailChange}
                class="hover:bg-blue-50 w-[490px] text-sm h-9 outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                type="email"
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
                  value={Pass}
                  onChange={handleSignUpPasswordChange}
                  class="hover:bg-blue-50 h-9 w-60 text-sm outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                  type="password"
                  id="username"
                  placeholder='Password'
                  required
                /><br /><br />
              </div>

              {/* Password input field*/}
              <div class="">
                <input
                  value={ConfirmPassword}
                  onChange={handleSignUpConfirmPasswordChange}
                  class="hover:bg-blue-50 h-9 w-60 text-sm  outline-none border  border-gray-300 rounded pl-2  shadow-sm"
                  type="password"
                  id="username"
                  placeholder='Repeat Password'
                  required />
              </div>
            </div>
            {/* Submit button*/}
            <div className=''>
              <button
                class="h-9 w-60 text-white  outline-none bg-[#007EE5] rounded pl-2  shadow-sm"
              >SIGNUP</button>
            </div>

            <div className='bg-gray-400  h-[1px] w-[42vw] mt-4'></div>
            <p className='text-sm text-gray-500 mt-2'> By signing up, you agree to our <Link to="" className='text-[#007EE5]'>terms and conditions</Link></p>

          </form>

        </div>
      </div>
    </div>
  )
}
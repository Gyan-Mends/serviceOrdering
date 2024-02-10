//importing react components
import React from "react";

//importing components
import Nav from "../components/nav";
import "../css/style.css"
import clean1 from "../images/clean.avif"
import mec from "../images/auto-mechanic-working-in-garage-repair-service.webp"
import massage from "../images/massage.avif"
import construction from "../images/construction2.avif"
import teaching from "../images/teaching4.avif"
import { Link } from "react-router-dom";
import Footer from "../components/footer"

export default function Home(){
  
  return(
    <div className="bg-gray-800  p-2">
     {/* navigation bar*/}
     <Nav/>

    {/* becoming a service seller */}
    <div class="grid grid-cols-1 mt-4 mb-16 ">
        <div
            class="lg:h-[430px] md:h-60 shadow-sm  bg-gray-700 lg:grid  lg:grid-cols-2 md:grid  md:grid-cols-2 md:gap-20  p-10 rounded-sm">
              {/* service seller image */}
            <div class="">
              <img src={clean1} alt="" />
            </div>
            <div class="lg:-mt-20 text-center flex items-center justify-center flex-col">
                <p class="lg:!text-2xl sm:!text-[16px] text-white lg:animate-bounce md:text-lg">Become a service
                    seller!</p>
                <p class="text-md mt-4 md:mt-1 text-white">Get more money using your skills</p>
                <Link to="">
                  <button class="bg-blue-600 h-10 text-white w-[180px] mt-6 rounded-md">Register Now</button>
                </Link>
            </div>
        </div>
    </div>

    {/* <!-- services categories --> */}
    {/* <!-- services categories --> */}
    <div class="lg:pl-40 lg:pr-40 pt-8 pb-12 mt-20">
        <p class="text-blue-100 text-2xl ">Services Categories</p>
        <div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-20 mt-4 ">
            {/* <!-- house chores-->
            <!-- house chores--> */}
            <Link to="">
                <div
                    class="h-40 w-[340px] lg:w-[380px] bg-gray-700 shadow-sm rounded-lg flex justify-center items-center">
                    <div>
                        <div class="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa fa-home text-[20px] text-blue-600"></i>
                        </div>
                        <p class="text-md text-blue-100 -ml-4">
                            House Chores
                        </p>
                    </div>
                </div>
            </Link>

            {/* <!-- Construction -->
            <!-- Construction --> */}
            <Link to="">
                <div
                    class="mt-10 lg:mt-0 md:mt-0 h-40 w-[340px] lg:w-[380px] bg-gray-700 shadow-sm rounded-lg flex justify-center items-center">
                    <div>
                        <div class="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-solid fa-trowel-bricks text-[20px] text-blue-600"></i>
                        </div>
                        <p class="text-md -ml-4 text-blue-100">
                            Construction
                        </p>
                    </div>
                </div>
            </Link>

            {/* <!-- Teaching -->
            <!-- Teaching --> */}
            <Link to="">
                <div
                    class="mt-10 lg:mt-0 md:mt-0 h-40 w-[340px] md:w-[780px] lg:w-[380px] bg-gray-700 shadow-sm rounded-lg flex justify-center items-center">
                    <div>
                        <div class="h-14 w-14 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-solid fa-person-chalkboard text-[29px] text-blue-600"></i>
                        </div>
                        <p class="   text-md text-blue-100">
                            Teaching
                        </p>
                    </div>
                </div>
            </Link>
        </div>


        <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2  gap-20 mt-10">
            {/* <!-- Mechanics -->
            <!-- Mechanics --> */}
            <Link to="">
                <div
                    class="mt-10 lg:mt-0 md:mt-0 h-40 w-[340px] lg:w-[270px] bg-gray-700 shadow-sm flex justify-center items-center rounded-lg ">
                    <div>
                        <div class="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-solid fa-car-wrench text-[20px] text-blue-600"></i>
                        </div>
                        <p class="text-md  -ml-2 text-blue-100">
                            Mechanics
                        </p>
                    </div>
                </div>
            </Link>
{/* 
            <!-- Massage -->
            <!-- Massage --> */}
            <Link to="">
                <div
                    class="mt-10 lg:mt-0 md:mt-0 h-40 w-[340px] lg:w-[270px] bg-gray-700 shadow-sm rounded-lg flex justify-center items-center">
                    <div>
                        <div class="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-sharp fa-solid fa-spa text-[20px] text-blue-600"></i>
                        </div>
                        <p class="text-md text-blue-100">
                            Massage
                        </p>
                    </div>
                </div>
            </Link>

            {/* <!-- Electricals -->
            <!-- Electricals --> */}
            <Link to="">
                <div
                    class="mt-10 lg:mt-0 md:mt-0 h-40 w-[340px] lg:w-[270px] bg-gray-700 shadow-sm rounded-lg flex justify-center items-center">
                    <div>
                        <div class="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-solid fa-plug text-[20px] text-blue-600"></i>
                        </div>
                        <p class="text-md text-blue-100">
                            Electricals
                        </p>
                    </div>
                </div>
            </Link>

            {/* <!-- More -->
            <!-- More --> */}
            <Link to="">
                <div
                    class="mt-10 lg:mt-0 md:mt-0 h-40 w-[340px] lg:w-[270px] bg-gray-700 shadow-sm rounded-lg flex justify-center items-center">
                    <div>
                        <div class="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                            <i class="fa-solid fa-objects-column text-[20px] text-blue-600"></i>
                        </div>
                        <p class="text-md ml-4 text-blue-100">
                            More
                        </p>
                    </div>
                </div>
            </Link>

        </div>
    </div>

          {/* all you need are at your tips */}
    <div class="grid grid-cols-1 lg:grid-cols-2 pt-8 mt-20 gap-10">
        <div class="">
            <p class="text-white text-[26px]">
                All the services you needed are  right at you finger tips
            </p>
            <p class="mt-6 text-gray-400 text-md">
                Delivering the highest quality services is the way we forgo relationships with our customers and the
                way we  have always done business
            </p>
            <button class="h-9 bg-blue-600 w-[200px] mt-4 rounded-md text-white shadow-md">Contact Us</button>
            <div class="flex mt-8 gap-20 pb-10">
                <div class="text-center">
                    <p class="text-[25px] text-white">389</p>
                    <p class="text-gray-400 text-md">Experienced  Technician</p>
                </div>
                <div class="text-center ">
                    <p class="text-[25px] text-white">38934</p>
                    <p class="text-gray-500 text-md">Projects  Completed</p>
                </div>
            </div>
        </div>
        <div class="">
            <img src={mec} class="lg:h-[360px] h-[320px] w-screen rounded-md" alt=""/>
        </div>
    </div>

    {/* <!-- services -->
    <!-- services --> */}
    <div class="grid grid-cols-1 lg:grid-cols-3 mt-20">
        <div class="h-[150px] border border-gray-500 border-[0.1px] lg:w-[480px] pl-8 pr-8">
            <div class="h-10 w-10 rounded-full bg-gray-800 -mt-[20px] flex items-center justiy-center text-center">
                <i class="fa-regular fa-car-wrench m-auto text-white"></i>
            </div>
            <p class="text-white text-lg mt-4"> All services make</p>
            <p class="text-md text-gray-400 ">
                We give an assortment of fix and support administration for all services
            </p>
        </div>
        <div class="h-[150px] border border-gray-500 border-[0.1px] mt-8 lg:mt-0 lg:w-[480px] pl-8 pr-8 lg:ml-2">
            <div class="h-10 w-10 rounded-full bg-gray-800 -mt-[20px] flex items-center justiy-center text-center">
                <i class="fa-brands fa-servicestack text-white m-auto "></i>
            </div>
            <p class="text-white text-lg mt-4"> Variety of services</p>
            <p class="text-md text-gray-400">
                The main principle of our work is to offer a wide scope of value quality services
            </p>
        </div>
        <div class="h-[150px] border border-gray-500 border-[0.1px] lg:w-[480px] pl-8 pr-8 lg:ml-2 mt-8 lg:mt-0 ">
            <div class="h-10 w-10 rounded-full bg-gray-800 -mt-[20px] flex items-center justiy-center text-center">
                <i class="fa-duotone fa-hands-holding-circle m-auto text-white"></i>
            </div>
            <p class="text-white text-lg mt-4"> Quality Support</p>
            <p class="text-md text-gray-400">
                We offer quality support for any service that allows them to alway stay fully functional
            </p>
        </div>
    </div>

    {/* <!-- booking appointment-->
    <!-- booking appointment--> */}
    <div class="mt-20  flex items-center justify-center bg-[url(../images/massage.avif)]  rounded-sm bg-cover bg-no-repeat bg-h-[500px] lg:h-[600px] w-[80vw] m-auto p-10">
        <div class=" ">
            <div class=" lg:w-[320px] bg-gray-800 lg:ml-40 p-8 rounded-lg">
                <div class="flex">
                    <div class="h-10 w-[1px] bg-blue-600">

                    </div>
                    <Link>
                        <p class="text-md text-white ml-4 mt-2"> Book Appointment</p>
                    </Link>
                </div>
                <hr class="border-gray-500 mt-2"/>
                <div class="flex mt-4">
                    <div class="h-10 w-[1px] bg-blue-600">

                    </div>
                    <Link>
                        <p class="text-md text-white ml-4 mt-2">Our Services</p>
                    </Link>
                </div>
                <hr class="border-gray-500 mt-2"/>
                <div class="flex mt-4">
                    <div class="h-10 w-[1px] bg-blue-600">

                    </div>
                    <Link>
                        <p class="text-md text-white ml-4 mt-2">Our services</p>
                    </Link>
                </div>
                <hr class="border-gray-500 mt-2"/>
                <div class="flex mt-4">
                    <div class="h-10 w-[1px] bg-blue-600">

                    </div>
                    <Link>
                        <p class="text-md text-white ml-4 mt-2">Request a service</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>


    {/* <!-- why choose us -->
    <!-- why choose us --> */}
    <p class="text-white text-2xl mt-20">Why <br/>choose us</p>
    <div class="grid grid-ols-1 lg:grid-cols-3 mt-8">
        <div class="h-[150px] border border-gray-500 border-[0.1px] lg:w-[480px] p-6 text-center">
            <div
                class="h-10 w-10 rounded-full border border-gray-600  flex items-center justiy-center text-center m-auto">
                <i class="fa-regular fa-car-wrench m-auto text-white"></i>
            </div>
            <p class="text-white text-md mt-1"> Knowledge and <br/> Experience</p>

        </div>
        <div class="h-[150px] border border-gray-500 mt-4 lg:mt-0 border-[0.1px] lg:w-[480px] p-6 text-center">
            <div
                class="h-10 w-10 rounded-full border border-gray-600  flex items-center justiy-center text-center m-auto">
                <i class="fa-regular fa-car-wrench m-auto text-white"></i>
            </div>
            <p class="text-white text-md mt-1"> commitment and <br/> Satisfaction</p>

        </div>
        <div class="h-[150px] mt-4 lg:mt-0 border border-gray-500 border-[0.1px] lg:w-[480px] p-6 text-center">
            <div
                class="h-10 w-10 rounded-full border border-gray-600  flex items-center justiy-center text-center m-auto">
                <i class="fa-regular fa-car-wrench m-auto text-white"></i>
            </div>
            <p class="text-white text-md mt-1"> Quality Service and <br/> Quarantteed</p>
        </div>
    </div>


    {/* <!-- top rated -->
    <!-- top rated --> */}
    <div class="mt-20">
        <p class="text-[24px] text-blue-100">
            Top Rated
        </p>

        <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-20 mt-10">
            {/* <!-- house chores--> */}
            <div class="">
                <Link>
                  <img class="h-[250px] rounded-md" src={clean1} alt=""/>
                </Link>
                <p class="text-blue-50 text-center mt-2">
                    SmartHands Cleaning
                </p>
                <p class="mt-2 text-center">
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                </p>
                <p class="text-blue-50 text-center mt-2">
                    GHC 100
                </p>
            </div>

            {/* <!-- house chores--> */}
            <div class="mt-8 lg:mt-0 md:mt-0">
                <Link>
                    <img class="h-[250px] rounded-md" src={massage}  alt=""/>
                </Link>
                <p class="text-blue-50 text-center mt-2">
                    Massage Team
                </p>
                <p class="mt-2 text-center">
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                </p>
                <p class="text-blue-50 text-center mt-2">
                    GHC 100
                </p>
            </div>

            {/* <!-- house chores--> */}
            <div class="mt-8 lg:mt-0 md:mt-0">
                <Link><img class="h-[250px] rounded-md" src={construction} alt=""/></Link>
                <p class="text-blue-50 text-center mt-2">
                    Construction Team
                </p>
                <p class="mt-2 text-center">
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                </p>
                <p class="text-center text-blue-50 mt-2">
                    GHC 100
                </p>
            </div>

            {/* <!-- house chores--> */}
            <div class="mt-8 lg:mt-0 md:mt-0">
                <Link><img class="h-[250px] rounded-md" src={teaching} alt=""/></Link>
                <p class="text-blue-50 text-center mt-2">
                    Learning Assistance
                </p>
                <p class="mt-2 text-center">
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                    <i class="fa fa-star text-yellow-500"></i>
                </p>
                <p class="text-blue-50 text-center mt-2">
                    GHC 100
                </p>
            </div>

        </div>
    </div>

    {/* navigation bar */}
    <Footer/>

    </div>
  )
}
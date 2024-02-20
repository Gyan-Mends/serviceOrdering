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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPersonChalkboard, faTrowelBricks, faScrewdriverWrench, faSpa, faPlug, faObjectGroup, faHandsHoldingCircle, faBrain, faFaceSmile, faStar } from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

    return (
        <div className="bg-[#f4f7fa]  p-2 overflow-x-hidden">
            {/* navigation bar*/}
            <Nav />

            {/* becoming a service seller */}
            <div class="grid grid-cols-1 mt-4 mb-16 ">
                <div class="lg:h-[430px] md:h-60 shadow-sm  bg-white shadow-lg  rounded-sm">
                    <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                    <div className="lg:grid  lg:grid-cols-2 md:grid  p-10  md:grid-cols-2 md:gap-20 ">
                        {/* service seller image */}
                        <div class="">
                            <img className="rounded-md" src={clean1} alt="" />
                        </div>
                        <div class="lg:-mt-20 mt-10 text-center flex items-center justify-center flex-col">
                            <p class="lg:!text-2xl sm:!text-[16px]  lg:animate-bounce md:text-lg">Become a service
                                seller!</p>
                            <p class="text-md mt-4 md:mt-1 ">Get more money using your skills</p>
                            <Link to="">
                                <button class="bg-[#007EE5] h-10 text-white w-[180px] mt-6 rounded-md">Register Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- services categories --> */}
            {/* <!-- services categories --> */}
            <div class="lg:pl-40 lg:pr-40 pt-8 pb-12 mt-20">
                <p class=" text-2xl ">Services Categories</p>
                <div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-20 mt-4 ">
                    {/* <!-- house chores-->
            <!-- house chores--> */}
                    <Link to="">
                        <div className="h-40  lg:w-[380px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faHome} />
                                    </div>
                                    <p class="text-md  -ml-4">
                                        House Chores
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <!-- Construction -->
            <!-- Construction --> */}
                    <Link to="">
                        <div className="h-40  mt-4 lg:mt-0 md:mt-0 lg:w-[380px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faTrowelBricks} />
                                    </div>
                                    <p class="text-md  -ml-4">
                                        Construction
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <!-- Teaching -->
            <!-- Teaching --> */}
                    <Link to="">
                        <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[380px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faPersonChalkboard} />
                                    </div>
                                    <p class="text-md  ">
                                        Teaching
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>


                <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2  gap-20 mt-10">
                    {/* <!-- Mechanics -->
            <!-- Mechanics --> */}
                    <Link to="">
                        <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faScrewdriverWrench} />
                                    </div>
                                    <p class="text-md ">
                                        Mechanics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* 
            <!-- Massage -->
            <!-- Massage --> */}
                    <Link to="">
                        <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faSpa} />
                                    </div>
                                    <p class="text-md  ">
                                        Massage
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <!-- Electricals -->
            <!-- Electricals --> */}
                    <Link to="">
                    <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faPlug} />
                                    </div>
                                    <p class="text-md  ">
                                        Electricals
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <!-- More -->
            <!-- More --> */}
                    <Link to="">
                    <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-white shadow-md rounded-lg ">
                            <div className="bg-[#007EE5] h-2 rounded-tr-md rounded-tl-md w-100vw"></div>
                            <div className="flex items-center justify-center h-40">
                                <div>
                                    <div class="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                                        <FontAwesomeIcon className="text-blue-600" icon={faObjectGroup} />
                                    </div>
                                    <p class="text-md  ">
                                        More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

            {/* all you need are at your tips */}
            <div class="grid grid-cols-1 lg:grid-cols-2 p-8 mt-20 gap-10 bg-white shadow-lg rounded-md">
                <div class="pl-4">
                    <p class=" text-[26px]">
                        All the services you needed are  right at you finger tips
                    </p>
                    <p class="mt-6 text-gray-400 text-md">
                        Delivering the highest quality services is the way we forgo relationships with our customers and the
                        way we  have always done business
                    </p>
                    <button class="h-9 bg-[#007EE5] w-[200px] mt-4 rounded-md text-white shadow-md">Contact Us</button>
                    <div class="flex mt-8 gap-20 pb-10">
                        <div class="text-center">
                            <p class="text-[25px]">389</p>
                            <p class="text-gray-400 text-md">Experienced  Technician</p>
                        </div>
                        <div class="text-center ">
                            <p class="text-[25px] ">38934</p>
                            <p class="text-gray-500 text-md">Projects  Completed</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <img src={mec} class="lg:h-[400px] h-[320px] w-screen rounded-md" alt="" />
                </div>
            </div>

            {/* <!-- services -->
            <!-- services --> */}
            <div class="grid grid-cols-1 lg:grid-cols-3 mt-20">
                <div class="h-[150px] bg-white rounded-md shadow-md lg:w-[480px] pl-8 pr-8">
                    <div class="h-10 w-10 rounded-full bg-[#007EE5] -mt-[20px] flex items-center justify-center text-center">
                        <FontAwesomeIcon className="text-white " icon={faScrewdriverWrench} />
                    </div>
                    <p class=" text-lg mt-4"> All services make </p>
                    <p class="text-md text-gray-400 ">
                        We give an assortment of fix and support administration for all services
                    </p>
                </div>
                <div class="h-[150px] bg-white rounded-md shadow-md mt-8 lg:mt-0 lg:w-[480px] pl-8 pr-8 lg:ml-2">
                    <div class="h-10 w-10 rounded-full bg-[#007EE5] -mt-[20px] flex items-center justify-center text-center">
                        <FontAwesomeIcon className="text-white" icon={faServicestack} />
                    </div>
                    <p class=" text-lg mt-4"> Variety of services</p>
                    <p class="text-md text-gray-400">
                        The main principle of our work is to offer a wide scope of value quality services
                    </p>
                </div>
                <div class="h-[150px] bg-white rounded-md shadow-md lg:w-[480px] pl-8 pr-8 lg:ml-2 mt-8 lg:mt-0 ">
                    <div class="h-10 w-10 rounded-full bg-[#007EE5] -mt-[20px] flex items-center justify-center text-center">
                        <FontAwesomeIcon className="text-white" icon={faHandsHoldingCircle} />
                    </div>
                    <p class=" text-lg mt-4"> Quality Support</p>
                    <p class="text-md text-gray-400">
                        We offer quality support for any service that allows them to alway stay fully functional
                    </p>
                </div>
            </div>

            {/* <!-- booking appointment-->
    <!-- booking appointment--> */}
            <div class="mt-20  flex items-center justify-center bg-[url(../images/massage.avif)]  rounded-md bg-cover bg-no-repeat bg-h-[500px] lg:h-[600px] w-[80vw] m-auto p-10">
                <div class=" ">
                    <div class=" lg:w-[320px] bg-white shadow-md lg:ml-40 p-8 rounded-lg">
                        <div class="flex">
                            <div class="h-10 w-[1px] bg-blue-600">

                            </div>
                            <Link>
                                <p class="text-md  ml-4 mt-2"> Book Appointment</p>
                            </Link>
                        </div>
                        <hr class="border-[#007EE5] mt-2" />

                        <div class="flex mt-4">
                            <div class="h-10 w-[1px] bg-[#007EE5]">

                            </div>
                            <Link>
                                <p class="text-md ml-4 mt-2">Request a service</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- why choose us -->
    <!-- why choose us --> */}
            <p class=" text-2xl mt-20">Why <br />choose us</p>
            <div class="grid grid-ols-1 lg:grid-cols-3 mt-8">
                <div class="h-[150px] bg-white shadow-md rounded-md lg:w-[480px] p-6 text-center">
                    <div
                        class="h-10 w-10 rounded-full  bg-[#007EE5]  flex items-center justify-center text-center m-auto">
                        <FontAwesomeIcon className="text-white" icon={faBrain} />
                    </div>
                    <p class=" text-md mt-1"> Knowledge and <br /> Experience</p>

                </div>
                <div class="h-[150px] bg-white shadow-md rounded-md mt-4 lg:mt-0  lg:w-[480px] p-6 text-center">
                    <div
                        class="h-10 w-10 rounded-full  bg-[#007EE5]  flex items-center justify-center text-center m-auto">
                        <FontAwesomeIcon className="text-white" icon={faFaceSmile} />
                    </div>
                    <p class=" text-md mt-1"> Commitment and <br /> Satisfaction</p>

                </div>
                <div class="h-[150px] mt-4 lg:mt-0  bg-white shadow-md rounded-md lg:w-[480px] p-6 text-center">
                    <div
                        class="h-10 w-10 rounded-full bg-[#007EE5]  flex items-center justify-center text-center m-auto">
                        <FontAwesomeIcon className="text-white" icon={faStar} />
                    </div>
                    <p class=" text-md mt-1"> Quality Service and <br /> Quarantteed</p>
                </div>
            </div>


            {/* <!-- top rated -->
    <!-- top rated --> */}
            <div class="mt-20">
                <p class="text-[24px] ">
                    Top Rated
                </p>

                <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-20 mt-10">
                    {/* <!-- house chores--> */}
                    <div class="">
                        <Link>
                            <img class="h-[250px] rounded-md" src={clean1} alt="" />
                        </Link>
                        <p class=" text-center mt-2">
                            SmartHands Cleaning
                        </p>
                        <p class="mt-2 text-center">
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                        </p>
                        <p class=" text-center mt-2">
                            GHC 100
                        </p>
                    </div>

                    {/* <!-- house chores--> */}
                    <div class="mt-8 lg:mt-0 md:mt-0">
                        <Link>
                            <img class="h-[250px] rounded-md" src={massage} alt="" />
                        </Link>
                        <p class=" text-center mt-2">
                            Massage Team
                        </p>
                        <p class="mt-2 text-center">
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                        </p>
                        <p class=" text-center mt-2">
                            GHC 100
                        </p>
                    </div>

                    {/* <!-- house chores--> */}
                    <div class="mt-8 lg:mt-0 md:mt-0">
                        <Link><img class="h-[250px] rounded-md" src={construction} alt="" /></Link>
                        <p class=" text-center mt-2">
                            Construction Team
                        </p>
                        <p class="mt-2 text-center">
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                        </p>
                        <p class="text-center  mt-2">
                            GHC 100
                        </p>
                    </div>

                    {/* <!-- house chores--> */}
                    <div class="mt-8 lg:mt-0 md:mt-0">
                        <Link><img class="h-[250px] rounded-md" src={teaching} alt="" /></Link>
                        <p class=" text-center mt-2">
                            Learning Assistance
                        </p>
                        <p class="mt-2 text-center">
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                            <i class="fa fa-star text-yellow-500"></i>
                        </p>
                        <p class=" text-center mt-2">
                            GHC 100
                        </p>
                    </div>

                </div>
            </div>

            {/* navigation bar */}
            <Footer />

        </div>
    )
}
import React, { useState } from "react";
import Nav from "../components/nav";
import AntdInput from "../components/antd/antdinput";
import P from "../components/p";
import { Form } from 'antd'
import AntdButton from "../components/antd/antdbutton";
import axios from "axios";

export default function Registeration() {
    //taken input from the input field
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [phone, setPhone] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [businessEmail, setBusinessEmail] = useState("")
    const [businessLocation, setBusinessLocation] = useState("")
    const [landMark, setLandMark] = useState("")
    const [businessNumber, setBusinessNumber] = useState("")
    const [businessLogo, setBusinessLogo] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userName, setUserName] = useState("")

    // handling user name
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    // hanling email
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    // hanling middle name
    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value)
    }
    // hanling phone
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    // hanling last name
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    // hanling phone
    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }
    // hanling business name
    const handleBusinessNameChange = (e) => {
        setBusinessName(e.target.value)
    }
    // hanling business email
    const handleBusinessEmailChange = (e) => {
        setBusinessEmail(e.target.value)
    }
    // hanling business location
    const handleBusinessLocationChange = (e) => {
        setBusinessLocation(e.target.value)
    }
    // hanling business email
    const handleLandMarkChange = (e) => {
        setLandMark(e.target.value)
    }
    // hanling business number
    const handleBusinessNumberChange = (e) => {
        setBusinessNumber(e.target.value)
    }
    // hanling business email
    const handleBusinessLogoChange = (e) => {
        setBusinessLogo(e.target.value)
    }
    // hanling business email
    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }
    // hanling business email
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        //prevnting the default behaviour of the form
        e.preventDefault();
        axios.post("http://localhost/serviceOrdering/src/backend/serviceseller/registeration.php", {
            firstName: firstName,
            email: email,
            middleName: middleName,
            phone: phone,
            lastName: lastName,
            gender: gender,
            businessName: businessName,
            businessEmail: businessEmail,
            businessLocation: businessLocation,
            landMark: landMark,
            businessNumber: businessNumber,
            businessLogo: businessLogo,
            password: password,
            confirmPassword: confirmPassword,
            userName: userName,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if(password === confirmPassword){
                if(response === "Exist"){
                    alert("Email already exist")
                }else{
                    if(response === "sucess"){
                        alert("Registeration Successfull")
                    }else{
                        alert("Unable to register user")
                    }
                }
            }else{
                alert("password does not match")
            }
        })
    }



    return (
        <div className="bg-gray-800 h-[100vh] overflow-x-hidden h-[100vh]">
            {/* Navigation bar */}
            <Nav />
            <div className="page-content p-10">
                <P className="text-white text-lg text-center"
                    text="Are You a New Service Seller? Register With As"
                />
                <P className="text-white mt-10"
                    text="Personnal Details"
                /><hr className="border border-gray-400 " />

                {/* form inputs */}
                <div className="mt-4  ">
                    {/* form inputs for personal details */}
                    {/* form inputs for personal details */}
                    <Form className="lg:grid lg:grid-cols-3 gap-20 text-white" layout="vertical">
                        <div>
                            {/* first name input */}
                            <Form.Item className=" ">
                                <label className="text-white">First Name</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                />
                            </Form.Item>
                            {/* email input  */}
                            <Form.Item className="text-white">
                                <label className="text-white">Email</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Form.Item>
                        </div>

                        <div>
                            {/* middle name input */}
                            <Form.Item className="text-white">
                                <label className="text-white">Middle Name</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={middleName}
                                    onChange={handleMiddleNameChange}
                                />
                            </Form.Item>
                            {/* phone input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Phone</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </Form.Item>

                        </div>

                        <div>
                            {/* lastname input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Last Name</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                />
                            </Form.Item>
                            <Form.Item className="text-white" >
                                <label className="text-white">Gender</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={gender}
                                    onChange={handleGenderChange}
                                />
                            </Form.Item>
                        </div>
                    </Form>
                </div>

                {/* form inputs for bussiness dtails */}
                {/* form inputs for bussiness dtails */}
                <P className="text-white mt-10"
                    text="Bussiness Details"
                /><hr className="border border-gray-400 " />
                <div className="mt-4  ">
                    <Form className="lg:grid lg:grid-cols-3 gap-20 text-white" layout="vertical">
                        <div>
                            {/* bussiness name input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Bussiness Name</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={businessName}
                                    onChange={handleBusinessNameChange}
                                />
                            </Form.Item>
                            {/* bussiness email input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Bussiness Email</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={businessEmail}
                                    onChange={handleBusinessEmailChange}
                                />
                            </Form.Item>
                        </div>

                        <div>
                            {/* bussiness location input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Bussiness Location</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={businessLocation}
                                    onChange={handleBusinessLocationChange}
                                />
                            </Form.Item>
                            {/* bussiness land mark input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Land Mark</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={landMark}
                                    onChange={handleLandMarkChange}
                                />
                            </Form.Item>

                        </div>

                        <div>
                            {/* bussiness number input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Bussiness Number</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={businessNumber}
                                    onChange={handleBusinessNumberChange}
                                />
                            </Form.Item>
                            {/* bussiness number input */}
                            <Form.Item className="text-white" >
                                <label className="text-white">Bussiness Logo</label>
                                <AntdInput
                                    type="file"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={businessLogo}
                                    onChange={handleBusinessLogoChange}
                                />
                            </Form.Item>
                        </div>
                    </Form>
                </div>


                {/* form inputs for security */}
                <P className="text-white mt-10"
                    text="Security Details"
                /><hr className="border border-gray-400 " />
                <div className="mt-4  ">
                    <Form className="lg:grid lg:grid-cols-3 gap-6 text-white" layout="vertical">
                        <div>
                            <Form.Item className="text-white" >
                                <label className="text-white">User Name</label>
                                <AntdInput
                                    type="text"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={userName}
                                    onChange={handleUserNameChange}
                                />
                            </Form.Item>

                        </div>

                        <div>
                            <Form.Item className="text-white" >
                                <label className="text-white">Password</label>
                                <AntdInput
                                    type="Password"
                                    className=" bg-gray-800 border hover:bg-gray-800 text-white text-sm"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </Form.Item>


                        </div>

                        <div>
                            <Form.Item className="text-white">
                                <label className="text-white">Confirm Password</label>
                                <AntdInput
                                    type="text"
                                    className="bg-gray-800 border border-gray-300 hover:bg-gray-800 text-white text-sm"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </Form.Item>

                        </div>
                    </Form>
                </div>

                {/* submit button */}
                {/* submit button */}
                <div className="flex items-center justify-center">
                    <AntdButton
                        type="primary"
                        name="Register Now"
                        className="mt-20 w-80 bg-blue-500 text-center text-md"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}
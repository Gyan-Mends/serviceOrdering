import React, { useState } from "react";

//importing components
import ServiceSellerNav from "../../components/serviceSellerNav";
import AddTopNav from "../../components/serviceseller/dashboard/addTopNav";
import AntdInput from "../../components/antd/antdinput";
import AntdTextArea from "../../components/antd/antdTextarea";
import AntdButton from "../../components/antd/antdbutton";
import { Form } from 'antd';
import axios from "axios";




export default function ServiceAdd() {
    const [serviceName, setServiceName] = useState(null)
    const [category, setCategory] = useState(null)
    const [nameDescription, setNameDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)

    // handling service name
    const handleServiceNameChange = (event) => {
        setServiceName(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleNameDescriptionChange = (event) => {
        setNameDescription(event.target.value)
    }

    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        //preventing the default behaviour of the form
        event.preventDefault();

        axios.post("http://localhost/serviceOrdering/src/backend/serviceAdd.php", {
            serviceName:serviceName,
            category:category,
            nameDescription:nameDescription,
            image:image,
            price:price,
            description:description
        }, {
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=>{
            if(response.data === "Inserted"){
                alert("Service inserted successful")
            }else{
                alert("unable to add service")
            }
        })
    }


    return (
        <div className=" bg-blue-50 ">
            <ServiceSellerNav />

            <div className="lg:ml-60 p-10">
                {/* top navigation bar */}
                <AddTopNav
                    name="Add New Service"
                    to="/serviceseller/services"
                />

                {/* form input fields */}
                <Form encType="multipart/form-data" layout="vertical" className="mt-20">
                    {/* service name */}
                    <Form.Item label="Service Name">
                        <AntdInput
                            type="text"
                            className="shadow-md"
                            value={serviceName}
                            onChange={handleServiceNameChange}
                        />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-6">
                        {/* servicec category */}
                        <Form.Item label="Service Cat">
                            <AntdInput
                                type="text"
                                className=""
                                value={category}
                                onChange={handleCategoryChange}
                            />
                        </Form.Item>
                        {/* Service name description */}
                        <Form.Item label="Name Description">
                            <AntdInput
                                type="text"
                                className=""
                                value={nameDescription}
                                onChange={handleNameDescriptionChange}
                            />
                        </Form.Item>
                       
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {/* services image upload */}
                        {/* Service name description */}
                        <Form.Item label="Name Description">
                            <AntdInput
                                type="file"
                                className=""
                                value={image}
                                onChange={handleImageChange}
                            />
                        </Form.Item>
                       
                        {/* service Price */}
                        <Form.Item label="Price">
                            <AntdInput
                                type="text"
                                className=""
                                value={price}
                                onChange={handlePriceChange}

                            />
                        </Form.Item>
                    </div>
                    {/* services description */}
                    <Form.Item label="Service Description">
                        <AntdTextArea
                            type="text"
                            rows={10}
                            className=" "
                            value={description}
                            onChange={handleDescriptionChange}

                        />
                    </Form.Item>


                    <Form.Item label="">
                        <AntdButton
                            type="primary"
                            name="Add Service"
                            className="bg-blue-400 w-40 "
                            onClick={handleSubmit}

                        />
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}
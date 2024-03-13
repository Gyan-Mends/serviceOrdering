import React from "react";

//importing components
import ServiceSellerNav from "../../components/serviceSellerNav";
import AddTopNav from "../../components/serviceseller/dashboard/addTopNav";
import AntdInput from "../../components/antd/antdinput";
import AntdTextArea from "../../components/antd/antdTextarea";
import { Form  } from 'antd';




export default function ServiceAdd() {
    return (
        <div className=" bg-blue-50 h-[100vh]">
            <ServiceSellerNav />

            <div className="lg:ml-60 p-10">
                {/* top navigation bar */}
                <AddTopNav
                    name="Services Overview"
                    to="/serviceseller/services"
                />

                {/* form input fields */}
                <Form layout="vertical" className="mt-20">
                    {/* service name */}
                    <Form.Item label="Service Name">
                        <AntdInput
                            type="text"
                            className=""
                        />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-6">
                    <Form.Item label="Service Cat">
                        <AntdInput
                            type="text"
                            className=""
                        />
                    </Form.Item>
                    <Form.Item label="Name Description">
                        <AntdInput
                            type="text"
                            className=""
                        />
                    </Form.Item>
                    </div>

                    
                    <div className="grid grid-cols-2 gap-6">
                    <Form.Item label="Image">
                        <AntdInput
                            type="file"
                            className=""
                        />
                    </Form.Item>
                    <Form.Item label="Price">
                        <AntdInput
                            type="text"
                            className=""
                            
                        />
                    </Form.Item>
                    </div>

                    <Form.Item label="Service Description">
                        <AntdTextArea
                            type="text"
                            rows={10}
                            className=" "
                            
                        />
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}
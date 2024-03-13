import React from "react";

//importing components
import ServiceSellerNav from "../../components/serviceSellerNav";
import AddTopNav from "../../components/serviceseller/dashboard/addTopNav";



export default function ServiceAdd() {
    return (
        <div className=" bg-blue-50 h-[100vh]">
            <ServiceSellerNav />

            <div className="lg:ml-60 p-10">
                {/* top navigation bar */}
                <AddTopNav
                 name="Services Overview"
                 to="../../../serviceSeller/serviceAdd"
                />

                {/* form input fields */}
            </div>
        </div>
    )
}
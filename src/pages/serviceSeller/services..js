import React from "react";

//importing components
import ServiceSellerNav from "../../components/serviceSellerNav";
import TopNav from "../../components/serviceseller/dashboard/topNav";




export default function Service() {
    return (
        <div className=" bg-blue-50 h-[100vh]">
            <ServiceSellerNav />

            <div className="lg:ml-60 p-10">
                <TopNav
                 name="Services Overview"
                 to="../../../serviceSeller/serviceAdd"
                />
            </div>
        </div>
    )
}
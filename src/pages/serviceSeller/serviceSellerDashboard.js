import React from "react";
import { Link } from "react-router-dom";

export default function ServiceSellerDashboard() {
  return (
    <div className="flex bg-[#F4F7FA] h-[100vh]">
      {/* Side navigation bar*/}
      <div className="w-40 bg-[#007EE5] flex  justify-center">
        <div className="mt-10">
          <Link  to=""><li className="text-white list-none">Dashboard</li></Link>
          <Link  to=""><li className="text-white list-none mt-2">Service</li></Link>
          <Link  to=""><li className="text-white list-none mt-2">Orders</li></Link>
          <Link  to=""><li className="text-white list-none mt-2">Payments</li></Link>
          <Link  to=""><li className="text-white list-none mt-2">Estimations</li></Link>
          <Link  to=""><li className="text-white list-none mt-2">Profile</li></Link>
        </div>
      </div>

      {/* page contents */}
      <div className="ml-4 p-10 ">
        <div className="h-10 bg-[#007EE5] w-[85vw] rounded-md">things</div>
      </div>
    </div>
  )
}
// importation of components
// importation of components
import TotalSales from "../../components/serviceseller/dashboard/totalSales";
import Graph from "../../components/serviceseller/dashboard/graph";
import React from "react";
import clean from "../../images/clean.avif"
import ServiceSellerNav from "../../components/serviceSellerNav";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import Profile from "../../components/serviceseller/dashboard/profile";

export default function ServiceSellerDashboard() {
  return (
    <div className=" bg-blue-50 ">
      {/* navigation bar */}
      <ServiceSellerNav />

      {/* page contents */}
      <div className="lg:ml-60 p-10">
        <div className="lg:grid lg:grid-cols-4 gap-10">
          {/* sales overview */}
          <div className="lg:col-span-3">
            <p className="">Sales Overview</p>

            <div className="lg:grid lg:grid-cols-3 gap-4 mt-4">
              {/* Total sales div */}
              {/* Total sales div */}
              <TotalSales
                icon={faHandHoldingDollar}
                name="Total Sale"
                number="$50678"
              />
              {/* total orders */}
              {/* total orders */}
              <TotalSales
                icon={faHandHoldingDollar}
                name="Total Order"
                number="567"
              />
              {/* total estimate */}
              {/* total estimate */}
              <TotalSales
                icon={faHandHoldingDollar}
                name="Estimate"
                number="2657"
              />
            </div>

            <Graph
              height="h-60"
            />

            {/* all services overview */}
            <Graph
              height="h-80  "
            />
          </div>

          {/* other details */}
          <div>
            {/* profile */}
            <div className="flex  mr-auto gap-2">
                <Profile
                name="Sevice Seller"
                image={clean}
                className="h-6 w-6 rounded-full"
                />
            </div>

            <div className="bg-white shadow-md rounded-md h-[100vh] mt-4">

            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
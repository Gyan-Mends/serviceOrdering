import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TotalSales({icon,name,number}) {
    return (
        <div className="bg-white h-[140px] p-4 rounded-md shadow-md">
            <div className="grid grid-cols-3 gap-4">
                <div className="h-12 w-12 text-[#007ee5] rounded-full flex items-center justify-center bg-blue-50"><FontAwesomeIcon icon={icon} /></div>
                <div className="col-span-2">
                    <p className="text-sm text-gray-500">{name}</p>
                    <p className="">{number}</p>
                </div>
            </div>
            <div className="progress"></div>
        </div>
    )
}
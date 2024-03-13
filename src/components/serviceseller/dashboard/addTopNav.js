import React from "react";
import AntdButton from "../../antd/antdbutton";
import Profile from "./profile";
import clean from "../../../images/clean.avif"
import { Link } from "react-router-dom";

export default function AddTopNav({name,to}) {
    return (
        <div className="lg:grid lg:grid-cols-3 ">
            {/* overview */}
            <div className="flex col-span-2 items-center gap-4">
                <p>{name}</p>

            </div>
           
            <div className="flex gap-8">
                {/* profile */}
                <div className="flex items-center mr-auto gap-2">
                    <Profile
                        name="Service Seller"
                        image={clean}
                        className="h-6 w-6 rounded-full"
                    />
                </div>
                <div>
                    <Link to={to}>
                        <AntdButton
                            type="default"
                            name="Add"
                            className="text-sm bg-[#007ee5]  text-white rounded-md"

                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
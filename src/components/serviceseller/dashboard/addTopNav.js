import React from "react";
import Button from "../selleradd/button";
import Profile from "./profile";
import clean from "../../../images/clean.avif"
import { Link } from "react-router-dom";

export default function AddTopNav({name,to}) {
    return (
        <div className="lg:grid lg:grid-cols-3 ">
            <div className="flex gap-4">
                <p>{name}</p>

            </div>
            <div>
               
            </div>
            <div className="flex gap-8">
                <div className="flex  mr-auto gap-2">
                    <Profile
                        name="Service Seller"
                        image={clean}
                        className="h-6 w-6 rounded-full"
                    />
                </div>
                <div>
                    <Link to={to}>
                        <Button
                            type="submit"
                            value="Add"
                            className="text-sm bg-[#007ee5] w-12 text-white rounded-sm"

                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
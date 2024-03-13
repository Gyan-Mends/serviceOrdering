import React from "react";
import Search from "../selleradd/search";
import Button from "../selleradd/button";
import Profile from "./profile";
import clean from "../../../images/clean.avif"
import { Link } from "react-router-dom";

export default function TopNav({name,to}) {
    return (
        <div className="lg:grid lg:grid-cols-3 ">
            <div className="flex gap-4">
                <p>{name}</p>

            </div>
            <div>
                <Search
                    type="search"
                    placeholder="Search service..."
                    className="rounded-md placeholder:text-sm text-sm outline-none h-6  w-48 pl-2 shadow-md"
                />
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
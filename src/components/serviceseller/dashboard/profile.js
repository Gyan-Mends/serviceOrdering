import React from "react";


export default function Profile({name,image,className}){
    return (
        <>
            <div>
                <p className="text-sm">{name}</p>
            </div>
            <div>
                <img className={className} src={image} alt="dp" />
                </div>
            </>
    )
}
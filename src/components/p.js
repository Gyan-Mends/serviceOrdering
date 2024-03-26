import React from "react";

export default function P({className, text}){
    return(
        <div>
            <p className={className}>
                {text}
            </p>
        </div>
    )
}
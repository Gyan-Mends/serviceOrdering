import React from "react";

export default function Button({ value, type, className,click }) {
    return (
        <>
            <input
                onClick={click}
                type={type}
                value={value}
                className={className}
            />
        </>
    )
}
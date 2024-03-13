import React from "react";

export default function Search({ type, placeholder, className }) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </div>
    )
}

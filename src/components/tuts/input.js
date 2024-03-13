import React from "react";

export default function Inputs({ type, placeholder, value, onChange, className }) {
    return (
        <input
            type={type}
            className={className} // className instead of classname for consistency
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete="off" // Turn off browser autocomplete for better security, especially for password fields
            // You might also consider adding other attributes like required, minLength, maxLength, etc., based on your requirements
        />
    );
}

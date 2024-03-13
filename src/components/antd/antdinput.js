import React from "react";
import { Input } from "antd";

export default function AntdInput({type,className,placeholder,value,onChange}){
    return(
        <>
        <Input 
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        </>
    )
}
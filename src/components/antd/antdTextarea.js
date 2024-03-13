import React from "react";
import { Input } from 'antd';

var { TextArea } = Input;

export default function AntdTextArea({rows,type,className,placeholder,value,onChange}){
    return(
        <>
            <TextArea 
            rows={rows} 
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </>
    )
}
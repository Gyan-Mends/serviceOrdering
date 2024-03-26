import React from "react";
import { Button } from "antd";

export default function AntdButton({ type, name, className,onClick}) {
    return (
        <>
                <Button onClick={onClick} type={type} className={className}>
                    {name}
                </Button>
        </>
    )
}
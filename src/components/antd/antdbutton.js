import React from "react";
import { Button } from "antd";

export default function AntdButton({ type, name, className}) {
    return (
        <>
                <Button type={type} className={className}>
                    {name}
                </Button>
        </>
    )
}
"use client";

import { Checkbox, CheckboxProps, Label } from "flowbite-react";

interface UetCheckBoxProps extends CheckboxProps {}

export default function UetCheckbox({
    title,
    id,
    className,
}: UetCheckBoxProps) {
    return (
        <div className={"flex items-center gap-2 " + className}>
            <Checkbox id={id} name={id}/>
            <Label htmlFor={id}>{title}</Label>
        </div>
    );
}

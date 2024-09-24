import { Label, TextInput, TextInputProps } from "flowbite-react";

interface UetTextInputProps extends TextInputProps {}

export default function UetTextInput({
    id,
    title,
    className,
    ...props
}: UetTextInputProps) {
    return (
        <div className={className}>
            <div className={"mb-2 block"}>
                <Label htmlFor={id} value={title} />
            </div>
            <TextInput id={id} {...props} />
        </div>
    );
}

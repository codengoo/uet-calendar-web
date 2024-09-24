import { Datepicker, DatepickerProps, Label } from "flowbite-react";

interface UetDatePickerProps extends DatepickerProps {}

export default function UetDatePicker({
    title,
    id,
    className,
}: UetDatePickerProps) {
    return (
        <div className={" " + className}>
            <div className="mb-2 block">
                <Label htmlFor={id}>{title}</Label>
            </div>
            <Datepicker />
        </div>
    );
}

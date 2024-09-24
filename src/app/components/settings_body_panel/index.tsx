import { UetCheckbox, UetDatePicker, UetTextInput } from "@ui";

export default function SettingsBodyPanel() {
    return (
        <div className="w-full space-y-2 p-5">
            <div className="grid grid-cols-6 gap-2">
                <UetTextInput title="Calendar name" className="col-span-3" />
                <UetTextInput
                    title="Repeat count"
                    type="number"
                    className="col-span-1"
                />
                <UetDatePicker
                    title="Start date"
                    type="date"
                    className="col-span-2"
                />
            </div>
            <UetCheckbox title="Create new calendar" />
        </div>
    );
}

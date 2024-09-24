import { ChangeEvent } from "react";
import { TbCalendarRepeat, TbWriting } from "react-icons/tb";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    selectCalendarSettings,
    setCalendarName,
    setIsCreateNewCalendar,
    setNumRepeatsEvent,
} from "@/libs/redux";

import { UetCheckbox, UetDatePicker, UetTextInput } from "@ui";

export default function SettingsTab() {
    const { calendarName, isCreateNew, numRepeats } = useAppSelector(
        selectCalendarSettings,
    );

    const dispatch = useAppDispatch();

    function handleIsCreateNewChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setIsCreateNewCalendar(event.target.checked));
    }

    function handleCalendarNameChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setCalendarName(event.target.value));
    }

    function handleNumRepeatsChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setNumRepeatsEvent(parseInt(event.target.value)));
    }

    return (
        <div className="w-full space-y-2 p-5">
            <div className="grid grid-cols-6 gap-2">
                <UetTextInput
                    title="Calendar name"
                    className="col-span-3"
                    disabled={!isCreateNew}
                    value={calendarName}
                    onChange={handleCalendarNameChange}
                    icon={TbWriting}
                />
                <UetTextInput
                    title="Repeat count"
                    type="number"
                    className="col-span-1"
                    value={numRepeats}
                    onChange={handleNumRepeatsChange}
                    icon={TbCalendarRepeat}
                />
                <UetDatePicker
                    title="Start date"
                    type="date"
                    className="col-span-2"
                />
            </div>
            <UetCheckbox
                title="Create new calendar"
                checked={isCreateNew}
                onChange={handleIsCreateNewChange}
            />
        </div>
    );
}

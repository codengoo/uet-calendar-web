import { useAppSelector } from "@/hooks/redux";
import { selectPreviewCalendar } from "@/libs/redux";
import moment from "moment";

export default function Preview() {
    const calendars = useAppSelector(selectPreviewCalendar);
    const stringDay = calendars[0]?.dayOfWeek || "CN";
    const spaceDay = stringDay !== "CN" ? parseInt(stringDay) - 1 : 7;

    const currentDay = moment().startOf("week").add(spaceDay, "days");

    const sortedCalendars = [...calendars].sort(
        (a, b) => a.sessionInHour[0] - b.sessionInHour[0],
    );

    return (
        <div className="sticky top-10 z-10 mb-16 h-fit w-64 rounded-2xl bg-white px-5 py-5 shadow-xl">
            <div className="mb-5 flex flex-col items-center gap-2">
                <p className="text-lg font-light text-blue-600">
                    {currentDay.format("ddd")}
                </p>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-light text-white">
                    {currentDay.format("DD")}
                </div>
            </div>
            <div className="border-x border-gray-300 py-5">
                {sortedCalendars.map((cal, index) => (
                    <div
                        key={cal.group + cal.subjectClassCode + index}
                        className="h-36 w-[95%] rounded-md bg-blue-500 p-2 text-sm font-light leading-4 text-white my-1 border-red-500 border-l-4"
                    >
                        <p className="truncate">{cal.subjectName + " - " + cal.subjectCode}</p>
                        <p className="truncate">
                            {cal.sessionInHour[0] +
                                "h - " +
                                cal.sessionInHour[1] +
                                "h"}
                        </p>
                        <p className="truncate">{cal.teacher + " - " + cal.lectureHall}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

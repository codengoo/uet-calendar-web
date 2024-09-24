
import { useAppSelector } from "@/hooks/redux";
import { selectPreviewCalendar } from "@/libs/redux";
import { formatDay } from "@/libs/utils";

export default function Preview() {
    const calendars = useAppSelector(selectPreviewCalendar);
    const { dayName, dateOfMonth: date } = formatDay(calendars[0]?.dayOfWeek);

    const sortedCalendars = [...calendars].sort(
        (a, b) => a.sessionInHour[0] - b.sessionInHour[0],
    );

    return (
        <div className="sticky top-10 z-10 mb-16 h-fit w-64 rounded-2xl bg-white px-5 py-5 shadow-xl">
            <div className="mb-5 flex flex-col items-center gap-2">
                <p className="text-lg font-light text-blue-600">{dayName}</p>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-light text-white">
                    {date}
                </div>
            </div>
            <div className="border-x border-gray-300 py-5">
                {sortedCalendars.map((cal, index) => (
                    <div
                        key={cal.group + cal.subjectClassCode + index}
                        className="my-1 h-36 w-[95%] rounded-md border-l-4 border-red-500 bg-blue-500 p-2 text-sm font-light leading-4 text-white"
                    >
                        <p className="truncate">
                            {cal.subjectName + " - " + cal.subjectCode}
                        </p>
                        <p className="truncate">
                            {cal.sessionInHour[0] +
                                "h - " +
                                cal.sessionInHour[1] +
                                "h"}
                        </p>
                        <p className="truncate">
                            {cal.teacher + " - " + cal.lectureHall}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

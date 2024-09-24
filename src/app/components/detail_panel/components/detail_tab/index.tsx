"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
    selectCalendarInfo,
    selectStudentInfo,
    setPreviewCalendar,
} from "@/libs/redux";
import { useEffect } from "react";
import { TbCalendarMonth, TbSchool } from "react-icons/tb";

import IconBlock from "./components/icon_block";
import InfoBlock, { IInfoBlockItem } from "./components/info_block";

interface ICalInfoBlock {
    subCode: string;
    dayOfWeek: string;
    data: IInfoBlockItem[];
}

export default function DetailTab() {
    const studentInfo = useAppSelector(selectStudentInfo);
    const calendarInfo = useAppSelector(selectCalendarInfo);
    const dispatch = useAppDispatch();

    if (!studentInfo || !calendarInfo) return;

    const studentInfoSource = [
        { title: "Fullname", value: studentInfo.name, highlight: true },
        { title: "Class", value: studentInfo.officialClass },
        { title: "Student ID", value: studentInfo.sid },
    ] satisfies IInfoBlockItem[];

    const calendarInfoSources = calendarInfo.map<ICalInfoBlock>((subject) => {
        return {
            dayOfWeek: subject.dayOfWeek,
            subCode: subject.subjectClassCode,
            data: [
                {
                    title: "Subject name",
                    value: subject.subjectName,
                    highlight: true,
                },
                {
                    title: "Subject code",
                    value: subject.subjectClassCode,
                },
                { title: "Lecture hall", value: subject.lectureHall },
                { title: "Teaer", value: subject.teacher },
                { title: "Group", value: subject.group },
                {
                    title: "Time",
                    value:
                        subject.sessionInHour[0] +
                        "h - " +
                        subject.sessionInHour[1] +
                        "h / T" +
                        subject.dayOfWeek,
                },
            ],
        };
    });

    function handleCalendarHover(dayOfWeek: string) {
        const calendar = calendarInfo.filter(
            (cal) => cal.dayOfWeek === dayOfWeek,
        );

        dispatch(setPreviewCalendar(calendar));
    }

    useEffect(() => {
        handleCalendarHover(calendarInfo?.[0].dayOfWeek || "2");
    }, [calendarInfo]);

    return (
        <div className="space-y-5 p-5 w-full">
            <div className="flex flex-row gap-4">
                <IconBlock icon={TbSchool} />
                <InfoBlock data={studentInfoSource} />
            </div>

            <div className="flex flex-row gap-4">
                <IconBlock icon={TbCalendarMonth} />
                <div className="w-full space-y-5">
                    {calendarInfoSources.map((sub, index) => (
                        <InfoBlock
                            calendarMode
                            data={sub.data}
                            onHover={() => handleCalendarHover(sub.dayOfWeek)}
                            key={sub.data[0].title + index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

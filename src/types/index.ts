import { ICalendar, IStudent } from "@nghiavuive/uet-course";

export interface IGetCourseResponse {
    student: IStudent,
    calendar: ICalendar[]
}

export interface ISubjectCalendarSetting {
    session: [number, number],
    day: string,
    teacher: string,
    lecturerHall: string,
    name: string,
    code: string,
    group: string
}

export interface ISettings {
    subjectCalendar: ISubjectCalendarSetting[];
    numRepeats: number;
    createNew: boolean;
    calendarName: string;
}
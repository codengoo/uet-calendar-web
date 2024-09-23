import { ICalendar, IStudent } from "@nghiavuive/uet-course";

export interface IGetCourseResponse {
    student: IStudent,
    calendar: ICalendar[]
}
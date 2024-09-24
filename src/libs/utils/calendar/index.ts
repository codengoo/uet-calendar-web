import { calendar_v3, google } from "googleapis";

import { parseStartDate } from "@/libs/utils";
import { ISubjectCalendarSetting } from "@/types";

export function authenticate(token: string) {
    const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
    );

    oAuth2Client.setCredentials({
        access_token: token,
    });

    return oAuth2Client;
}

export async function getCalendar(
    GCalendar: calendar_v3.Calendar,
    isCreateNew: boolean,
    calendarName: string = "Thoi khoa bieu",
): Promise<string | null | undefined> {
    if (isCreateNew) {
        const calendar = await GCalendar.calendars.insert({
            requestBody: {
                summary: calendarName,
            },
        });

        return calendar.data.id;
    } else {
        const calendarList = await GCalendar.calendarList.list();
        return calendarList.data.items?.find((cal) => cal.primary)?.id;
    }
}

export async function createEvent(
    GCalendar: calendar_v3.Calendar,
    calendarId: string,
    numRepeats: number,
    sub: ISubjectCalendarSetting,
): Promise<string | undefined | null> {
    const { start, end, day } = parseStartDate(sub.day, sub.session);

    const event = await GCalendar.events.insert({
        calendarId,
        requestBody: {
            summary: sub.name + " - " + sub.code,
            start: {
                dateTime: start.toJSON(),
                timeZone: "Asia/Ho_Chi_Minh",
            },
            end: {
                dateTime: end.toJSON(),
                timeZone: "Asia/Ho_Chi_Minh",
            },

            description:
                sub.teacher +
                "\n" +
                sub.lecturerHall +
                "\n" +
                (sub.group === "CL"
                    ? "Lý thuyết"
                    : "Thực hành nhóm " + sub.group),
            location: sub.lecturerHall,

            recurrence: [`RRULE:FREQ=WEEKLY;BYDAY=${day};COUNT=${numRepeats}`],
        },
    });

    return event.data.id;
}

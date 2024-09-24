import {
    Calendar,
    ICalendar,
    Subject,
    SubjectPipeline,
    SubjectStudent,
} from "@nghiavuive/uet-course";
import { google } from "googleapis";
import { NextRequest } from "next/server";

import { authenticate, createEvent, getCalendar } from "@/libs/utils/calendar";
import { IGetCourseResponse, ISettings } from "@/types";

import { getSocket } from "../../../libs/socket/socket";

export async function GET(request: NextRequest) {
    const studentID = request.nextUrl.searchParams.get("sid") || "";
    const socketID = request.cookies.get("socket_id")?.value || "";

    const io = getSocket();
    const socket = io.sockets.sockets.get(socketID);

    socket?.emit("course_api_progress", "Collecting data...");

    const subjectPipeline = new SubjectPipeline();
    subjectPipeline.addAggregateBySID();

    const course = new Subject(
        { sid: studentID, semester: "041" },
        subjectPipeline,
    );
    const calendar = new Calendar({});

    const [studentCourse, allCalendar] = await Promise.all([
        course.craw<SubjectStudent[]>(),
        calendar.craw<ICalendar[]>(),
    ]);

    socket?.emit("course_api_progress", "Gathering data...");

    const data = studentCourse.map<IGetCourseResponse>((item) => {
        return {
            student: item.student,
            calendar: item.subjects
                .map((sub) =>
                    allCalendar.filter(
                        (i) =>
                            i.subjectClassCode === sub.subjectCode &&
                            (i.group === "CL" || i.group === sub.group),
                    ),
                )
                .filter((cal) => !!cal)
                .flat(),
        };
    });

    socket?.emit("course_api_progress", "Processed data successfully...");

    return Response.json(data[0] || {});
}

export async function POST(request: NextRequest) {
    const STP = "calendar_api_progress";
    const token = request.cookies.get("token")?.value || "";
    const socketID = request.cookies.get("socket_id")?.value || "";
    const settings = (await request.json()) as ISettings;

    const io = getSocket();
    const socket = io.sockets.sockets.get(socketID);
    const emit = (msg: string) => socket?.emit(STP, msg);

    const GCalendar = google.calendar({
        version: "v3",
        auth: authenticate(token),
    });
    emit("Creating calendar");
    const calendarId = await getCalendar(
        GCalendar,
        settings.createNew,
        settings.calendarName,
    );

    if (!calendarId) {
        emit("Unable to create calendar");
        return new Response("Unable to create calendar", { status: 400 });
    }

    try {
        for (const sub of settings.subjectCalendar) {
            socket?.emit(STP, `Creating event '${sub.name + " - " + sub.code}'`);
            const eventId = await createEvent(
                GCalendar,
                calendarId,
                settings.numRepeats,
                sub,
            );
            if (!eventId) {
                emit("Failed to create event");
                return new Response("Failed to create event", { status: 400 });
            }
        }
        return new Response(null, {});
    } catch (err) {
        emit("Error occurred while creating calendar");
        console.error(err);
        return new Response("Error occurred while creating calendar", {
            status: 500,
        });
    }
}

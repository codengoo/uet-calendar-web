import { NextRequest } from "next/server";
import { google } from 'googleapis';
import { Calendar, ICalendar, Subject, SubjectPipeline, SubjectStudent } from "@nghiavuive/uet-course";
import {getSocket} from "../../../libs/socket"

export async function GET(request: NextRequest) {
  const studentID = request.nextUrl.searchParams.get("sid") || "";

  const subjectPipeline = new SubjectPipeline();
  subjectPipeline.addAggregateBySID();

  const course = new Subject({ sid: studentID, semester: "041" }, subjectPipeline);
  const calendar = new Calendar({});

  const [studentCourse, allCalendar] = await Promise.all([
    course.craw<SubjectStudent[]>(),
    calendar.craw<ICalendar[]>()
  ]);

  const data = studentCourse.map((item) => {
    return item.subjects.map(sub => {
      // @ts-ignore
      return allCalendar.find(i => i.subjectClassCode === sub.subjectCode && (i.group === "CL" || i.group === sub.group)
      )
    })
  });

  return Response.json(data[0]);
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get('token')?.value || "";
  const socketID = request.cookies.get('socket_id')?.value || "";

  const io = getSocket(); 
  const socket = io.sockets.sockets.get(socketID);

  socket.emit("hello", "welcome");

  // const oAuth2Client = new google.auth.OAuth2(
  //   process.env.GOOGLE_CLIENT_ID,
  //   process.env.GOOGLE_CLIENT_SECRET
  // );

  // oAuth2Client.setCredentials({
  //   access_token: token,
  // });

  // const GCalendar = google.calendar({ version: 'v3', auth: oAuth2Client });
  // const calendar = await GCalendar.calendars.insert({
  //   requestBody: {
  //     summary: "Thoi khoa bieu"
  //   }
  // })

  // const events = await GCalendar.events.insert({
  //   calendarId: calendar.data.id!,
  //   requestBody: {
  //     summary: "Test event",
  //     start: {
  //       dateTime: (new Date()).toJSON(),
  //       timeZone: 'Asia/Ho_Chi_Minh',
  //     },
  //     end: {
  //       dateTime: (new Date((new Date()).getTime() + 30 * 60 * 1000)).toJSON(),
  //       timeZone: 'Asia/Ho_Chi_Minh',
  //     },
  //   }
  // })

  // return Response.json({ calendar, events })
  return Response.json({})
}
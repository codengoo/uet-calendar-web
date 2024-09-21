import { NextRequest } from "next/server";
import { google } from 'googleapis';
import { Calendar, ICalendar, Subject, SubjectPipeline, SubjectStudent } from "@nghiavuive/uet-course";

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

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  oAuth2Client.setCredentials({
    access_token: token,
  });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
  const events = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });

  return Response.json({data: events.data.items})
}
import { google } from "googleapis";
import { NextRequest } from "next/server";
import cookie from 'cookie';

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");

    const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        `http://localhost:3000/api/auth/callback`
    );

    const { tokens } = await oAuth2Client.getToken(code || "");
    oAuth2Client.setCredentials(tokens);

    const maxAge = tokens.expiry_date
        ? Math.floor((tokens.expiry_date - Date.now()) / 1000)
        : 0;

    const cookieContent = cookie.serialize('token', tokens.access_token || "", {
        httpOnly: true,
        secure: false,
        maxAge: maxAge,
        sameSite: 'strict',
        path: '/',
    });

    return new Response(JSON.stringify({ tokens }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            'Set-Cookie': cookieContent
        }
    });

}
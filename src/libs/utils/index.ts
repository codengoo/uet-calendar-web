import moment from "moment";

export async function authorize(): Promise<boolean> {
    const w = 400;
    const h = 600;
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2;
    const popup = window.open(
        "http://localhost:3000/api/auth",
        "Google Authorization",
        `width=${w},height=${h},top=${top},left=${left}`,
    );

    return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
            try {
                if (popup?.location?.pathname === "/api/auth/callback") {
                    popup.close();

                    clearInterval(timer);
                    resolve(true);
                    return;
                }
                console.log(popup?.closed);
            } catch (e) {}

            if (popup?.closed) {
                clearInterval(timer);
                reject();
                return;
            }
        }, 1000);
    });
}

export function formatDay(dayOfWeek: string = "CN") {
    const spaceDay = dayOfWeek !== "CN" ? parseInt(dayOfWeek) - 1 : 7;

    const currentDay = moment()
        .startOf("day")
        .startOf("week")
        .add(spaceDay, "days");

    return {
        dayName: currentDay.format("ddd"),
        dayOfMonth: currentDay.format("DD"),
        date: currentDay,
    };
}

export function parseStartDate(dayOfWeek: string, session: [number, number]) {
    const { date } = formatDay(dayOfWeek);

    return {
        start: date.clone().add(session[0], "hours").toDate(),
        end: date.clone().add(session[1], "hours").toDate(),
        day: date.format(""),
    };
}

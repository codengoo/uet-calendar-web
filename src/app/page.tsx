"use client"

export default function Home() {
  function authorize() {
    const w = 400;
    const h = 600;
    const left = (screen.width / 2) - (w / 2);
    const top = (screen.height / 2) - (h / 2);
    const popup = window.open(
      "http://localhost:3000/api/auth",
      "Google Authorization",
      `width=${w},height=${h},top=${top},left=${left}`
    );

    const timer = setInterval(() => {
      try {
        if (popup?.location?.pathname === "/api/auth/callback") {
          popup.close();
          clearInterval(timer);
        }
      } catch (e) { }
    }, 1000);
  }

  return (
    <div>
      <form>
        <input id="student_id" className="border-red-500 border-2"></input>
      </form>

      <button onClick={authorize}>
        Cap quyen
      </button>
    </div>
  );
}

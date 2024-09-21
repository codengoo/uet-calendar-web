"use client"

import axios from "axios";
import { socket } from "../socket";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

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

  async function createCalendar() {
    await axios.post("http://localhost:3000/api/course", {

    });
  }

  useEffect(() => {
    if (socket.connected) {
      onConnect();
      console.log(socket.id);
      Cookies.set('socket_id', socket.id || "");
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("hello", (value) => {
      console.log("value from  client: ", value);

    });

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>Transport: {transport}</p>

      <form>
        <input id="student_id" className="border-red-500 border-2"></input>
      </form>

      <button onClick={authorize}>
        Cap quyen
      </button>

      <button onClick={createCalendar}>
        Tao lich
      </button>
    </div>
  );
}

"use client";

import { useAppDispatch } from "@/hooks/redux";
import { socket } from "@/libs/socket/socket-client";
import Cookies from "js-cookie";
import { useEffect } from "react";

import { setSubjectFetchingMessage } from "@libs/redux";

import Headline from "@components/headline";
import Panel from "@components/panel";

export default function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (socket.connected) {
            console.log(socket.id);
            Cookies.set("socket_id", socket.id || "");
        }

        function onConnect() {
            console.log("connected");
            console.log("transport: ", socket.io.engine.transport.name);
        }

        function onDisconnect() {
            console.log("disconnected");
        }

        socket.on("course_api_progress", (value) => {
            console.log(value);
            dispatch(setSubjectFetchingMessage(value));
        });

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);

    return (
        <section className="container relative mx-auto h-screen w-screen px-5 before:absolute before:left-[50px] before:top-[50px] before:w-full before:bg-[url('/hero-pattern.svg')] after:absolute after:bottom-[50px] after:right-[50px] after:w-full after:bg-[url('/hero-pattern.svg')] sm:before:h-[600px] sm:before:w-[600px] sm:after:h-[600px] sm:after:w-[600px]">
            <Headline />
            <Panel />
        </section>
    );
}

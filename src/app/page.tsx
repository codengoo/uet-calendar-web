"use client";

import Container from "@/components/layout/conatainer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { socket } from "@/libs/socket/socket-client";
import Cookies from "js-cookie";
import { useEffect } from "react";

import { selectStudentInfo, setSubjectFetchingMessage } from "@libs/redux";

import Headline from "@components/headline";
import Panel from "@components/panel";

import DetailBodyPanel from "./components/detail_body_pannel";
import Tab from "./components/panel/components/tab";
import Preview from "./components/preview";

export default function Home() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selectStudentInfo);

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
        <div className="relative">
            <Container>
                <Headline />
                <Panel />
            </Container>

            {data ? (
                <>
                    <Container id="detail">
                        <div className="flex flex-row justify-between">
                            <div className="relative z-10 mb-16 w-1/2 rounded-2xl bg-white shadow-2xl">
                                <Tab
                                    data={[
                                        {
                                            body: <DetailBodyPanel />,
                                            title: "Detail",
                                        },
                                        { body: <></>, title: "Settings" },
                                    ]}
                                />
                            </div>

                            <Preview />
                        </div>
                    </Container>

                    <div className="absolute left-[55%] top-[50vh] flex h-[75vh] flex-col items-center">
                        <div className="flex flex-shrink flex-col gap-5 overflow-hidden rounded-full">
                            {[...new Array(50)].map((i) => (
                                <div
                                    key={"dot__" + i}
                                    className="h-3 w-1 flex-none rounded-full bg-primary/30"
                                ></div>
                            ))}
                        </div>
                        <div className="relative">
                            <div className="absolute left-[4px] top-[4px] h-5 w-5 flex-none rounded-full bg-primary"></div>
                            <div className="h-7 w-7 flex-none animate-ping rounded-full bg-primary/50"></div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

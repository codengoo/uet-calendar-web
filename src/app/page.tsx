"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { socket } from "@/libs/socket/socket-client";
import Cookies from "js-cookie";
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";

import { selectStudentInfo, setSubjectFetchingMessage } from "@libs/redux";

import Headline from "@components/headline";
import Panel from "@components/panel";

import { UetContainer } from "@layout";

import DetailBodyPanel from "./components/detail_body_pannel";
import Tab from "./components/panel/components/tab";
import Preview from "./components/preview";
import SettingsBodyPanel from "./components/settings_body_panel";

export default function Home() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selectStudentInfo);

    useEffect(() => {
        socket.connected && Cookies.set("socket_id", socket.id || "");

        function onDisconnect() {
            toast.error("Socket disconnected");
        }

        function onCourseAPIStatus(value: string) {
            dispatch(setSubjectFetchingMessage(value));
        }

        socket.on("course_api_progress", onCourseAPIStatus);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("disconnect", onDisconnect);
            socket.off("course_api_progress", onCourseAPIStatus);
        };
    }, []);

    const tabData = useMemo(
        () => [
            {
                body: <DetailBodyPanel />,
                title: "Detail",
            },
            {
                body: <SettingsBodyPanel />,
                title: "Settings",
            },
        ],
        [],
    );

    return (
        <div className="relative">
            <UetContainer>
                <Headline />
                <Panel />
            </UetContainer>

            {data ? (
                <>
                    <UetContainer id="detail">
                        <div className="flex flex-row justify-between">
                            <div className="relative z-10 mb-16 h-fit w-1/2 rounded-2xl bg-white shadow-2xl">
                                <Tab data={tabData} />
                            </div>

                            <Preview />
                        </div>
                    </UetContainer>

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

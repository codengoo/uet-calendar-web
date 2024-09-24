"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
    fetchSubjectsBySID,
    selectSubjectStatus,
    setSubjectFetchingMessage,
} from "@/libs/redux";

import UetBottomTab from "../bottom_tab";
import BrowsingTab from "./components/browsing_tab";

export default function BrowsingPanel() {
    const [studentId, setStudentId] = useState("");
    const dispatch = useAppDispatch();
    const { isFetched, status, message } = useAppSelector(selectSubjectStatus);

    function handleProcess() {
        dispatch(setSubjectFetchingMessage("Pending"));
        dispatch(fetchSubjectsBySID(studentId));
    }

    useEffect(() => {
        if (isFetched) {
            if (status === "rejected") toast.error(message);
            else if (status === "fulfilled") {
                toast.success(message);
                document
                    .getElementById("detail")
                    ?.scrollIntoView({ behavior: "smooth" });

                console.log(document.getElementById("detail"));
                
            }
        }
    }, [isFetched, status]);

    return (
        <div className="flex flex-grow flex-col">
            <BrowsingTab value={studentId} onTextChange={setStudentId} />
            <UetBottomTab
                onClick={handleProcess}
                status={message}
                disabled={!isFetched || studentId.length !== 8}
                isLoading={!isFetched}
            />
        </div>
    );
}

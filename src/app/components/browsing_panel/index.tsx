"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
    fetchSubjectsBySID,
    selectSubject,
    selectSubjectStatus,
} from "@libs/redux";

import BottomPanel from "../bottom_panel";
import BrowsingBodyPanel from "../browsing_body_panel";

export default function BrowsingPanel() {
    const [studentId, setStudentId] = useState("");
    const dispatch = useAppDispatch();
    const { isFetched, status, message } = useAppSelector(selectSubjectStatus);
    const calendar = useAppSelector(selectSubject);

    function handleProcess() {
        dispatch(fetchSubjectsBySID(studentId));
    }

    useEffect(() => {
        if (isFetched) {
            if (status === "rejected") toast.error(message);
            else if (status === "fulfilled") toast.success(message);
        }
    }, [isFetched, status]);

    return (
        <div className="flex flex-grow flex-col">
            <BrowsingBodyPanel value={studentId} onTextChange={setStudentId} />
            <BottomPanel
                onClick={handleProcess}
                status={message}
                disabled={!isFetched || studentId.length !== 8}
            />
        </div>
    );
}

"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useState } from "react";

import { fetchSubjectsBySID, selectSubjectStatus } from "@libs/redux";

import BottomPanel from "../bottom_panel";
import BrowsingBodyPanel from "../browsing_body_panel";

export default function BrowsingPanel() {
    const [studentId, setStudentId] = useState("");
    const dispatch = useAppDispatch();
    const { isFetched, status } = useAppSelector(selectSubjectStatus);

    function handleProcess() {
        dispatch(fetchSubjectsBySID(studentId));
    }

    return (
        <div className="flex flex-grow flex-col">
            <BrowsingBodyPanel value={studentId} onTextChange={setStudentId} />
            <BottomPanel
                onClick={handleProcess}
                status={status}
                disabled={!isFetched}
            />
        </div>
    );
}

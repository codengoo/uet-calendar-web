"use client";

import { useAppDispatch } from "@/hooks/redux";
import { useState } from "react";

import BottomPanel from "../bottom_panel";
import BrowsingBodyPanel from "../browsing_body_panel";

export default function BrowsingPanel() {
    const [studentId, setStudentId] = useState("");
    const dispatch = useAppDispatch();

    function handleProcess() {
        
    }

    return (
        <div className="flex flex-grow flex-col">
            <BrowsingBodyPanel value={studentId} onTextChange={setStudentId} />
            <BottomPanel onClick={handleProcess} />
        </div>
    );
}

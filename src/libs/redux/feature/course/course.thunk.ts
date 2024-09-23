import axios from "@libs/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubjectsBySID = createAsyncThunk(
    'course/fetchSubjectsBySID',
    async (sid: string) => {
        const response = await axios.get("/course", {
            params: {
                sid,
                semester: "041"
            }
        });

        return response.data
    }
)
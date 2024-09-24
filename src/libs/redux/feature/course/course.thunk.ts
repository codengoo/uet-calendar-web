import { IGetCourseResponse } from "@/types";
import axios from "@/libs/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubjectsBySID = createAsyncThunk<IGetCourseResponse, string>(
    'course/fetchSubjectsBySID',
    async (sid: string) => {
        const response = await axios.get<IGetCourseResponse>("/course", {
            params: {
                sid,
                semester: "041"
            }
        });

        if (response.status !== 200) return Promise.reject(response.statusText);
        return response.data
    }
)
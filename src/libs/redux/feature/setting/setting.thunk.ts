import axios from "@/libs/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/libs/redux";

export const createCalendar = createAsyncThunk(
    'setting/create',
    async (_, { getState }) => {
        const state = getState() as RootState;

        const response = await axios.post("/course", {
            ...state.setting.settings
        });

        if (response.status !== 200) return Promise.reject(response.statusText);
        return response.data
    }
)
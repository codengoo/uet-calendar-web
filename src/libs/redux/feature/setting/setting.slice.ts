import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

import {
    type RootState,
    createCalendar,
    fetchSubjectsBySID,
} from "@/libs/redux";
import { ISettings, ISubjectCalendarSetting } from "@/types";

interface ISettingState {
    settings: ISettings;
    status: "fulfilled" | "pending" | "rejected" | "init";
    message: string;
    isFetched: boolean;
    progress: number;
}

const initialState: ISettingState = {
    settings: {
        subjectCalendar: [],
        numRepeats: 18,
        calendarName: "Thoi khoa bieu",
        createNew: true,
    },
    status: "init",
    message: "",
    isFetched: true,
    progress: 0,
};

const settingSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCalendarName: (state, action: PayloadAction<string>) => {
            state.settings.calendarName = action.payload;
        },

        setIsCreateNewCalendar: (state, action: PayloadAction<boolean>) => {
            state.settings.createNew = action.payload;
        },

        setNumRepeatsEvent: (state, action: PayloadAction<number>) => {
            state.settings.numRepeats = action.payload;
        },

        setSettingMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            const len = state.settings.subjectCalendar.length + 2;
            state.progress = ((state.progress / 100) * len + 1) / len;
        },

        setSubjectCalendarSettings: (
            state,
            action: PayloadAction<ISubjectCalendarSetting[]>,
        ) => {
            state.settings.subjectCalendar = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubjectsBySID.fulfilled, (state, action) => {
            state.settings.subjectCalendar = action.payload.calendar.map(
                (sub) => ({
                    code: sub.subjectClassCode,
                    name: sub.subjectName,
                    day: sub.dayOfWeek,
                    group: sub.group,
                    lecturerHall: sub.lectureHall,
                    session: [sub.sessionInHour[0], sub.sessionInHour[1]],
                    teacher: sub.teacher,
                }),
            );
        });
        builder.addCase(fetchSubjectsBySID.pending, (state) => {
            state.settings.subjectCalendar = [];
        });
        builder.addCase(fetchSubjectsBySID.rejected, (state) => {
            state.settings.subjectCalendar = [];
        });

        builder.addCase(createCalendar.fulfilled, (state) => {
            state.isFetched = true;
            state.status = "fulfilled";
            state.message = "Successfully created calendar";
            state.progress = 100;
        });
        builder.addCase(createCalendar.rejected, (state, action) => {
            state.isFetched = true;
            state.status = "rejected";
            state.message = action.error.message || "error";
            state.progress = 100;
        });
        builder.addCase(createCalendar.pending, (state) => {
            state.isFetched = false;
            state.status = "pending";
            state.message = "Pending";
            state.progress = 0;
        });
    },
});

export const {
    setSubjectCalendarSettings,
    setCalendarName,
    setIsCreateNewCalendar,
    setNumRepeatsEvent,
    setSettingMessage,
} = settingSlice.actions;

export const selectCalendarName = (state: RootState) =>
    state.setting.settings.calendarName;
export const selectIsCreateNew = (state: RootState) =>
    state.setting.settings.createNew;
export const selectNumRepeats = (state: RootState) =>
    state.setting.settings.numRepeats;
export const selectSubjectCalendarSettings = (state: RootState) =>
    state.setting.settings.subjectCalendar;
export const selectCalendarCreatingStatus = (state: RootState) =>
    state.setting.status;
export const selectCalendarCreatingMessage = (state: RootState) =>
    state.setting.message;
export const selectIsCalendarFetched = (state: RootState) =>
    state.setting.isFetched;
export const selectCalendarProgress = (state: RootState) =>
    state.setting.progress;
export const selectCalendarSettings = createSelector(
    [selectCalendarName, selectIsCreateNew, selectNumRepeats],
    (calendarName, isCreateNew, numRepeats) => ({
        calendarName,
        isCreateNew,
        numRepeats,
    }),
);
export const selectCalendarStatus = createSelector(
    [
        selectCalendarCreatingStatus,
        selectCalendarCreatingMessage,
        selectIsCalendarFetched,
        selectCalendarProgress,
    ],
    (status, message, isDone, progress) => ({
        status,
        message,
        isDone,
        progress,
    }),
);

export default settingSlice.reducer;

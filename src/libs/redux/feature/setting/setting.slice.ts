import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSubjectsBySID, type RootState } from '@/libs/redux';

interface ISubjectCalendarSetting {
    session: [number, number],
    day: number,
    teacher: string,
    lecturerHall: string,
    name: string,
    code: string,
    group: string
}

interface SettingsState {
    subjectCalendar: ISubjectCalendarSetting[];
    numRepeats: number;
    createNew: boolean;
    calendarName: string;
}

const initialState: SettingsState = {
    subjectCalendar: [],
    numRepeats: 18,
    calendarName: "Thoi khoa bieu",
    createNew: true
}

const settingSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCalendarName: (state, action: PayloadAction<string>) => {
            state.calendarName = action.payload
        },

        setIsCreateNewCalendar: (state, action: PayloadAction<boolean>) => {
            state.createNew = action.payload;
        },

        setNumRepeatsEvent: (state, action: PayloadAction<number>) => {
            state.numRepeats = action.payload;
        },

        setSubjectCalendarSettings: (state, action: PayloadAction<ISubjectCalendarSetting[]>) => {
            state.subjectCalendar = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchSubjectsBySID.fulfilled, (state, action) => {
            state.subjectCalendar = action.payload.calendar.map((sub) => ({
                code: sub.subjectClassCode,
                name: sub.subjectName,
                day: sub.dayOfWeek == "CN" ? 6 : parseInt(sub.dayOfWeek) - 2,
                group: sub.group,
                lecturerHall: sub.lectureHall,
                session: [sub.sessionInHour[0], sub.sessionInHour[1]],
                teacher: sub.teacher
            }))
        });
        builder.addCase(fetchSubjectsBySID.pending, (state, action) => {
            state.subjectCalendar = [];
        })
        builder.addCase(fetchSubjectsBySID.rejected, (state, action) => {
            state.subjectCalendar = [];
        })
    }
})

export const { setSubjectCalendarSettings, setCalendarName, setIsCreateNewCalendar, setNumRepeatsEvent } = settingSlice.actions

export const selectCalendarName = (state: RootState) => state.setting.calendarName;
export const selectIsCreateNew = (state: RootState) => state.setting.createNew;
export const selectNumRepeats = (state: RootState) => state.setting.numRepeats;
export const selectSubjectCalendarSettings = (state: RootState) => state.setting.subjectCalendar;
export const selectCalendarSettings = createSelector(
    [selectCalendarName, selectIsCreateNew, selectNumRepeats],
    (calendarName, isCreateNew, numRepeats) => ({ calendarName, isCreateNew, numRepeats })
);

export default settingSlice.reducer
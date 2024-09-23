import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSubjectsBySID, type RootState } from '@libs/redux';
import { ICalendar, IStudent } from '@nghiavuive/uet-course';

interface CourseState {
    status: "fulfilled" | "pending" | "rejected" | "init",
    message: string,
    isFetched: boolean,
    settings: {},
    calendar: ICalendar[],
    studentInfo?: IStudent
}

const initialState: CourseState = {
    status: "init",
    message: "",
    isFetched: true,
    settings: {},
    calendar: []
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<{}>) => {
            state.settings = action.payload;
        },

        setSubjectFetchingMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchSubjectsBySID.fulfilled, (state, action) => {
            state.calendar = action.payload.calendar;
            state.studentInfo = action.payload.student;
            state.isFetched = true;
            state.status = "fulfilled"
        });
        builder.addCase(fetchSubjectsBySID.pending, (state, action) => {
            state.isFetched = false;
            state.status = "pending"
        })
        builder.addCase(fetchSubjectsBySID.rejected, (state, action) => {
            // state.message = action.error.message || "error";
            state.status = "rejected";
            state.isFetched = true;
        })
    }
})

export const { setSettings, setSubjectFetchingMessage } = courseSlice.actions

export const selectSubject = (state: RootState) => state.course.calendar;
export const selectSubjectFetchingStatus = (state: RootState) => state.course.status;
export const selectSubjectFetchingDone = (state: RootState) => state.course.isFetched;
export const selectSubjectFetchingMessage = (state: RootState) => state.course.message;
export const selectSubjectStatus = createSelector(
    [selectSubjectFetchingStatus, selectSubjectFetchingDone, selectSubjectFetchingMessage],
    (status, isFetched, message) => ({ status, isFetched, message })
);

export const selectStudentInfo = (state: RootState) => state.course.studentInfo
export const selectCalendarInfo = (state: RootState) => state.course.calendar;

export default courseSlice.reducer
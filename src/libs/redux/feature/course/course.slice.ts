import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@libs/redux';
import { fetchSubjectsBySID } from './course.thunk';

interface CourseState {
    status: "pending" | "fulfilled" | "rejected",
    isFetched: boolean,
    settings: {},
    subjects: [],
    studentInfo: {}
}

const initialState: CourseState = {
    status: "pending",
    isFetched: true,
    settings: {},
    subjects: [],
    studentInfo: {}
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<{}>) => {
            state.settings = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchSubjectsBySID.fulfilled, (state, action) => {
            state.subjects = action.payload
            state.isFetched = true;
            state.status = "fulfilled"
        });
        builder.addCase(fetchSubjectsBySID.pending, (state, action) => {
            state.isFetched = false;
            state.status = "pending"
        })
        builder.addCase(fetchSubjectsBySID.rejected, (state, action) => {
            state.status = "rejected";
            state.isFetched = false;
        })
    }
})

export const { setSettings } = courseSlice.actions

export const selectSubject = (state: RootState) => state.course.subjects;
export const selectSubjectStatus = (state: RootState) => ({
    status: state.course.status,
    isFetched: state.course.isFetched,
})

export const selectStudentInfo = (state: RootState) => state.course.studentInfo

export default courseSlice.reducer
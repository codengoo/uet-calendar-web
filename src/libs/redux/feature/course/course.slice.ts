import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@libs/redux';

interface CourseState {
    settings: {},
    subjects: [],
}

const initialState: CourseState = {
    settings: {},
    subjects: [],
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<{}>) => {
            state.settings = action.payload;
        }
    }
})

export const { setSettings } = courseSlice.actions

export const selectSubject = (state: RootState) => state.course.subjects;

export default courseSlice.reducer
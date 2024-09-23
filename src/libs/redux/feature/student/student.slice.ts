import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@libs/redux';

interface IStudentState {
    studentID: string,
    studentInfo: {}
}

const initialState: IStudentState = {
    studentID: '',
    studentInfo: {}
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentInfo: (state, action: PayloadAction<{}>) => {
            state.studentInfo = action.payload;
        }
    }
})

export const { setStudentInfo } = studentSlice.actions

export const selectStudentInfo = (state: RootState) => state.student.studentInfo

export default studentSlice.reducer
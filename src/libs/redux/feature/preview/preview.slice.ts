import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '@/libs/redux';
import { ICalendar } from '@nghiavuive/uet-course';

interface PreviewState {
   calendar: ICalendar[];
}

const initialState: PreviewState = {
    calendar: []
}

const previewSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setPreviewCalendar: (state, action: PayloadAction<ICalendar[]>) => {
            state.calendar = action.payload;
        },
    }
})

export const { setPreviewCalendar } = previewSlice.actions

export const selectPreviewCalendar = (state: RootState) => state.preview.calendar;

export default previewSlice.reducer
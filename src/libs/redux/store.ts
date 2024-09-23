import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './feature/course/course.slice'
import previewSlice from './feature/preview/preview.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      course: courseSlice,
      preview: previewSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
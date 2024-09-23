import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './feature/course/course.slice'
import studentSlice from './feature/student/student.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      course: courseSlice,
      student: studentSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
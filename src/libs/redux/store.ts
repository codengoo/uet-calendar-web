import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './feature/course/course.slice'
import previewSlice from './feature/preview/preview.slice'
import settingSlice from './feature/setting/setting.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      course: courseSlice,
      preview: previewSlice,
      setting: settingSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
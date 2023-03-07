import { configureStore } from '@reduxjs/toolkit'
import hotelsSlice from '../hotelsSlice'
import authSlice from '../authSlice'
import favoriteSlice from '../favoriteSlice'
export const store = configureStore({
  reducer: {
    Hotels:hotelsSlice,
    auth:authSlice,
    favorite:favoriteSlice
  },
})
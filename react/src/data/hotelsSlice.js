import { createSlice } from '@reduxjs/toolkit'
import { Hotels } from './Hotels'

const initialState = {
  hotels: Hotels,
}

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    
  },
})

export const {  } = hotelsSlice.actions

export default hotelsSlice.reducer
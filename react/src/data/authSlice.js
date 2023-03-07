import { createSlice } from '@reduxjs/toolkit';
import { users } from './users';


const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null,
    token: localStorage.getItem('ACCESS_TOKEN')
  },
  reducers: {
    setUser:(state,action)=>{
      state.user = action.payload;
    },
    setToken: (state,action) => {
      state.token=action.payload
      if (state.token){
          localStorage.setItem('ACCESS_TOKEN',state.token)
      }
      else{
          localStorage.removeItem('ACCESS_TOKEN')
      }
    }
  },
});
export const {setUser,setToken } = authSlice.actions;
export default authSlice.reducer;

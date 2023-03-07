import { createSlice, createStore } from "@reduxjs/toolkit";

const initialState = {
  selectedHotels: [
  ],
};

const favoriteSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addfavorite: (state, action) => {
      state.selectedHotels.push(action.payload);
    //   alert(`The product |${action.payload.name}| has been added to the list!`)
    },
    deletefavorite: (state,action)=>{
      state.selectedHotels=state.selectedHotels.filter(e=>e.id != action.payload)
    }
  },
});

export const { addfavorite ,deletefavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer

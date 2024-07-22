import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favs: [],
  },
  reducers: {
    addFav: (state, action) => {
        if(state.favs.includes(action.payload)){
            return;
        } else{
            state.favs.push(action.payload);
        }
      
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter((fav) => {
        return fav!== action.payload;
      });
    },
  },
});

export const { addFav, removeFav } = favSlice.actions;

export default favSlice.reducer;

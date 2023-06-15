import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "car",
};

const slises = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      // state.bgImg = action.payload;
    },
  },
});
export const { setSearch } = slises.actions;
export default slises.reducer;

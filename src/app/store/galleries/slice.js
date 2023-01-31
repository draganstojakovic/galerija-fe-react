import { createSlice } from "@reduxjs/toolkit";

const galleries = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
  },
  reducers: {
    getFirstPageGalleriesAction: () => {},
    setFirstPageGalleriesAction: (state, { payload }) => {
      state.galleries = payload;
    },
    getNextPageGalleriesAction: () => {},
    setNextPageGalleriesAction: (state, { payload }) => {
      state.galleries = [...galleries, payload];
    },
  },
});

export const {
  getFirstPageGalleriesAction,
  setFirstPageGalleriesAction,
  getNextPageGalleriesAction,
  setNextPageGalleriesAction,
} = galleries.actions;
export default galleries.reducer;

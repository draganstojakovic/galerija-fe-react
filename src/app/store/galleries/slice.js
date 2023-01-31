import { createSlice } from "@reduxjs/toolkit";

const galleries = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
  },
  reducers: {
    getAllGalleriesAction: () => {},
    setAllGalleriesAction: (state, { payload }) => {
      state.galleries = payload;
    },
  },
});

export const { getAllGalleriesAction, setAllGalleriesAction } =
  galleries.actions;
export default galleries.reducer;

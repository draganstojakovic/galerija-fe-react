import { createSlice } from "@reduxjs/toolkit";

const galleries = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
    authUserGalleries: [],
    userGalleries: [],
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
    getAuthUserGalleries: () => {},
    setAuthUserGalleries: (state, { payload }) => {
      state.authUserGalleries = payload;
    },
    getUserGalleriesAction: () => {},
    setUserGalleriesAction: (state, { payload }) => {
      state.userGalleries = payload;
    },
  },
});

export const {
  getFirstPageGalleriesAction,
  setFirstPageGalleriesAction,
  getNextPageGalleriesAction,
  setNextPageGalleriesAction,
  getAuthUserGalleries,
  setAuthUserGalleries,
  getUserGalleriesAction,
  setUserGalleriesAction,
} = galleries.actions;
export default galleries.reducer;

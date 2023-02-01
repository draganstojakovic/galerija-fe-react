import { createSlice } from "@reduxjs/toolkit";

const galleries = createSlice({
  name: "galleries",
  initialState: {
    galleries: {
      current_page: "",
      last_page: "",
      data: [],
    },
    authUserGalleries: {
      current_page: "",
      last_page: "",
      data: [],
    },
    userGalleries: [],
  },
  reducers: {
    getFirstPageGalleriesAction: () => {},
    setFirstPageGalleriesAction: (state, { payload }) => {
      state.galleries.current_page = payload.current_page;
      state.galleries.last_page = payload.last_page;
      state.galleries.data = payload.data;
    },
    getNextPageGalleriesAction: () => {},
    setNextPageGalleriesAction: (state, { payload }) => {
      state.galleries.current_page = payload.current_page;
      state.galleries.last_page = payload.last_page;
      state.galleries.data = [...state.galleries.data, ...payload.data];
    },
    getAuthUserGalleries: () => {},
    setAuthUserGalleries: (state, { payload }) => {
      state.authUserGalleries.current_page = payload.current_page;
      state.authUserGalleries.last_page = payload.last_page;
      state.authUserGalleries.data = [...state.galleries.data, payload.data];
    },
    getNextPageAuthUserGalleriesAction: () => {},
    setNextPageAuthUserGalleriesAction: (state, { payload }) => {
      state.authUserGalleries.current_page = payload.current_page;
      state.authUserGalleries.last_page = payload.last_page;
      state.authUserGalleries.data = [...state.galleries.data, ...payload.data];
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
  getNextPageAuthUserGalleriesAction,
  setNextPageAuthUserGalleriesAction,
} = galleries.actions;
export default galleries.reducer;

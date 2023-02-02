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
    userGalleries: {
      current_page: "",
      last_page: "",
      data: [],
    },
    filteredGalleries: {
      current_page: "",
      last_page: "",
      data: [],
    }
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
      state.authUserGalleries.data = payload.data;
    },
    getNextPageAuthUserGalleriesAction: () => {},
    setNextPageAuthUserGalleriesAction: (state, { payload }) => {
      state.authUserGalleries.current_page = payload.current_page;
      state.authUserGalleries.last_page = payload.last_page;
      state.authUserGalleries.data = [
        ...state.authUserGalleries.data,
        ...payload.data,
      ];
    },
    getUserGalleriesAction: () => {},
    setUserGalleriesAction: (state, { payload }) => {
      state.userGalleries.current_page = payload.current_page;
      state.userGalleries.last_page = payload.last_page;
      state.userGalleries.data = payload.data;
    },
    getNextPageUserGalleriesAction: () => {},
    setNextPageUserGalleriesAction: (state, { payload }) => {
      state.userGalleries.current_page = payload.current_page;
      state.userGalleries.last_page = payload.last_page;
      state.userGalleries.data = [...state.userGalleries.data, ...payload.data];
    },
    getFilteredGalleriesAction: () => {},
    setFilteredGalleriesAction: (state, { payload }) => {
      state.filteredGalleries.current_page = payload.current_page;
      state.filteredGalleries.last_page = payload.last_page;
      state.filteredGalleries.data = payload.data;
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
  getNextPageUserGalleriesAction,
  setNextPageUserGalleriesAction,
  getFilteredGalleriesAction,
  setFilteredGalleriesAction,
} = galleries.actions;
export default galleries.reducer;

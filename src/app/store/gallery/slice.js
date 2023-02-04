import { createSlice } from "@reduxjs/toolkit";

const gallery = createSlice({
  name: "gallery",
  initialState: {
    gallery: {
      id: "",
      title: "",
      description: "",
      image_url: [],
      user_id: "",
      created_at: "",
      updated_at: "",
      user: {},
    },
  },
  reducers: {
    getSingleGalleryAction: () => {},
    setSingleGalleryAction: (state, { payload }) => {
      state.gallery.id = payload.id;
      state.gallery.title = payload.title;
      state.gallery.description = payload.description;
      state.gallery.image_url = payload.image_url;
      state.gallery.user_id = payload.user_id;
      state.gallery.created_at = payload.created_at;
      state.gallery.updated_at = payload.updated_at;
      state.gallery.user = payload.user;
    },
    submitNewgalleryAction: () => {},
    deleteGalleryAction: () => {},
    editGalleryAction: () => {},
  },
});

export const {
  getSingleGalleryAction,
  setSingleGalleryAction,
  submitNewgalleryAction,
  deleteGalleryAction,
  editGalleryAction,
} = gallery.actions;
export default gallery.reducer;

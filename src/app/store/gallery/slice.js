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
      comments: [],
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
      state.gallery.comments = payload.comments;
      state.gallery.user = payload.user;
    },
    submitNewgalleryAction: () => {},
  },
});

export const {
  getSingleGalleryAction,
  setSingleGalleryAction,
  submitNewgalleryAction,
} = gallery.actions;
export default gallery.reducer;

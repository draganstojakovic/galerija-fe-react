import { createSlice } from "@reduxjs/toolkit";

const comment = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {
    showCommentsByGalleryIdAction: () => {},
    setCommentsAction: (state, { payload }) => {
      state.comments = payload;
    },
    submitNewCommentAction: () => {},
    setNewCommentAction: (state, { payload }) => {
      state.comments = [...state.comments, payload];
    },
  },
});

export const {
  submitNewCommentAction,
  setNewCommentAction,
  showCommentsByGalleryIdAction,
  setCommentsAction,
} = comment.actions;
export default comment.reducer;

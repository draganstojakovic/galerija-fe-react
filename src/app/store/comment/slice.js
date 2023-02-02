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
    deleteCommentAction: () => {},
    removeCommentFromStateAction: (state, { payload }) => {
      state.comments = [
        ...state.comments.filter((comment) => comment.id !== payload.id),
      ];
    },
  },
});

export const {
  submitNewCommentAction,
  setNewCommentAction,
  showCommentsByGalleryIdAction,
  setCommentsAction,
  deleteCommentAction,
  removeCommentFromStateAction,
} = comment.actions;
export default comment.reducer;

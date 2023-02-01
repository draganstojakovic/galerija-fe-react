import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: {
      first_name: "",
      last_name: "",
      email: "",
      created_at: "",
      galleries: [],
      comments: [],
    },
  },
  reducers: {
    getSingleUserAction: () => {},
    setSingleUserAction: (state, { payload }) => {
      state.user.first_name = payload.first_name;
      state.user.last_name = payload.last_name;
      state.user.email = payload.email;
      state.user.created_at = payload.created_at;
      state.user.galleries = payload.galleries;
      state.user.comments = payload.comments;
    },
  },
});

export const { getSingleUserAction, setSingleUserAction } = user.actions;
export default user.reducer;
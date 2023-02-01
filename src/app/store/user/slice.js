import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    user: {
      first_name: "",
      last_name: "",
      email: "",
      created_at: "",
      galleries: {},
      comments: {},
    },
    reducers: {
      getSingleUserAction: () => {},
      setSingleUserAction: (state, { payload }) => {
        state.first_name = payload.first_name;
        state.last_name = payload.last_name;
        state.email = payload.email;
        state.created_at = payload.created_at;
        state.galleries = payload.galleries;
        state.comments = payload.comments;
      },
    },
  },
});

export const { getSingleUserAction, setSingleUserAction } = user.actions;
export default user.reducer;

import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    authUser: {},
  },
  reducers: {
    getAuthUserAction: () => {},
    logInAuthUserAction: () => {},
    setAuthUserAction: (state, { payload }) => {
      state.authUser = payload;
    },
  },
});

export const { logInAuthUserAction, setAuthUserAction, getAuthUserAction } =
  auth.actions;
export default auth.reducer;

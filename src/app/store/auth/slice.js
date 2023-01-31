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
    registerNewUserAction: () => {},
  },
});

export const {
  logInAuthUserAction,
  setAuthUserAction,
  getAuthUserAction,
  registerNewUserAction,
} = auth.actions;
export default auth.reducer;

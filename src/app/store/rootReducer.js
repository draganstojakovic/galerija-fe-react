import galleriesSlice from "./galleries/slice";
import authSlice from "./auth/slice";

export const rootReducer = {
  galleries: galleriesSlice,
  auth: authSlice,
};

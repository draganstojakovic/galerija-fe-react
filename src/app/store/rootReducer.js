import galleriesSlice from "./galleries/slice";
import gallerySlice from "./gallery/slice";
import authSlice from "./auth/slice";
import userSlice from "./user/slice";

export const rootReducer = {
  galleries: galleriesSlice,
  gallery: gallerySlice,
  auth: authSlice,
  user: userSlice,
};

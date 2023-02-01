import { all } from "redux-saga/effects";
import rootGalleriesSaga from "./galleries/sagas";
import rootAuthSaga from "./auth/sagas";
import rootGallerySaga from "./gallery/sagas";
import rootUserSaga from "./user/sagas";
import rootCommentSaga from "./comment/sagas";

export default function* rootSaga() {
  yield all([
    rootAuthSaga(),
    rootGalleriesSaga(),
    rootGallerySaga(),
    rootUserSaga(),
    rootCommentSaga(),
  ]);
}

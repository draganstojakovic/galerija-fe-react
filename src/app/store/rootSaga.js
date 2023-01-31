import { all } from "redux-saga/effects";
import rootGalleriesSaga from "./galleries/sagas";
import rootAuthSaga from "./auth/sagas";

export default function* rootSaga() {
  yield all([rootGalleriesSaga(), rootAuthSaga()]);
}

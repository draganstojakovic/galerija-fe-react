import { all } from "redux-saga/effects";
import rootGalleriesSaga from "./galleries/sagas";

export default function* rootSaga() {
  yield all([rootGalleriesSaga()]);
}

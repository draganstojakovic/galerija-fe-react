import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { galleryService } from "../../services/GalleryService";
import { setAllGalleriesAction } from "./slice";

function* getGalleries() {
  try {
    const response = yield call([galleryService, "getAll"]);
    yield put(setAllGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getGalleriesSagaWatcher() {
  yield takeEvery("galleries/getAllGalleriesAction", getGalleries);
}

export default function* rootGalleriesSaga() {
  yield all([fork(getGalleriesSagaWatcher)]);
}

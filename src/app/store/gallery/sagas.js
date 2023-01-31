import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { galleryService } from "../../services/GalleryService";
import { setSingleGalleryAction } from "./slice";

function* getSingleGallery({ payload }) {
  try {
    const response = yield call([galleryService, "show"], payload);
    yield put(setSingleGalleryAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getSingleGallerySagaWatcher() {
  yield takeEvery("gallery/getSingleGalleryAction", getSingleGallery);
}

function* submitNewGallery({ payload }) {
  try {
    yield call([galleryService, "add"], payload.id, payload.data);
  } catch (err) {
    console.error(err);
  }
}

function* submitNewGallerySagaWatcher() {
  yield takeEvery("gallery/submitNewgalleryAction", submitNewGallery);
}

export default function* rootGallerySaga() {
  yield all([
    fork(getSingleGallerySagaWatcher),
    fork(submitNewGallerySagaWatcher),
  ]);
}

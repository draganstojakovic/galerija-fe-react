import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { galleryService } from "../../services/GalleryService";
import { setFirstPageGalleriesAction } from "./slice";
import { setNextPageGalleriesAction } from "./slice";
import { setAuthUserGalleries } from "./slice";

function* getGalleries() {
  try {
    const response = yield call([galleryService, "getFirstPage"]);
    yield put(setFirstPageGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getGalleriesSagaWatcher() {
  yield takeEvery("galleries/getFirstPageGalleriesAction", getGalleries);
}

function* getNextPageOfGalleries({ payload }) {
  try {
    const response = yield call([galleryService, "loadOneMorePage"], payload);
    yield put(setNextPageGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getNextPageOfGalleriesSagaWatcher() {
  yield takeEvery(
    "galleries/getNextPageGalleriesAction",
    getNextPageOfGalleries
  );
}

function* getAuthUserGalleries({ payload }) {
  try {
    const response = yield call(
      [galleryService, "getAuthUserGalleries"],
      payload
    );
    yield put(setAuthUserGalleries(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getAuthUserGalleriesSagaWatcher() {
  yield takeEvery("galleries/getAuthUserGalleries", getAuthUserGalleries);
}

export default function* rootGalleriesSaga() {
  yield all([
    fork(getGalleriesSagaWatcher),
    fork(getNextPageOfGalleriesSagaWatcher),
    fork(getAuthUserGalleriesSagaWatcher),
  ]);
}

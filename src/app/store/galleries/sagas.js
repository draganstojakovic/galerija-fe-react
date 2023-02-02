import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { galleryService } from "../../services/GalleryService";
import { setFirstPageGalleriesAction } from "./slice";
import { setNextPageGalleriesAction } from "./slice";
import { setAuthUserGalleries } from "./slice";
import { setUserGalleriesAction } from "./slice";
import { setNextPageAuthUserGalleriesAction } from "./slice";
import { setNextPageUserGalleriesAction } from "./slice";
import { setFilteredGalleriesAction } from "./slice";
import { setNextPageOfFilteredGalleriesAction } from "./slice";

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

function* getNextPageOfAuthGalleries({ payload }) {
  try {
    const response = yield call(
      [galleryService, "loadOneMoreUserGalleryPage"],
      payload.id,
      payload.page
    );
    yield put(setNextPageAuthUserGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getNextPageOfAuthGalleriesSagaWatcher() {
  yield takeEvery(
    "galleries/getNextPageAuthUserGalleriesAction",
    getNextPageOfAuthGalleries
  );
}

function* getUserGalleries({ payload }) {
  try {
    const response = yield call([galleryService, "getUserGalleries"], payload);
    yield put(setUserGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getUserGalleriesSagaWatcher() {
  yield takeEvery("galleries/getUserGalleriesAction", getUserGalleries);
}

function* getNextPageOfUserGalleries({ payload }) {
  try {
    const response = yield call(
      [galleryService, "loadOneMoreUserGalleryPage"],
      payload.id,
      payload.page
    );
    yield put(setNextPageUserGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getNextPageOfUserGalleriesSagaWatcher() {
  yield takeEvery(
    "galleries/getNextPageUserGalleriesAction",
    getNextPageOfUserGalleries
  );
}

function* getFilteredGalleries({ payload }) {
  try {
    const response = yield call([galleryService, "fetchSearchedTerm"], payload);
    yield put(setFilteredGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getFilteredGalleriesSagaWatcher() {
  yield takeEvery("galleries/getFilteredGalleriesAction", getFilteredGalleries);
}

function* getNextPageOfFilteredGalleries({ payload }) {
  try {
    const response = yield call(
      [galleryService, "loadOneMorePageOfSearchedTerm"],
      payload.term,
      payload.page
    );
    yield put(setNextPageOfFilteredGalleriesAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getNextPageOfFilteredGalleriesSagaWatcher() {
  yield takeEvery(
    "galleries/getNextPageOfFilteredGalleriesAction",
    getNextPageOfFilteredGalleries
  );
}

export default function* rootGalleriesSaga() {
  yield all([
    fork(getGalleriesSagaWatcher),
    fork(getNextPageOfGalleriesSagaWatcher),
    fork(getAuthUserGalleriesSagaWatcher),
    fork(getUserGalleriesSagaWatcher),
    fork(getNextPageOfAuthGalleriesSagaWatcher),
    fork(getNextPageOfUserGalleriesSagaWatcher),
    fork(getFilteredGalleriesSagaWatcher),
    fork(getNextPageOfFilteredGalleriesSagaWatcher),
  ]);
}

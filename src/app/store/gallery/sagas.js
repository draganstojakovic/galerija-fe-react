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
    yield call([galleryService, "add"], payload);
  } catch (err) {
    console.error(err);
  }
}

function* submitNewGallerySagaWatcher() {
  yield takeEvery("gallery/submitNewgalleryAction", submitNewGallery);
}

function* deleteGallery({ payload }) {
  try {
    yield call([galleryService, "delete"], payload);
  } catch (err) {
    console.error(err);
  }
}

function* deleteGallerySagaWatcher() {
  yield takeEvery("gallery/deleteGalleryAction", deleteGallery);
}

function* editGallery({ payload }) {
  try {
    yield call([galleryService, "update"], payload.id, payload.data);
  } catch (err) {
    console.error(err);
  }
}

function* editGallerySagaWatcher() {
  yield takeEvery("gallery/editGalleryAction", editGallery);
}

export default function* rootGallerySaga() {
  yield all([
    fork(getSingleGallerySagaWatcher),
    fork(submitNewGallerySagaWatcher),
    fork(deleteGallerySagaWatcher),
    fork(editGallerySagaWatcher),
  ]);
}

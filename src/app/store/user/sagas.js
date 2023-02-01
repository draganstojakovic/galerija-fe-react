import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { setSingleUserAction } from "./slice";
import { userService } from "../../services/UserService";
import { setOnlyUserAction } from "./slice";

function* getSingleUser({ payload }) {
  try {
    const response = yield call([userService, "show"], payload);
    yield put(setSingleUserAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getSingleUserSagaWatcher() {
  yield takeEvery("user/getSingleUserAction", getSingleUser);
}

function* getOnlyUser({ payload }) {
  try {
    const response = yield call([userService, "showOnlyUser"], payload);
    yield put(setOnlyUserAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getOnlyUserSagaWatcher() {
  yield takeEvery("user/getOnlyUserAction", getOnlyUser);
}

export default function* rootUserSaga() {
  yield all([fork(getSingleUserSagaWatcher), fork(getOnlyUserSagaWatcher)]);
}

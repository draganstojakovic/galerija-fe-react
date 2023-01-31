import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { authService } from "../../services/AuthService";
import { setAuthUserAction } from "./slice";

function* logInUser({ payload }) {
  try {
    const response = yield call([authService, "login"], payload);
    yield put(setAuthUserAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* logInUserSagaWatcher() {
  yield takeEvery("auth/logInAuthUserAction", logInUser);
}

function* registerNewUser({ payload }) {
  try {
    yield call([authService, "register"], payload);
  } catch (err) {
    console.error(err);
  }
}

function* registerNewUserSagaWatcher() {
  yield takeEvery("auth/registerNewUserAction", registerNewUser);
}

function* getAuthUser() {
  try {
    const response = yield call([authService, "me"]);
    yield put(setAuthUserAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getAuthUserSagaWatcher() {
  yield takeEvery("auth/getAuthUserAction", getAuthUser);
}

export default function* rootAuthSaga() {
  yield all([
    fork(logInUserSagaWatcher),
    fork(getAuthUserSagaWatcher),
    fork(registerNewUserSagaWatcher),
  ]);
}

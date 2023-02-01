import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { setSingleUserAction } from "./slice";
import { userService } from "../../services/UserService";

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

export default function* rootUserSaga() {
  yield all([fork(getSingleUserSagaWatcher)]);
}

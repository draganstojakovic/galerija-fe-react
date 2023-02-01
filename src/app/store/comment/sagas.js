import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { commentService } from "../../services/CommentService";
import { setNewCommentAction } from "./slice";
import { setCommentsAction } from "./slice";

function* submitNewComment({ payload }) {
  try {
    const response = yield call(
      [commentService, "add"],
      payload.id,
      payload.data
    );
    yield put(setNewCommentAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* submitNewCommentSagaWatcher() {
  yield takeEvery("comment/submitNewCommentAction", submitNewComment);
}

function* showComments({ payload }) {
  try {
    const response = yield call(
      [commentService, "showCommentsByGalleyId"],
      payload
    );
    yield put(setCommentsAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* showCommentsSagaWatcher() {
  yield takeEvery("comment/showCommentsByGalleryIdAction", showComments);
}

export default function* rootCommentSaga() {
  yield all([fork(submitNewCommentSagaWatcher), fork(showCommentsSagaWatcher)]);
}

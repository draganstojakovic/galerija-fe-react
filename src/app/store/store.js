import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

import {configureStore} from '@reduxjs/toolkit';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {all, call} from 'redux-saga/effects';
import rootReducer from './index';
import CurrentWeahterSaga from './currentWeather/CurrentWeahterSaga';

const sagaMiddleware = createSagaMiddleware();

// 개별 saga
function* rootSaga() {
  yield all([call(CurrentWeahterSaga)]);
}

function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      sagaMiddleware,
      ...getDefaultMiddleware({serializableCheck: false}),
    ],
  });
  sagaMiddleware.run(rootSaga);

  return store;
}

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;

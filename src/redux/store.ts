import {
  configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
// import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import reducer from './rootReducer';

// const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
// const router = routerMiddleware(history);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
    .concat(sagaMiddleware),
  // .concat(router),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

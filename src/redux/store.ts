import { combineReducers, legacy_createStore as createStore } from 'redux';

import { appReducer } from './app-reducer';

const reducer = combineReducers({
  app: appReducer,
});

/* Types */
// export type ReduxState = ReturnType<typeof reducer>;

// export type ReducersType = typeof reducer;
export type AppRootStateType = ReturnType<typeof reducer>;

export const store = createStore(reducer);

// @ts-ignore
window.store = store;

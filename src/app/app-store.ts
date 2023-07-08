import { rootReducer } from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';

export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

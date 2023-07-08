import { combineReducers } from '@reduxjs/toolkit';
import { langSlice } from '@features/change-language/model/slice';

export const rootReducer = combineReducers({
  [langSlice.name]: langSlice.reducer,
});

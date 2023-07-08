import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Lang } from '../types';

type LangSliceState = {
  currentLang: Lang;
};

const initialState: LangSliceState = {
  currentLang: 'ru',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<Lang>) => {
      state.currentLang = action.payload;
    },
  },
});

export const selectCurrentLang = (state: RootState) => state.lang.currentLang;

export const { changeLang } = langSlice.actions;

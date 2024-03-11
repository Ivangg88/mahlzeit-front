// intlSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  I8nLanguage,
  initialLanguage,
  initialTranslations,
  Translations,
} from "../../utils/i8n/i8n";

type I8nState = {
  language: I8nLanguage;
  translations: Translations;
};

const initialState: I8nState = {
  language: initialLanguage,
  translations: initialTranslations,
};

const i8nlSlice = createSlice({
  name: "i8nSlice",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<I8nLanguage>) => {
      state.language = action.payload;
    },

    loadTranslation: (state, action: PayloadAction<Translations>) => {
      state.translations = action.payload;
    },
  },
});

export const {
  setLanguage: setLanguageActionCreator,
  loadTranslation: loadTranslationActionCreator,
} = i8nlSlice.actions;
export const i8nReducer = i8nlSlice.reducer;

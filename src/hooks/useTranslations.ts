import { useCallback } from "react";
import {
  I8nLanguage,
  Translations,
  loadTranslationsAsync,
} from "../utils/i8n/i8n";
import { useAppDispatch } from "../app/hooks";
import {
  loadTranslationActionCreator,
  setLanguageActionCreator,
} from "../store/i8n/i8nSlice";

const useTranslations = () => {
  const dispatch = useAppDispatch();

  const loadTranslation = useCallback(
    async (currentLanguage: I8nLanguage) => {
      const newTranslations: Translations = await loadTranslationsAsync(
        currentLanguage
      );

      dispatch(loadTranslationActionCreator(newTranslations));
    },
    [dispatch]
  );

  const changeLanguage = useCallback(
    (browserLanguage: string) => {
      const newLanguage = browserLanguage.split("-")[0] as I8nLanguage;
      dispatch(setLanguageActionCreator(newLanguage));
    },
    [dispatch]
  );

  return { loadTranslation, changeLanguage };
};

export default useTranslations;

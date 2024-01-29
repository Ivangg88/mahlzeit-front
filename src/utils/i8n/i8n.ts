import { dkFlag, enFlag, esFlag } from "../../assets/images/images";
import defaultLanguage from "./initialTranslation.json";

export type I8nLanguage = "es" | "en" | "dk";

export const availableLanguages = [
  { en: enFlag },
  { es: esFlag },
  { dk: dkFlag },
];

export interface Translations {
  header: {
    home: string;
    myRecipes: string;
    newRecipe: string;
    login: string;
    logout: string;
  };
  card: {
    ingredients: string;
    process: string;
    delete: string;
  };
}

export const initialTranslations: Translations = { ...defaultLanguage };

export const initialLanguage: I8nLanguage =
  (navigator.language.split("-")[0] as I8nLanguage) ?? "en";

const TRANSLATION_BASE_PATH = "/translations/";

export const loadTranslationsAsync = async (
  language: I8nLanguage
): Promise<Translations> => {
  const translationPath = `${TRANSLATION_BASE_PATH}${language}.json`;

  try {
    const response = await fetch(translationPath);

    if (!response.ok) {
      throw new Error();
    }

    const translations = await response.json();
    return translations;
  } catch (error) {
    return initialTranslations;
  }
};

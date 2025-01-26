import { dkFlag, enFlag, esFlag } from "../../assets/images/images";
import defaultLanguage from "./en.json";

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
  userForms: {
    loginTitle: string;
    nameInput: string;
    namePlaceholder: string;
    passwordInput: string;
    passwordConfirmInput: string;
    passwordPlaceholder: string;
    notRegister: string;
    loginLink: string;
    emailInput: string;
    emailPlaceholder: string;
    emailConfirmInput: string;
    registerTitle: string;
    yetRegister: string;
    registerLink: string;
    registerbutton: string;
    loginButton: string;
  };
  validateErrors: {
    name: {
      mustName: string;
      minName: string;
      maxName: string;
    };
    password: {
      mustPassword: string;
      minPassword: string;
      confirmPassword: string;
    };
    email: {
      mustEmail: string;
      maxEmail: string;
      checkEmail: string;
      confirmEmail: string;
    };
  };
  pagination: { from: string; results: string };
  recipeForm: {
    createRecipe: string;
    name: string;
    namePlaceholder: string;
    difficulty: string;
    difficultyPlaceholder: string;
    persons: string;
    personsPlaceholder: string;
    ingredients: string;
    ingredientsPlaceholder: string;
    quantity: string;
    quantityPlaceholder: string;
    nextButton: string;
    backButton: string;
    process: string;
    step: string;
    stepPlaceholder: string;
    addImage: string;
    addImageLabel: string;
    createRecipeButton: string;
  };
  emptylist: string;
  notLoggedPage: {
    notAuthTitle: string;
    notAuthMessage: string;
    loginLink: string;
    registerLink: string;
  };
  loading: string;
  toastMessages: {
    user: string;
    registerSuccess: string;
    registerError: string;
    loginSuccess: string;
    loginError: string;
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

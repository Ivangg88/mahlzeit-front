import { Ingredient } from "../types/interfaces";

const ingredients: Ingredient[] = [{ name: "", quantity: "", unit: "" }];

export const preloadStore = {
  mockRecipte: {
    name: "Mock recipte",
    dificulty: "Fácil",
    autor: "",
    id: "",
    image: "",
    ingredients: ingredients,
    persons: 0,
    process: "",
    backupImage: "",
  },
  mockProtoRecipte: {
    name: "Mock recipte",
    dificulty: "Fácil",
    autor: "",
    id: "",
    image: "",
    ingredients: ingredients,
    persons: 0,
    process: "",
    backupImage: "",
  },
};

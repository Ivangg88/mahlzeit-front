import { Ingredient, Process } from "../types/interfaces";

const ingredients: Ingredient[] = [{ name: "", quantity: "", unit: "" }];
const process: Process[] = [{ process: "", picture: "", backupPicture: "" }];

export const preloadStore = {
  mockRecipte: {
    name: "Mock recipte",
    dificulty: "Fácil",
    autor: "",
    id: "",
    persons: 0,
    ingredients: ingredients,
    process: process,
    image: "",
    backupImage: "",
    authorId: "",
  },
  mockProtoRecipte: {
    name: "Mock recipte",
    dificulty: "Fácil",
    autor: "",
    persons: 0,
    ingredients: ingredients,
    process: process,
    image: "",
    backupImage: "",
    authorId: "",
  },
};

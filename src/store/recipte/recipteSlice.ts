import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipte } from "../../types/interfaces";
const initalRecipe: Recipte = {
  autor: "",
  backupImage: "",
  dificulty: "",
  id: "",
  image: "",
  ingredients: [{ name: "", quantity: "", unit: "" }],
  name: "",
  persons: 0,
  process: [{ backupPicture: "", picture: "", process: "" }],
};

const reciptesInitialState: { recipesList: Recipte[]; recipeDetail: Recipte } =
  { recipesList: [], recipeDetail: initalRecipe };

const reciptesSlice = createSlice({
  name: "recipte",
  initialState: reciptesInitialState,
  reducers: {
    loadReciptes: (previousState, action: PayloadAction<Recipte[]>) => ({
      ...previousState,
      recipesList: action.payload,
    }),

    loadRecipeDetail: (previousState, action: PayloadAction<Recipte>) => ({
      ...previousState,
      recipeDetail: action.payload,
    }),

    loadRecipte: (previousState, action: PayloadAction<Recipte>) => ({
      ...previousState,
      recipesList: [...previousState.recipesList, action.payload],
    }),
    deleteRecipte: (previousState, action: PayloadAction<string>) => ({
      ...previousState,
      recipesList: previousState.recipesList.filter(
        (recipte) => recipte.id !== action.payload
      ),
    }),
  },
});

export const reciptesReducer = reciptesSlice.reducer;

export const {
  loadReciptes: loadReciptesActionCreator,
  loadRecipte: loadRecipteActionCreator,
  loadRecipeDetail: loadRecipteDetailActionCreator,
  deleteRecipte: deleteRecipteActionCreator,
} = reciptesSlice.actions;

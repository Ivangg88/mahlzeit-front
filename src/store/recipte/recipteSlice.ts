import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipte } from "../../types/interfaces";

const reciptesInitialState: Recipte[] = [];

const reciptesSlice = createSlice({
  name: "recipte",
  initialState: reciptesInitialState,
  reducers: {
    loadReciptes: (previousState, action: PayloadAction<Recipte[]>) =>
      action.payload,

    loadRecipte: (previousState, action: PayloadAction<Recipte>) => [
      ...previousState,
      action.payload,
    ],

    deleteRecipte: (previousState, action: PayloadAction<string>) => [
      ...previousState.filter((recipte) => recipte.id !== action.payload),
    ],
  },
});

export const reciptesReducer = reciptesSlice.reducer;

export const {
  loadReciptes: loadReciptesActionCreator,
  loadRecipte: loadRecipteActionCreator,
  deleteRecipte: deleteRecipteActionCreator,
} = reciptesSlice.actions;

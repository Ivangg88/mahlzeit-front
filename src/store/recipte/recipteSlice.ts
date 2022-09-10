import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipte } from "../../types/interfaces";

const reciptesInitialState: Recipte[] = [];

const reciptesSlice = createSlice({
  name: "item",
  initialState: reciptesInitialState,
  reducers: {
    loadReciptes: (previousState, action: PayloadAction<Recipte[]>) =>
      action.payload,
  },
});

export const itemReducer = reciptesSlice.reducer;

export const { loadReciptes: loadReciptesActionCreator } =
  reciptesSlice.actions;

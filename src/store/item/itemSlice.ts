import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types/interfaces";

const itemInitialState: Item = {
  id: "",
  name: "",
  dificulty: "Medio",
  autor: "",
  image: "",
  persons: 0,
  ingredients: [],
  process: { steps: [] },
};

const itemSlice = createSlice({
  name: "item",
  initialState: [itemInitialState],
  reducers: {
    loadItems: (previousState, action: PayloadAction<Item[]>) => action.payload,
  },
});

export const itemReducer = itemSlice.reducer;

export const { loadItems: loadItemsActionCreator } = itemSlice.actions;

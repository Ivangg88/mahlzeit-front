import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogged } from "../../types/interfaces";

const userInitialState: UserLogged = {
  isLogged: false,
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousState, action: PayloadAction<boolean>) => ({
      ...previousState,
      isLogged: action.payload,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;

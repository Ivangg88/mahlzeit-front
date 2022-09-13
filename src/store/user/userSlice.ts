import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoged } from "../../types/interfaces";

const userInitialState: UserLoged = {
  userName: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousState, action: PayloadAction<UserLoged>) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (previousState) => userInitialState,
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

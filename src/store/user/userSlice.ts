import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoged } from "../../types/interfaces";

const userInitialState: UserLoged = {
  userName: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousState, action: PayloadAction<UserLoged>) =>
      action.payload,
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;

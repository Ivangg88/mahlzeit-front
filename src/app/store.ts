import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "../store/user/userSlice";
import { itemReducer } from "../store/item/itemSlice";

export const store = configureStore({
  reducer: {
    userReducer,
    itemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

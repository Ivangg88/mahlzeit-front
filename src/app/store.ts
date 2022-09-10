import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "../store/user/userSlice";
import { reciptesReducer } from "../store/recipte/recipteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    reciptes: reciptesReducer,
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

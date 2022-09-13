import { userReducer } from "../store/user/userSlice";
import { reciptesReducer } from "../store/recipte/recipteSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { uiDataReducer } from "../store/ui/uiSlice";

const rootReducer = combineReducers({
  user: userReducer,
  reciptes: reciptesReducer,
  ui: uiDataReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

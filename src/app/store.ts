import { userReducer } from "../store/user/userSlice";
import { reciptesReducer } from "../store/recipte/recipteSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { uiDataReducer } from "../store/ui/uiSlice";
import { i8nReducer } from "../store/i8n/i8nSlice";

const rootReducer = combineReducers({
  user: userReducer,
  reciptes: reciptesReducer,
  ui: uiDataReducer,
  i8n: i8nReducer,
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

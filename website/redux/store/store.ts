import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import darkModeReducer from "../slices/darkMode";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;

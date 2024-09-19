import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
};

export const darkMode = createSlice({
  name: "Dark Mode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode =
        action.payload !== undefined ? action.payload : !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = darkMode.actions;

export default darkMode.reducer;

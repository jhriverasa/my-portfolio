import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface LangStateType {
  selectedLang: "es" | "en";
}

// Initial state
const initialState: LangStateType = {
  selectedLang: "es",
};

// Actual Slice
export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    // Action to set the language selected
    setSelectedLang(state, action) {
      state.selectedLang = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.lang,
      };
    },
  },
});

export const { setSelectedLang } = langSlice.actions;

export const selectedLangState = (state: AppState) => state.lang.selectedLang;

export default langSlice.reducer;
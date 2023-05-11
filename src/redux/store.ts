import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./slices/languageSlice";

export const store = configureStore({ reducer: { [languageSlice.name]: languageSlice.reducer } })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {lang: AppLanguage}
export type AppDispatch = typeof store.dispatch
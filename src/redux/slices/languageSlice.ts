import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface AppLanguage {
    selectedLanguage: "es" | "en"
}

const initialState: AppLanguage = { selectedLanguage: "es" }

export const languageSlice = createSlice({
    name: 'lang',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeToEnglish: (state) => {
            state.selectedLanguage = 'en'
        },
        changeToSpanish: (state) => {
            state.selectedLanguage = 'es'
        }

    }
})

export const { changeToEnglish, changeToSpanish } = languageSlice.actions

export const selectedLanguageState = (state: RootState) => state.lang.selectedLanguage
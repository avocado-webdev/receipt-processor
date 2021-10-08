/* tesseractSlice.ts */

import { createSlice } from '@reduxjs/toolkit';

/* Interface(s) */
export interface TesseractPaneState {
    tesseractPane: TesseractPaneState;
    results: any;
};

const initialState: TesseractPaneState = {
    results: {}
} as TesseractPaneState;

export const tesseractSlice = createSlice({
    name: 'tesseractPane',
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        }
    }
});

/* Action(s) */
export const { setResults } = tesseractSlice.actions;

/* Reducers(s) */
export default tesseractSlice.reducer;
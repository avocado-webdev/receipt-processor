/* resultsSlice.ts */
import { createSlice } from '@reduxjs/toolkit';

/* Interface(s) */
export interface ResultsPaneState {
    resultsPane: ResultsPaneState;
    results: any;
}

const initialState: ResultsPaneState = {
    results: {}
} as ResultsPaneState;

export const resultsSlice = createSlice({
    name: 'resultsPane',
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        }
    }
});

/* Action(s) */
export const { setResults } = resultsSlice.actions;

/* Reducer(s) */
export default resultsSlice.reducer;
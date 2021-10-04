/* splitPaneSlice.ts */
import { createSlice } from '@reduxjs/toolkit';

/* Interface(s) */
export interface SplitPaneState {
    splitPane: SplitPaneState;
    value: boolean;
}

const initialState: SplitPaneState = {
    value: true
} as SplitPaneState;

export const splitPaneSlice = createSlice({
    name: 'splitPane',
    initialState,
    reducers: {
        showSplitPane: (state) => {
            state.value = true;
        },
        hideSplitPane: (state) => {
            state.value = false;
        }
    }
});

/* Action(s) */
export const { showSplitPane, hideSplitPane } = splitPaneSlice.actions;

/* Reducer(s) */
export default splitPaneSlice.reducer;
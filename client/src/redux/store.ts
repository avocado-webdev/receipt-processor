/* store.ts */
import { configureStore } from '@reduxjs/toolkit';

/* Reducers(s) */
import splitPaneSliceReducer from 'src/redux/features/splitPaneSlice'

export const store = configureStore({
    reducer: {
        splitPane: splitPaneSliceReducer
    }
});

export type SplitPaneState = ReturnType<typeof splitPaneSliceReducer>;
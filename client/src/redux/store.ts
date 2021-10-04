/* store.ts */
import { configureStore } from '@reduxjs/toolkit';

/* Reducers(s) */
import splitPaneSliceReducer from 'src/redux/features/splitPaneSlice';
import imageSliceReducer from 'src/redux/features/imageSlice';

export const store = configureStore({
    reducer: {
        splitPane: splitPaneSliceReducer,
        imagePane: imageSliceReducer
    }
});

export type SplitPaneState = ReturnType<typeof splitPaneSliceReducer>;
export type ImagePaneState = ReturnType<typeof imageSliceReducer>;
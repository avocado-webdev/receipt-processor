/* store.ts */
import { configureStore } from '@reduxjs/toolkit';

/* Reducers(s) */
import splitPaneSliceReducer from 'src/redux/features/splitPaneSlice';
import imageSliceReducer from 'src/redux/features/imageSlice';
import tesseractSliceReducer from 'src/redux/features/tesseractSlice';
import resultsSliceReducer from 'src/redux/features/resultsSlice';

export const store = configureStore({
    reducer: {
        splitPane: splitPaneSliceReducer,
        imagePane: imageSliceReducer,
        tesseractPane: tesseractSliceReducer,
        resultsPane: resultsSliceReducer
    }
});

export type SplitPaneState = ReturnType<typeof splitPaneSliceReducer>;
export type ImagePaneState = ReturnType<typeof imageSliceReducer>;
export type TesseractPaneState = ReturnType<typeof tesseractSliceReducer>;
export type ResultsPaneState = ReturnType<typeof resultsSliceReducer>;
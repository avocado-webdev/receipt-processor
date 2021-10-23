/* store.ts */
import { 
    configureStore,
    combineReducers
} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist'
  
import storage from 'redux-persist/es/storage';

/* Reducers(s) */
import splitPaneSliceReducer from 'src/redux/features/splitPaneSlice';
import imageSliceReducer from 'src/redux/features/imageSlice';
import tesseractSliceReducer from 'src/redux/features/tesseractSlice';
import resultsSliceReducer from 'src/redux/features/resultsSlice';

const persistConfig = {
    key: 'images',
    storage
};

const persistedReducer = persistReducer(persistConfig, imageSliceReducer);
 
const store = configureStore({
    reducer: {
        splitPane: splitPaneSliceReducer,
        imagePane: persistedReducer,
        tesseractPane: tesseractSliceReducer,
        resultsPane: resultsSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH, 
                    REHYDRATE, 
                    PAUSE, 
                    PERSIST, 
                    PURGE, 
                    REGISTER
                  ]
            }
        })
});

const persistor = persistStore(store);

// export { store, persistor }

export { store, persistor }

export type SplitPaneState = ReturnType<typeof splitPaneSliceReducer>;
export type ImagePaneState = ReturnType<typeof imageSliceReducer>;
export type TesseractPaneState = ReturnType<typeof tesseractSliceReducer>;
export type ResultsPaneState = ReturnType<typeof resultsSliceReducer>;
/* imageSlice.ts */
import { createSlice } from '@reduxjs/toolkit';

/* Interface(s) */
export interface ImagePaneState {
    imagePane: ImagePaneState;
    image: string;
}

const initialState: ImagePaneState = {
    image: '',
} as ImagePaneState;

export const imageSlice = createSlice({
    name: 'imagePane',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        clearImage: (state) => {
            state.image = initialState.image;
        }
    }
});

/* Action(s) */
export const { setImage, clearImage } = imageSlice.actions;

/* Reducer(s) */
export default imageSlice.reducer;
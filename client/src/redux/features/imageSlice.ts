/* imageSlice.ts */
import { createSlice } from '@reduxjs/toolkit';

/* Interface(s) */
export interface ImagePaneState {
    imagePane: ImagePaneState;
    value: string;
}

const initialState: ImagePaneState = {
    value: ''
} as ImagePaneState;

export const imageSlice = createSlice({
    name: 'imagePane',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.value = action.payload;
        }
    }
});

/* Action(s) */
export const { setImage } = imageSlice.actions;

/* Reducer(s) */
export default imageSlice.reducer;
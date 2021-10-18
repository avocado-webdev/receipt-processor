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
        setEditableImage: (state, action) => {

        }
    }
});

/* Action(s) */
export const { setImage, setEditableImage } = imageSlice.actions;

/* Reducer(s) */
export default imageSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';
import React from 'react';

const initialState: {
  isLoading: boolean;
} = {
  isLoading: false,
};
export const ShowPictureSlice = createSlice({
  name: 'showPicture',
  initialState,
  reducers: {
    setToggleState: state => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {setToggleState} = ShowPictureSlice.actions;
export const selectCurrentNote = (state: RootState) => state.toggle.isLoading;
export default ShowPictureSlice.reducer;

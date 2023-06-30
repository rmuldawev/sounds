import {createReducer, createSlice} from '@reduxjs/toolkit';
import React from 'react';

const initialState: {
  isLoading: boolean;
  PinkTheme: boolean;
} = {
  isLoading: false,
  PinkTheme: false,
};
export const ShowPictureSlice = createSlice({
  name: 'showPicture',
  initialState,
  reducers: {
    setToggleState: state => {
      state.isLoading = !state.isLoading;
    },
    setBackgroundColor: state => {
      state.PinkTheme = !state.PinkTheme;
    },
  },
});

export const {setToggleState, setBackgroundColor} = ShowPictureSlice.actions;
export const selectCurrentNote = (state: RootState) => state.toggle.isLoading;
export const selectBackgroundThemeColor = (state: RootState) =>
  state.toggle.PinkTheme;
export default ShowPictureSlice.reducer;

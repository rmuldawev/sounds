import {createReducer, createSlice} from '@reduxjs/toolkit';
import React from 'react';
import {RepeatMode} from 'react-native-track-player';
import {setRepeatMode} from 'react-native-track-player/lib/trackPlayer';

const initialState: {
  isLoading: boolean;
  // isRepeated: boolean;
} = {
  isLoading: false,
  // isRepeated: false,
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

// export const repeatModeSlice = createSlice({
//   name: 'repeatMode',
//   initialState,
//   reducers: {
//     toggleRepeat: state => {
//       state.isRepeated = !state.isRepeated;
//     },
//     setRepeat: (state, action) => action.payload,
//   },
// });

export const {setToggleState} = ShowPictureSlice.actions;
// export const {toggleRepeat, setRepeat} = repeatModeSlice.actions;
// export const repeatState = (state: RootState) => state.repeatMode.isRepeated;
export const selectCurrentNote = (state: RootState) => state.toggle.isLoading;
export default ShowPictureSlice.reducer;

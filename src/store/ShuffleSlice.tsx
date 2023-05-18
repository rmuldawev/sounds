import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  shuffleMode: boolean;
} = {
  shuffleMode: false,
};
export const shuffleSlice = createSlice({
  name: 'shuffle',
  initialState,
  reducers: {
    setShuffleMode: state => {
      state.shuffleMode = !state.shuffleMode;
    },
  },
});

export const {setShuffleMode} = shuffleSlice.actions;
export const ShuffleModeState = (state: RootState) =>
  state.shuffleMode.shuffleMode;
export default shuffleSlice.reducer;

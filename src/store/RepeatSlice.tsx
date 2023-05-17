import {createSlice} from '@reduxjs/toolkit';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';

const trackPlayerSlice = createSlice({
  name: 'trackPlayer',
  initialState: {
    repeatMode: false,
  },
  reducers: {
    setRepeatMode: state => {
      state.repeatMode = !state.repeatMode;
      // TrackPlayer.setRepeatMode(RepeatMode.Track);
    },
  },
});

export const {setRepeatMode} = trackPlayerSlice.actions;
export const CurrentRepeatModeState = (state: RootState) =>
  state.repeatMode.repeatMode;
export default trackPlayerSlice.reducer;

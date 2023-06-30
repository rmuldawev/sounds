import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
import TrackPlayer, {
  Event,
  RepeatMode,
  useTrackPlayerEvents,
} from 'react-native-track-player';
//assets
import ChevronLeft from '../../assets/icons/ChevronLeft';
//style
import styles from './styles';

//assets
import PlayIcon from '../../assets/icons/playIcon';
import SkipBack from '../../assets/icons/SkipBack';
import Skip from '../../assets/icons/Skip';
import Stop from '../../assets/icons/Stop';
import ToggleImage from '../../assets/icons/ToggleImage';
import RepeatOff from '../../assets/icons/RepeatOff';
import RepeatOn from '../../assets/icons/RepeatOn';
import ShuffleOff from '../../assets/icons/ShuffleOff';
import ShuffleOn from '../../assets/icons/ShuffleOn';
import data from '../CatalogScreen/data';
import {useAppDispatch, useAppSelector} from '../../store';
import {
  selectBackgroundThemeColor,
  selectCurrentNote,
  setToggleState,
} from '../../store/ShowSlice';
import {setRepeatMode} from '../../store/RepeatSlice';
import {setupPlayer} from 'react-native-track-player/lib/trackPlayer';
import {setShuffleMode} from '../../store/ShuffleSlice';
import ToggleImageActive from '../../assets/icons/toggleImageActive';

const events = [Event.PlaybackState, Event.PlaybackError];

const MusicPlayer = ({route}: any) => {
  const pinkTheme = useAppSelector(selectBackgroundThemeColor);
  const [isPlaying, setIsPlaying] = useState(false);
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const [currentID, setCurrentID] = useState(route.params.currentID);
  const [items, setItems] = useState(route.params.data);
  const shuffleData = [...data[0], ...data[1], ...data[2]];
  const isLoading = useAppSelector(selectCurrentNote);
  const dispatch = useAppDispatch();
  const repeatMode = useAppSelector(state => state.repeatMode.repeatMode);
  const shuffleMode = useAppSelector(state => state.shuffleMode.shuffleMode);
  const [playerState, setPlayerState] = useState<string>('stopped');

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      if (
        event.state === 'stopped' ||
        event.state === 'playing' ||
        event.state === 'ended'
      ) {
        setPlayerState(event.state);
      }
    }
  });
  console.log('playerState', playerState);
  useEffect(() => {
    function setup() {
      TrackPlayer.setupPlayer();
    }
    setup();
  }, []);

  const playSound = () => {
    TrackPlayer.add(items[currentID]);
    TrackPlayer.play();
    setIsPlaying(prev => !prev);
  };

  const stopTrack = () => {
    TrackPlayer.stop();
    setIsPlaying(prev => !prev);
  };

  const removeTrack = () => {
    TrackPlayer.reset();
    navigation.goBack();
  };

  const skipTrack = () => {
    if (currentID === items.length - 1) {
      null;
    } else {
      const change = currentID + 1;
      TrackPlayer.reset();
      TrackPlayer.skipToNext();
      setIsPlaying(false);
      setCurrentID(change);
      TrackPlayer.play();
    }
  };

  const prev = () => {
    if (currentID > 0) {
      const change = currentID - 1;
      TrackPlayer.reset();
      TrackPlayer.skipToPrevious();
      setIsPlaying(false);
      setCurrentID(change);
    } else {
      null;
    }
  };

  const repeat = () => {
    TrackPlayer.setRepeatMode(RepeatMode.Track);
    dispatch(setRepeatMode());
  };

  const offRepeat = () => {
    TrackPlayer.setRepeatMode(RepeatMode.Off);
    dispatch(setRepeatMode());
  };

  let shuffled = shuffleData
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);

  const onShuffle = () => {
    setItems(shuffled);
    dispatch(setShuffleMode());
    // setShuffleItems(true);
  };

  const offShuffle = () => {
    setItems(route.params.data);
    dispatch(setShuffleMode());

    // setShuffleItems(false);
  };

  return (
    <View
      style={
        pinkTheme
          ? [paddingStyle, styles.mainTheme2]
          : [paddingStyle, styles.main]
      }>
      <Pressable style={styles.title} onPress={removeTrack}>
        <ChevronLeft />
        <Text style={styles.textTitle}>Назад</Text>
      </Pressable>
      <View style={styles.container}>
        {!isLoading ? (
          <Pressable
            onPress={() => dispatch(setToggleState())}
            style={styles.albumImage}>
            <Image
              style={styles.image}
              source={require('../../assets/images/tapIcon.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.albumImage}>
            <View>
              <Image style={styles.image} source={items[currentID].image} />
              <Text style={styles.name}>{items[currentID].name}</Text>
            </View>
          </View>
        )}
        <View style={styles.buttons}>
          <View style={styles.column1}>
            <Pressable onPress={prev} style={styles.prevTrack}>
              <SkipBack />
            </Pressable>
            <Pressable onPress={() => dispatch(setToggleState())}>
              {!isLoading ? <ToggleImage /> : <ToggleImageActive />}
            </Pressable>
          </View>
          <View style={styles.column2}>
            <Pressable
              style={styles.play}
              onPress={isPlaying ? stopTrack : playSound}>
              {playerState == 'stopped' || playerState == 'ended' ? (
                <PlayIcon />
              ) : (
                playerState == 'playing' && <Stop />
              )}
            </Pressable>
            <Pressable onPress={repeatMode ? offRepeat : repeat}>
              {repeatMode ? <RepeatOn /> : <RepeatOff />}
            </Pressable>
          </View>
          <View style={styles.column3}>
            <Pressable onPress={skipTrack}>
              <Skip />
            </Pressable>
            <Pressable onPress={shuffleMode ? offShuffle : onShuffle}>
              {shuffleMode ? <ShuffleOn /> : <ShuffleOff />}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;

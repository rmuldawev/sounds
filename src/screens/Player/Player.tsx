import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
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
import {selectCurrentNote, setToggleState} from '../../store/ShowSlice';

const MusicPlayer = ({route}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const [currentID, setCurrentID] = useState(route.params.currentID);
  const [repeated, setRepeated] = useState<boolean>(false);
  const [items, setItems] = useState(route.params.data);
  const [shuffleItems, setShuffleItems] = useState<boolean>(false);
  const shuffleData = [...data[0], ...data[1], ...data[2]];

  const isLoading = useAppSelector(selectCurrentNote);
  console.log('isLoading', isLoading);
  const dispatch = useAppDispatch();

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
    navigation.goBack();
    TrackPlayer.reset();
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
    setRepeated(prev => !prev);
  };

  const offRepeat = () => {
    TrackPlayer.setRepeatMode(RepeatMode.Off);
    setRepeated(prev => !prev);
  };

  let shuffled = shuffleData
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);

  const onShuffle = () => {
    setItems(shuffled);
    setShuffleItems(true);
  };

  const offShuffle = () => {
    setItems(route.params.data);
    setShuffleItems(false);
  };

  return (
    <View style={[paddingStyle, styles.main]}>
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
              <ToggleImage />
            </Pressable>
          </View>
          <View style={styles.column2}>
            <Pressable
              style={styles.play}
              onPress={isPlaying ? stopTrack : playSound}>
              {isPlaying ? <Stop /> : <PlayIcon />}
            </Pressable>
            <Pressable onPress={repeated ? offRepeat : repeat}>
              {repeated ? <RepeatOn /> : <RepeatOff />}
            </Pressable>
          </View>
          <View style={styles.column3}>
            <Pressable onPress={skipTrack}>
              <Skip />
            </Pressable>
            <Pressable onPress={shuffleItems ? offShuffle : onShuffle}>
              {shuffleItems ? <ShuffleOn /> : <ShuffleOff />}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;

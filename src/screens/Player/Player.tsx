import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
//assets
import ChevronLeft from '../../assets/icons/ChevronLeft';
//style
import styles from './styles';

import TrackPlayer, {Repe} from 'react-native-track-player';
import PlayIcon from '../../assets/icons/playIcon';
import SkipBack from '../../assets/icons/SkipBack';
import Skip from '../../assets/icons/Skip';
import Stop from '../../assets/icons/Stop';
import data from '../WildAnimalScreen/data';
import Shuffle from '../../assets/icons/Shuffle';
import ToggleImage from '../../assets/icons/ToggleImage';
import Repeat from '../../assets/icons/Repeat';

const MusicPlayer = ({route}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [datas, setDatas] = useState(route.params.id);
  const items = [...data[0], ...data[1]];
  console.log('items', items);
  useEffect(() => {
    function setup() {
      TrackPlayer.setupPlayer();
    }
    setup();
  }, []);

  const playSound = () => {
    TrackPlayer.add(items[datas]);
    TrackPlayer.play();
    setIsPlaying(true);
  };

  const stopTrack = () => {
    TrackPlayer.stop();
    setIsPlaying(false);
  };

  const removeTrack = () => {
    navigation.goBack();
    TrackPlayer.reset();
  };

  // console.log('длина массива', data[0].length);
  // console.log('id', datas);

  const skipTrack = () => {
    if (datas == Number(items.length - 1)) {
      null;
    } else {
      const change = datas + 1;
      TrackPlayer.reset();
      TrackPlayer.skipToNext();
      setIsPlaying(false);
      setDatas(change);
      TrackPlayer.play();
    }
  };

  const prev = () => {
    if (datas !== 0) {
      const change = datas - 1;
      TrackPlayer.reset();
      TrackPlayer.skipToPrevious();
      setIsPlaying(false);
      setDatas(change);
    } else {
      null;
    }
  };

  return (
    <View style={[paddingStyle, styles.main]}>
      <Pressable style={styles.title} onPress={removeTrack}>
        <ChevronLeft />
        <Text style={styles.textTitle}>Дикие животные</Text>
      </Pressable>
      <View style={styles.container}>
        {!isPressed ? (
          <Pressable
            onPress={() => setIsPressed(true)}
            style={styles.albumImage}>
            <Image
              style={styles.image}
              source={require('../../assets/images/tapIcon.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.albumImage}>
            <View>
              <Image style={styles.image} source={items[datas].image} />
            </View>
          </View>
        )}
        <View style={styles.buttons}>
          <View style={styles.column1}>
            <Pressable onPress={prev} style={styles.prevTrack}>
              <SkipBack />
            </Pressable>
            <Pressable onPress={() => setIsPressed(prev => !prev)}>
              <ToggleImage />
            </Pressable>
          </View>
          <View style={styles.column2}>
            <Pressable
              style={styles.play}
              onPress={isPlaying ? stopTrack : playSound}>
              {isPlaying ? <Stop /> : <PlayIcon />}
            </Pressable>
            <Pressable>
              <Repeat />
            </Pressable>
          </View>
          <View style={styles.column3}>
            <Pressable onPress={skipTrack}>
              <Skip />
            </Pressable>
            <Pressable>
              <Shuffle />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;

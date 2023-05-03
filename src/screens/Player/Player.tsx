import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
//assets
import PrevTrack from '../../assets/icons/PrevTrack';
import Play from '../../assets/icons/Play';
import ChevronLeft from '../../assets/icons/ChevronLeft';
//style
import styles from './styles';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const MusicPlayer = ({route}: any) => {
  const playebackState = usePlaybackState();
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const {items} = route.params;
  // const [isPlaying, setIsPlaying] = useState(false);
  console.log('звук', [items]);

  // const playSound = async () => {
  //   await TrackPlayer.setupPlayer();
  //   const track = await TrackPlayer.getActiveTrack(items.id);
  //   if (track) {
  //     return;
  //   }
  //   await TrackPlayer.add(items);
  //   await TrackPlayer.play();
  // };

  useEffect(() => {
    async function setup() {
      await TrackPlayer.setupPlayer();
    }
    setup();
  }, []);

  const playSound = async () => {
    await TrackPlayer.add(items);
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    await TrackPlayer.pause();
    // setIsPlaying(false);
  };

  const stopTrack = async () => {
    await TrackPlayer.stop();
  };
  const removeTrack = async () => {
    navigation.goBack();
    await TrackPlayer.reset();
  };

  return (
    <View style={[paddingStyle, styles.main]}>
      <Pressable style={styles.title} onPress={removeTrack}>
        <ChevronLeft />
        <Text style={styles.textTitle}>Дикие животные</Text>
      </Pressable>
      <View style={styles.container}>
        <View style={styles.albumImage}>
          {[items].map((e, index) => {
            return (
              <View key={index}>
                <Image style={styles.image} source={e.image} />
              </View>
            );
          })}
        </View>
        <View style={styles.buttons}>
          <View style={styles.prevTrack}>
            <PrevTrack />
          </View>
          <Pressable style={styles.stopBnt} onPress={stopTrack}>
            <Text>Stop</Text>
          </Pressable>
          <Pressable style={{backgroundColor: 'red'}} onPress={playSound}>
            <Play />
          </Pressable>
          <View style={styles.nextTrack}>
            <PrevTrack />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;

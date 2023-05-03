import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';

const track = {
  id: '1',
  url: require('../../assets/sounds/tigerSound.mp3'),
  title: 'Song Title',
  artist: 'Artist Name',
};

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add([track]);
    await TrackPlayer.play();
    setIsPlaying(true);
  };

  const pauseTrack = async () => {
    await TrackPlayer.pause();
    setIsPlaying(false);
  };

  const stopTrack = async () => {
    await TrackPlayer.stop();
    setIsPlaying(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{track.title}</Text>
      <Text>{track.artist}</Text>
      {isPlaying ? (
        <TouchableOpacity onPress={pauseTrack}>
          <Text>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={playTrack}>
          <Text>Play</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={stopTrack}>
        <Text>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

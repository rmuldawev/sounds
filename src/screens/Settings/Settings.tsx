import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '../Settings/styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {selectCurrentNote, setToggleState} from '../../store/ShowSlice';
import {setRepeatMode} from '../../store/RepeatSlice';
import {setShuffleMode} from '../../store/ShuffleSlice';
import SmallToggleImageActive from '../../assets/icons/smallToggleImageActive';
import SmallShuffleOn from '../../assets/icons/SmallShuffleOn';
import SmallRepeatOn from '../../assets/icons/SmallRepeatOn';
import Mail from '../../assets/icons/mail';

const Settings = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 50, paddingBottom: bottom + 15};
  const isLoading = useAppSelector(selectCurrentNote);
  const isRepeated = useAppSelector(item => item.repeatMode.repeatMode);
  const shuffleMode = useAppSelector(item => item.shuffleMode.shuffleMode);
  const dispatch = useAppDispatch();

  const toggleSwitch = () => {
    dispatch(setToggleState());
  };

  const toggleRepeatMode = () => {
    dispatch(setRepeatMode());
  };

  const toggleShuffleMode = () => {
    dispatch(setShuffleMode());
  };

  return (
    <View style={[styles.container, paddingStyle]}>
      <Text style={styles.header}>Настройки:</Text>
      <View style={styles.switch}>
        <View style={styles.image}>
          <SmallToggleImageActive />
          <Text style={styles.text1}>Показывать картинки</Text>
        </View>

        <Switch
          trackColor={{false: '#CC0000', true: '#CC0000'}}
          thumbColor={isLoading ? '#ffffff' : '#fffffff'}
          value={isLoading}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleSwitch}
        />
      </View>
      <View style={styles.switch}>
        <View style={styles.image}>
          <SmallRepeatOn />
          <Text>Повтор аудио</Text>
        </View>
        <Switch
          trackColor={{false: '#CC0000', true: '#CC0000'}}
          thumbColor={'#fffffff'}
          value={isRepeated}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleRepeatMode}
        />
      </View>
      <View style={styles.switch}>
        <View style={styles.image}>
          <SmallShuffleOn />
          <Text>Случайный порядок</Text>
        </View>
        <Switch
          trackColor={{false: '#CC0000', true: '#CC0000'}}
          thumbColor={'#fffffff'}
          value={shuffleMode}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleShuffleMode}
        />
      </View>
      <View style={styles.mail}>
        <Text style={styles.header}>Связь с разработчиком:</Text>
        <View style={styles.switch1}>
          <View style={styles.mailImage}>
            <Mail />
            <Text style={styles.mailText}>rmuldawev@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;

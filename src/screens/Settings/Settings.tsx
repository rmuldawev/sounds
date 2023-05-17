import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '../Settings/styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {selectCurrentNote, setToggleState} from '../../store/ShowSlice';
import {CurrentRepeatModeState, setRepeatMode} from '../../store/RepeatSlice';

const Settings = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const isLoading = useAppSelector(selectCurrentNote);
  const isRepeated = useAppSelector(item => item.repeatMode.repeatMode);
  const dispatch = useAppDispatch();

  const toggleSwitch = () => {
    dispatch(setToggleState());
  };

  const toggleRepeatMode = () => {
    dispatch(setRepeatMode());
  };

  return (
    <View style={[styles.container, paddingStyle]}>
      <Text style={styles.header}>Настройки:</Text>
      <View style={styles.switch}>
        <Text>Показывать картинки</Text>
        <Switch
          trackColor={{false: '#CC0000', true: '#CC0000'}}
          thumbColor={isLoading ? '#ffffff' : '#fffffff'}
          value={isLoading}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleSwitch}
        />
      </View>
      <View style={styles.switch}>
        <Text>Повтор аудио</Text>
        <Switch
          trackColor={{false: '#CC0000', true: '#CC0000'}}
          thumbColor={'#fffffff'}
          value={isRepeated}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleRepeatMode}
        />
      </View>
    </View>
  );
};

export default Settings;

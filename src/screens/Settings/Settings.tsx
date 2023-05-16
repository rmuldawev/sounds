import React from 'react';
import {Switch, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '../Settings/styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {selectCurrentNote, setToggleState} from '../../store/ShowSlice';

const Settings = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const isLoading = useAppSelector(selectCurrentNote);
  const dispatch = useAppDispatch();
  console.log('isLoading', isLoading);

  const toggleSwitch = () => {
    dispatch(setToggleState());
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
        <Text>Показывать картинки</Text>
        <Switch
          trackColor={{false: '#CC0000', true: '#CC0000'}}
          thumbColor={isLoading ? '#ffffff' : '#fffffff'}
          value={isLoading}
          ios_backgroundColor="#ffffff"
          onValueChange={toggleSwitch}
        />
      </View>
    </View>
  );
};

export default Settings;

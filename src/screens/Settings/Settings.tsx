import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '../Settings/styles';

const Settings = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  return (
    <View style={[styles.container, paddingStyle]}>
      <Text>Настройки</Text>
    </View>
  );
};

export default Settings;

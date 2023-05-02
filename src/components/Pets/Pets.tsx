import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const Pets = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cow}
        source={require('../../assets/images/cow.png')}
      />
      <Text style={styles.text}>Домашние животные</Text>
    </View>
  );
};

export default Pets;

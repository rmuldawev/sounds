import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const WildAnamals = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tiger}
        source={require('../../assets/images/tigerIcon.png')}
      />
      <Text style={styles.text}>Дикие животные</Text>
    </View>
  );
};

export default WildAnamals;

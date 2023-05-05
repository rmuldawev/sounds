import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import WildAnamals from '../../components/WildAnimals/WildAnimals';
import Pets from '../../components/Pets/Pets';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';

const Sounds = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  return (
    <View style={[styles.container, paddingStyle]}>
      <Text style={styles.text}>Категории</Text>
      <View style={styles.animals}>
        <Pressable onPress={() => navigation.navigate('WildAnimalScreen')}>
          <WildAnamals />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('PetsScreen')}>
          <Pets />
        </Pressable>
      </View>
    </View>
  );
};

export default Sounds;

import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';

const WildAnimalScreen = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top, paddingBottom: bottom};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const items = [
    {
      id: 0,
      image: require('../../assets/images/tigerIcon.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 1,
      image: require('../../assets/images/cow.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 2,
      image: require('../../assets/images/litle_lion.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 3,
      image: require('../../assets/images/zebra.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 4,
      image: require('../../assets/images/little_horse.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 5,
      image: require('../../assets/images/elephant.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 6,
      image: require('../../assets/images/goatling.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 7,
      image: require('../../assets/images/little_dog.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 8,
      image: require('../../assets/images/sheep.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 9,
      image: require('../../assets/images/owlet.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 10,
      image: require('../../assets/images/wolf.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
    {
      id: 11,
      image: require('../../assets/images/hedgehog.png'),
      sound: require('../../assets/sounds/tigerSound.mp3'),
    },
  ];

  return (
    <ScrollView
      style={[styles.container, paddingStyle]}
      showsVerticalScrollIndicator={false}>
      <Pressable
        onPress={() => navigation.navigate('Sounds')}
        style={styles.backIcon}>
        <ChevronLeft />
        <Text style={styles.backText}>Назад</Text>
      </Pressable>
      <Text style={styles.text}>Дикие животные</Text>
      <View style={styles.images}>
        {items.map((items, index) => (
          <Pressable
            style={styles.item}
            key={index}
            onPress={() => navigation.navigate('TrackPlayer', {items})}>
            <View>
              <Image style={styles.image} source={items.image} />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default WildAnimalScreen;

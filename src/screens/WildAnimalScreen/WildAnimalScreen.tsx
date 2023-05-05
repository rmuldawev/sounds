import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
import data from '../../screens/WildAnimalScreen/data';

const WildAnimalScreen = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 10, paddingBottom: bottom};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  console.log('data', data);

  return (
    <View style={{flex: 1, backgroundColor: '#a3ccf5'}}>
      <ScrollView
        contentContainerStyle={[styles.container, paddingStyle]}
        showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => navigation.navigate('Sounds')}
          style={styles.backIcon}>
          <ChevronLeft />
          <Text style={styles.backText}>Назад</Text>
        </Pressable>
        <Text style={styles.text}>Дикие животные</Text>
        <View style={styles.images}>
          {data[0].map((e, index) => (
            <Pressable
              style={styles.item}
              key={index}
              onPress={() => navigation.navigate('TrackPlayer', {id: e.id})}>
              <View>
                <Image style={styles.image} source={e.image} />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default WildAnimalScreen;

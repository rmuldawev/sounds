import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
import data from '../CatalogScreen/data';
import Category from '../../components/Category/Category';

const Sounds = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  console.log(
    '111111',
    [data].map(e => e),
  );

  return (
    <View style={[styles.container, paddingStyle]}>
      <Text style={styles.text}>Категории</Text>
      <View style={styles.animals}>
        {data.map((e, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => navigation.navigate('CatalogScreen', {data: e})}>
              <Category albumImage={e[0].image} CategoryName={e[0].title} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Sounds;

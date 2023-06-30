import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
//components
import data from '../CatalogScreen/data';
import Category from '../../components/Category/Category';
//styles
import styles from './styles';
import {useAppSelector} from '../../store';
import {selectBackgroundThemeColor} from '../../store/ShowSlice';

const Sounds = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const pinkTheme = useAppSelector(selectBackgroundThemeColor);
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  return (
    <View
      style={
        pinkTheme
          ? [styles.containerTheme2, paddingStyle]
          : [styles.container, paddingStyle]
      }>
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

import React, {FC} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
import {useAppSelector} from '../../store';
import {selectBackgroundThemeColor} from '../../store/ShowSlice';

const CatalogScreen = ({route}: any) => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 10, paddingBottom: bottom};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const pinkTheme = useAppSelector(selectBackgroundThemeColor);
  const {data}: any = route.params;

  return (
    <SafeAreaView
      style={
        pinkTheme
          ? [styles.containerTheme2, paddingStyle]
          : [styles.container, paddingStyle]
      }>
      {/* <ScrollView
        contentContainerStyle={
          pinkTheme
            ? [styles.containerTheme2, paddingStyle]
            : [styles.container, paddingStyle]
        }
        // showsVerticalScrollIndicator={false}
      > */}
      <Pressable
        onPress={() => navigation.navigate('Sounds')}
        style={styles.backIcon}>
        <ChevronLeft />
        <Text style={styles.backText}>Назад</Text>
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15}}>
        <Text style={styles.text}>{data.map((e: any) => e.title)}</Text>
        <View style={styles.images}>
          {data.map((e: any, index: number) => (
            <Pressable
              style={styles.item}
              key={index}
              onPress={() =>
                navigation.navigate('MusicPlayer', {
                  currentID: index,
                  data: data,
                })
              }>
              <View>
                <Image style={styles.image} source={e.image} />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default CatalogScreen;

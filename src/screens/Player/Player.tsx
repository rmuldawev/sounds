import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ChevronLeft from '../../assets/icons/ChevronLeft';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigator/AppNavigator';
import WildAnimalScreen from '../WildAnimalScreen/WildAnimalScreen';
import PrevTrack from '../../assets/icons/PrevTrack';
import Play from '../../assets/icons/Play';

// import items from '../WildAnimalScreen/WildAnimalScreen';

const TrackPlayer = ({route}: any) => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const navigation = useNavigation<AppStackScreenProps['navigation']>();
  const {items} = route.params;
  console.log(items);

  return (
    <View style={[paddingStyle, styles.main]}>
      <Pressable style={styles.title} onPress={() => navigation.goBack()}>
        <ChevronLeft />
        <Text style={styles.textTitle}>Дикие животные</Text>
      </Pressable>
      <View style={styles.container}>
        <View style={styles.albumImage}>
          {[items].map((e, index) => {
            return (
              <View key={index}>
                <Image style={styles.image} source={e.image} />
              </View>
            );
          })}
        </View>
        <View style={styles.buttons}>
          <View style={styles.prevTrack}>
            <PrevTrack />
          </View>
          <View>
            <Play />
          </View>
          <View style={styles.nextTrack}>
            <PrevTrack />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackPlayer;

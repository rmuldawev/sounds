import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TrackPlayer from 'react-native-track-player';
import styles from './styles';
import {Image} from 'react-native';

const App = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  return (
    <View style={[paddingStyle, styles.container]}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/LogoSounds.png')}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.faq}>FAQ</Text>
        <View style={styles.text1}>
          <Text style={styles.zagolovok1}>Для кого это приложение?</Text>
          <Text style={styles.mainText}>
            Это приложение разработано для развития слухового восприятия у
            детей. Благодаря ему они могут расширить свой словарный запас,
            узнать больше о мире вокруг себя и научиться говорить более красиво
            и грамотно.
          </Text>
        </View>
        <View>
          <Text style={styles.zagolovok1}>
            Как правильно работать с приложением?
          </Text>
          <Text style={styles.mainText}>
            Чтобы правильно работать с приложением, необходимо выбрать нужную
            категорию и карточку, после чего дать ребенку услышать звук. Если
            пользователь начинающий, рекомендуется включить функцию "показывать
            картинки" в настройках, чтобы после прослушивания звука ребенок мог
            увидеть картинку и обсудить ее со взрослым. Если же ребенок уже
            имеет опыт работы с приложением, функция "показывать картинки" может
            быть выключена. В этом случае малышу предлагается описать звук и
            угадать, кто или что издает этот звук, а затем проверить свои
            догадки, посмотрев на картинку.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

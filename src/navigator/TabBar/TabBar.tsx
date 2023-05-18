import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//styles
import styles from './styles';
import TabBarIcons from '../../TabBarIcons';
const Tabbar = ({state, navigation, descriptors}: any) => {
  const {bottom} = useSafeAreaInsets();
  const bottomStyle = {paddingBottom: bottom};
  return (
    <View style={[styles.container, bottomStyle]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            {route.name === 'SoundsScreens' ? (
              <View>
                <Image
                  style={{height: 30, width: 30}}
                  source={
                    !isFocused
                      ? require('../../assets/icons/tabBarIcons/sound_default.png')
                      : require('../../assets/icons/tabBarIcons/sound_focused.png')
                  }
                />
              </View>
            ) : (
              <View>
                <Image
                  style={{height: 30, width: 30}}
                  source={
                    isFocused
                      ? TabBarIcons[route.name.toLowerCase()].default
                      : TabBarIcons[route.name.toLowerCase()].focused
                  }
                />
              </View>
            )}

            <Text
              style={[
                styles.TabBarTextStyle,
                {color: isFocused ? '#CC0000' : 'black'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Tabbar;

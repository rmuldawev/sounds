import React from 'react';
import TabNavigator from './TabNavigator';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import TrackPlayer from '../screens/Player/Player';
import CatalogScreen from '../screens/CatalogScreen/CatalogScreen';
import MusicPlayer from '../screens/Player/Player';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sounds from '../screens/sounds/Sounds';
import FAQ from '../screens/FAQ/Faq';
import Settings from '../screens/Settings/Settings';
import {useAppSelector} from '../store';

export type MainStackParamList = {
  MusicPlayer: {};
  CatalogScreen: any;
  Sounds: {data: object[]} | undefined;
  FAQ: undefined;
  Settings: undefined;
};
export type AppStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Sounds'
>;
const SoundsScreens = () => {
  <Tab.Navigator>
    <Tab.Screen name="Sounds" component={Sounds} />
  </Tab.Navigator>;
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const noHeaderStyle = {headerShown: false};
  const mode = useAppSelector(item => item.repeatMode.repeatMode);
  console.log('mode', mode);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{...noHeaderStyle}}
        />

        <Stack.Screen
          name="CatalogScreen"
          component={CatalogScreen}
          options={{...noHeaderStyle}}
        />
        <Stack.Screen name="FAQ" component={FAQ} options={{...noHeaderStyle}} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{...noHeaderStyle}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

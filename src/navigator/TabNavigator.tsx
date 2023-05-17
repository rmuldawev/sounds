import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sounds from '../screens/sounds/Sounds';
import Faq from '../screens/FAQ/Faq';
import Settings from '../screens/Settings/Settings';
import Tabbar from './TabBar/TabBar';
import styles from './TabBar/styles';
import CatalogScreen from '../screens/CatalogScreen/CatalogScreen';
import MusicPlayer from '../screens/Player/Player';
import FAQ from '../screens/FAQ/Faq';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import TrackPlayer from 'react-native-track-player';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const noHeaderStyle = {headerShown: false};
function SoundsScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sounds"
        component={Sounds}
        options={{...noHeaderStyle}}
      />
      <Stack.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{...noHeaderStyle}}
      />
      <Stack.Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={{...noHeaderStyle}}
      />
    </Stack.Navigator>
  );
}
const TabNavigator = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const noHeaderStyle = {headerShown: false};
  return (
    <Tab.Navigator
      tabBar={props => (
        <Tabbar {...props} style={[styles.containerWindow, paddingStyle]} />
      )}>
      <Tab.Screen
        name="SoundsScreens"
        component={SoundsScreens}
        options={{...noHeaderStyle, tabBarLabel: 'Звуки'}}
      />

      <Tab.Screen name="FAQ" component={FAQ} options={{...noHeaderStyle}} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{...noHeaderStyle, tabBarLabel: 'Настройки'}}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

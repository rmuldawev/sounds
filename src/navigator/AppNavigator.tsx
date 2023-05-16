import React from 'react';
import TabNavigator from './TabNavigator';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TrackPlayer from '../screens/Player/Player';
import CatalogScreen from '../screens/CatalogScreen/CatalogScreen';

export type MainStackParamList = {
  TrackPlayer: {};
  CatalogScreen: any;
  Sounds: {data: object[]} | undefined;
  FAQ: undefined;
  Settings: undefined;
};
export type AppStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Sounds'
>;

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const noHeaderStyle = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
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
          <Stack.Screen
            name="TrackPlayer"
            component={TrackPlayer}
            options={{...noHeaderStyle}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

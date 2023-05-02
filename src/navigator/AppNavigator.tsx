// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {
//   NativeStackScreenProps,
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WildAnimalScreen from '../screens/WildAnimalScreen/WildAnimalScreen';
import TrackPlayer from '../screens/Player/Player';

export type MainStackParamList = {
  TrackPlayer: undefined;
  WildAnimalScreen: {items: object[]};
  Sounds: undefined;
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
            name="WildAnimalScreen"
            component={WildAnimalScreen}
            options={{...noHeaderStyle}}
          />
          <Stack.Screen
            name="TrackPlayer"
            component={TrackPlayer}
            options={{...noHeaderStyle}}
          />
        </Stack.Group>
        {/* <Stack.Group screenOptions={{presentation: 'modal'}}></Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

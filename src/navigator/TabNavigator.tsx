import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sounds from '../screens/sounds/Sounds';
import Faq from '../screens/FAQ/Faq';
import Settings from '../screens/Settings/Settings';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const {bottom, top} = useSafeAreaInsets();
  const paddingStyle = {paddingTop: top + 15, paddingBottom: bottom + 15};
  const noHeaderStyle = {headerShown: false};
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Sounds"
        component={Sounds}
        options={{...noHeaderStyle}}
      />
      <Tab.Screen name="FAQ" component={Faq} options={{...noHeaderStyle}} />
      <Tab.Screen
        name="Настройки"
        component={Settings}
        options={{...noHeaderStyle}}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

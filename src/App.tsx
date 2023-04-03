import React from 'react';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';

import {TabParamList} from './types';
import {TabBar} from './ui/TabBar';
import {WelcomeScreen} from './screens/WelcomeScreen';
import {CharactersScreen} from './screens/CharactersScreen';
import {ErrorScreen} from './screens/ErrorScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export const screenOptions = ({}: {
  route: RouteProp<TabParamList>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  headerShadowVisible: false,
});

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="welcome"
          component={WelcomeScreen}
          options={screenOptions}
        />
        <Tab.Screen
          name="characters"
          component={CharactersScreen}
          options={screenOptions}
        />
        <Tab.Screen
          name="error"
          component={ErrorScreen}
          options={screenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

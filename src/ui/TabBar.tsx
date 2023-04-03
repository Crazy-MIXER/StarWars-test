import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Tab} from './Tab';

export const IS_IOS = Platform.OS === 'ios';

export function TabBar({state, navigation}: BottomTabBarProps) {
  const {index, routes} = state;
  const {bottom} = useSafeAreaInsets();
  const handlePress = (name: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate(name);
    }
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.tabContainer, {paddingBottom: IS_IOS ? bottom : 8}]}>
      {routes.map(({name, key}, id) => {
        const isFocused = index === id;
        return (
          <Tab
            isFocused={isFocused}
            key={key}
            onPress={() => handlePress(name, isFocused)}
            tabId={id}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    borderTopWidth: 3,
    borderColor: '#3D4574',
    backgroundColor: '#1F2A63',
  },
});

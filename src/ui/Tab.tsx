import React from 'react';

import {
  Pressable,
  StyleSheet,
  useWindowDimensions,
  Text,
  ColorValue,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface TabProps {
  onPress?: () => void;
  tabId: number;
  color?: ColorValue;
  activeColor?: ColorValue;
  isFocused: boolean;
}

const navDataById = [
  {
    icon: 'happy-outline',
    name: 'Welcome',
  },
  {
    icon: 'body-outline',
    name: 'Characters',
  },
  {
    icon: 'bug-outline',
    name: 'Error',
  },
];

export function Tab({
  onPress,
  isFocused,
  tabId,
  color = 'white',
  activeColor = '#FFC107',
}: TabProps) {
  const tabWidth = useWindowDimensions().width / 5 - 2 * 2;

  return (
    <Pressable onPress={onPress} style={icoContainer}>
      <Icon
        size={25}
        style={[ico, {width: tabWidth}]}
        name={navDataById[tabId].icon}
        color={isFocused ? activeColor : color}
      />
      <Text style={{color: isFocused ? activeColor : color}}>
        {navDataById[tabId].name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ico: {
    paddingTop: 5,
    textAlign: 'center',
  },
  icoContainer: {
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
  },
});

const {ico, icoContainer} = styles;

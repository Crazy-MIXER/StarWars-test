import React from 'react';

import {Welcome} from '../components/Welcome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabParamList} from '../types';

export function WelcomeScreen() {
  const {navigate} = useNavigation<NativeStackNavigationProp<TabParamList>>();
  const onCharacters = () => navigate('characters');
  return <Welcome onCharacters={onCharacters} />;
}

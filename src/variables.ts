import {Dimensions} from 'react-native';
import {itemProps} from './types';

export const listData: itemProps[] = [
  {name: 'all', id: 0},
  {name: 'brown', id: 1},
  {name: 'red', id: 2},
  {name: 'blue', id: 3},
  {name: 'white', id: 4},
];

export const width = Dimensions.get('screen').width;

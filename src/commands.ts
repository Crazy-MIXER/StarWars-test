import {itemProps} from './types';

export function getColor(gender: string) {
  switch (gender) {
    case 'male':
      return '#73D677';
    case 'female':
      return '#C956FF';
    case 'hermaphrodite':
      return '#F5DB13';
  }
}

export function getList(list: itemProps[], colorEye: string) {
  let newList: itemProps[] = [];
  list.forEach(item => {
    item.name !== colorEye && newList.push(item);
  });
  return newList;
}

import React, {useEffect, useState} from 'react';

import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {Card} from '../Card';
import {CharacterProps, itemProps} from '../../types';
import {Loading} from '../Loading';
import {getList} from '../../commands';
import {listData} from '../../variables';

function Separator() {
  return <View style={styles.separator} />;
}

interface dataProps {
  count?: number | undefined;
  next?: string | undefined;
  results?: CharacterProps[] | undefined;
}

export function Characters() {
  const [isLoading, setIsLoading] = useState(true);
  const [colorEye, setColorEye] = useState('all');
  const [characters, setCharacters] = useState(0);
  const [isSelect, setIsSelect] = useState(false);
  const [data, setData] = useState<CharacterProps[]>();
  const listItem = ({item}: {item: itemProps}) => {
    const onPress = () => {
      setColorEye(item.name);
      setIsSelect(false);
    };
    return (
      <TouchableOpacity style={styles.listItem} onPress={onPress}>
        <Text style={styles.textButton}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const listHeader = () => {
    return (
      <Text style={styles.text}>
        <Text style={styles.bold}>{data!.length} People </Text>
        for you to choose your favorite
      </Text>
    );
  };
  async function getData(url: string, newData?: CharacterProps[]) {
    const localeData = newData ? newData : [];
    setCharacters(localeData.length);
    const response = await fetch(url, {method: 'GET'});
    if (response.ok) {
      const result: dataProps = await response.json();
      if (colorEye !== 'all') {
        result.results!.forEach(item => {
          if (item.eye_color === colorEye) {
            localeData.push(item);
          }
        });
      } else {
        result.results!.forEach(item => {
          localeData.push(item);
        });
      }
      if (result.next) {
        getData(result.next, localeData);
      } else {
        setData(localeData);
        setIsLoading(false);
      }
    } else {
      console.log('error ', response.status);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getData('https://swapi.dev/api/people/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorEye]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Color eye:</Text>
        <View>
          <TouchableOpacity
            disabled={isLoading}
            style={styles.listButton}
            onPress={() => setIsSelect(!isSelect)}>
            <Text style={styles.textButton}>{colorEye}</Text>
          </TouchableOpacity>
          {isSelect && (
            <View style={styles.list}>
              <FlatList
                data={getList(listData, colorEye)}
                renderItem={listItem}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </View>
      {isLoading ? (
        <Loading characters={characters} />
      ) : (
        <FlatList
          ListHeaderComponent={listHeader}
          data={data}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => <Card data={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2A63',
  },
  separator: {
    marginVertical: 15,
  },
  text: {
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: '300',
  },
  list: {
    position: 'absolute',
    zIndex: 10,
    top: 45,
    height: 160,
    width: 120,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#FFC107',
    alignItems: 'center',
  },
  listItem: {
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listButton: {
    height: 40,
    width: 120,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FFC107',
  },
  textButton: {
    fontSize: 20,
    color: 'black',
    fontWeight: '300',
  },
  bold: {
    fontWeight: '500',
  },
  listContainer: {
    alignItems: 'center',
  },
  row: {
    zIndex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
});

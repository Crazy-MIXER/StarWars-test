import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {CharacterProps} from '../../types';
import {ModalCard} from '../ModalCard';
import {getColor} from '../../commands';
import {width} from '../../variables';

export function Card({data}: {data: CharacterProps}) {
  const [visible, setVisible] = useState(false);
  console.log(data);
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.container}
      onPress={() => setVisible(true)}>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <ModalCard data={data} />
      </Modal>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.row}>
        <View>
          <View style={styles.circle}>
            <Text>{data.height}</Text>
          </View>
          <Text style={styles.description}>Height</Text>
        </View>
        {data.mass !== 'unknown' && (
          <View>
            <View style={styles.circle}>
              <Text>{data.mass}</Text>
            </View>
            <Text style={styles.description}>Mass</Text>
          </View>
        )}
      </View>
      <View>
        {data.gender !== 'n/a' && (
          <View
            style={[
              styles.genderContainer,
              {backgroundColor: getColor(data.gender)},
            ]}>
            <Text style={styles.description}>{data.gender}</Text>
          </View>
        )}
        <View style={styles.birthContainer}>
          <Text style={styles.description}>{data.birth_year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width - 30,
    height: width - 30,
    borderColor: '#FFC107',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  genderContainer: {
    height: 50,
    marginVertical: 10,
    width: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  birthContainer: {
    height: 50,
    marginVertical: 10,
    width: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07D6F2',
  },
  description: {
    marginVertical: 3,
    alignSelf: 'center',
    color: 'black',
    fontWeight: '300',
    fontSize: 17,
  },
  name: {
    color: 'black',
    fontSize: 23,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    justifyContent: 'space-evenly',
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 5,
  },
});

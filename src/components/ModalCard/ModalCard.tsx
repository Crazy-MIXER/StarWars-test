import React from 'react';

import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {CharacterProps} from '../../types';
import {getColor} from '../../commands';

interface ModalCardProps {
  data: CharacterProps;
}

export function ModalCard({data}: ModalCardProps) {
  return (
    <View style={styles.modalPreContainer}>
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image
            source={require('../../../assets/UFO.png')}
            style={styles.image}
          />
          <Text style={styles.nameText}>{data.name}</Text>
          <View style={styles.row}>
            <View style={styles.square}>
              <View style={styles.circle}>
                <Text style={styles.description}>{data.height}</Text>
              </View>
              <Text style={styles.description}>Height</Text>
            </View>
            <View style={styles.square}>
              <View style={styles.circle}>
                <Text style={styles.description}>{data.mass}</Text>
              </View>
              <Text style={styles.description}>Mass</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.description}>
              Birth year:{' '}
              <Text style={[styles.description, {color: '#07D6F2'}]}>
                {data.birth_year}
              </Text>
            </Text>
            <Text style={styles.description}>Eye color: {data.eye_color}</Text>
            <Text style={styles.description}>
              Gender:{' '}
              <Text
                style={[styles.description, {color: getColor(data.gender)}]}>
                {data.gender}
              </Text>
            </Text>
            <Text style={styles.description}>
              Hair color: {data.hair_color}
            </Text>
            <Text style={styles.description}>
              Skin color: {data.skin_color}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    width: '80%',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundColor: '#0C8CE9',
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  nameText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
  },
  modalPreContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '93%',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#1F275F',
  },
  description: {
    marginVertical: 3,
    alignSelf: 'center',
    color: 'black',
    fontWeight: '300',
    fontSize: 17,
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

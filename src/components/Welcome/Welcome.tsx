import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface WelcomeProps {
  onCharacters: () => void;
}

export function Welcome({onCharacters}: WelcomeProps) {
  return (
    <View style={styles.preContainer}>
      <Image
        style={styles.image}
        source={require('../../../assets/logo.png')}
      />
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Find</Text> all your favorite
          <Text style={styles.boldText}> character!</Text>
        </Text>
        <Text style={styles.descriptionText}>
          You can find out all the information about your favorite characters
        </Text>
      </View>
      <TouchableOpacity onPress={onCharacters}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>View Characters</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  image: {
    marginVertical: 15,
  },
  preContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F2A63',
  },
  descriptionText: {
    fontSize: 25,
    marginVertical: 15,
    fontWeight: '300',
    color: 'white',
  },
  text: {
    fontSize: 45,
    fontWeight: '300',
    color: 'white',
  },
  boldText: {
    fontWeight: '600',
  },
  button: {
    borderRadius: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#FFC107',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
});

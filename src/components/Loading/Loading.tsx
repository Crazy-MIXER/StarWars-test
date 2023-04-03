import React from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';

interface LoadingProps {
  characters: number;
}

export function Loading({characters}: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'orange'} size={100} />
      <Text style={styles.text}>Uploaded {characters} characters.</Text>
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
  text: {
    marginTop: 15,
    color: 'white',
    fontSize: 26,
    fontWeight: '300',
  },
});

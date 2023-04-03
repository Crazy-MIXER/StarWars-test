import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export function Error() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>4</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/null.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2A63',
  },
  text: {
    fontSize: 120,
    color: 'silver',
    marginHorizontal: 95,
  },
  image: {
    position: 'absolute',
    resizeMode: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Detail = ( {navigation} ) => (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your</Text>
      <Button onPress={() => navigation.goBack()} title="Go to back to Home" />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;

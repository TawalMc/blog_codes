import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text>rn adaptive ui</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

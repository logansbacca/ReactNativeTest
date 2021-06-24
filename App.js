import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.data}>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count+1)} title="Click me!"/>
      <Button onPress={() => setCount(0)} title="Clear"/>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  data: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default App;
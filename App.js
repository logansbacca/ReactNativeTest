import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'antd-mobile';

const App = () => {
  const [count, setCount] = useState(0);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.data}>
      <Text>You clicked {count} times</Text>
      <Button activeStyle={{ backgroundColor:'red'}} onClick={() => setCount(count+1)}></Button>
      <Button type="primary" onClick={() => setCount(0)}></Button>
      <TextInput style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="PIN"
        keyboardType="numeric"/>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  data: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  input:{
    textAlign: 'center',
  }

});


export default App;
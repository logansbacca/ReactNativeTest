import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.data}>
      <Text>You clicked {count} times</Text>
      <Text style={styles.boldText}>
        Click the buttons below to see changes
      </Text>
      <Button
        color="red"
        onPress={() => setCount(count + 1)}
        title="Increase"
      />
      <Button color="green" onPress={() => setCount(0)} title="Clear" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="TYPE A NUMBER"
        keyboardType="numeric"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default App;

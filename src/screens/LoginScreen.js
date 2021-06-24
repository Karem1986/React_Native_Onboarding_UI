import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

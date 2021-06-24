import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <Button title="Click here" onPress={() => navigation.navigate('Login')} />
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

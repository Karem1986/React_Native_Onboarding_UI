import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}) {
  return (
    <>
      <Onboarding
        pages={[
          {
            backgroundColor: '#66DE93',
            image: (
              <Image source={require('../assets/peopleIllustration1.png')} />
            ),
            title: 'Onboarding 1: Welcome to ActiviFun',
            subtitle: 'Done with React Native Onboarding swipper for you',
          },
          {
            backgroundColor: '#a6a4d0',
            image: <Image source={require('../assets/people2.png')} />,
            title: 'Onboarding 2: Choose from activities or create your own',
            subtitle: 'Thanks to Freepik for the grafics',
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

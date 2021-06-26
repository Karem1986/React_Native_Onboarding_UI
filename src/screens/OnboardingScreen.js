import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text>Done</Text>
  </TouchableOpacity>
);

export default function OnboardingScreen({navigation}) {
  return (
    <>
      <Onboarding
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate('Login')}
        onDone={() => navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#66DE93',
            image: (
              <Image source={require('../assets/peopleIllustration1.png')} />
            ),
            title: 'Welcome to ActiviFun',
            subtitle: 'Done with React Native Onboarding swipper for you',
          },
          {
            backgroundColor: '#66DE93',
            image: <Image source={require('../assets/people2.png')} />,
            title: 'A new way to meet people',
            subtitle: 'Thanks to Freepik for the grafics',
          },
          {
            backgroundColor: '#66DE93',
            image: <Image source={require('../assets/people2.png')} />,
            title: 'Create your own activites or...',
            subtitle: 'Thanks to Freepik for the grafics',
          },
          {
            backgroundColor: '#66DE93',
            image: <Image source={require('../assets/people2.png')} />,
            title: 'Search from the list and join',
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

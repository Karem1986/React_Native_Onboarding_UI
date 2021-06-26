import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet} from 'react-native';

const AppStack = createStackNavigator();

function App() {
  // const [isFirstTime, setIsFirstTime] = useState(true);

  // useEffect(() => {
  //   AsyncStorage.getItem('isFirstTime').then(value => {
  //     if (value === true) {
  //       AsyncStorage.setItem('isFirstTime', 'true');
  //       setIsFirstTime(true);
  //     } else {
  //       setIsFirstTime(false);
  //     }
  //   });
  // }, []);

  // if (!isFirstTime) {
  //   return <LoginScreen />;
  // } else if (isFirstTime) {
  //   return (
  //     <NavigationContainer>
  //       <AppStack.Navigator>
  //         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
  //         <AppStack.Screen name="Login" component={LoginScreen} />
  //       </AppStack.Navigator>
  //     </NavigationContainer>
  //   );
  // }

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

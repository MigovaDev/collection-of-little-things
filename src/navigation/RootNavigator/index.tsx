import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from '../../features/main/screens/LandingScreen';
import { BiometricNavigator } from '../BiometricNavigator';

import { RootStackName,RootStackParamList } from './types.ts';

const Stack = createStackNavigator<RootStackParamList>();

const options = { headerShown: false }

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RootStackName.Landing}
          component={LandingScreen}
          options={options}
        />
        <Stack.Screen
          name={RootStackName.Biometric}
          component={BiometricNavigator}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

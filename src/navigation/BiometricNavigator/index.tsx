import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HelloScreen } from '../../features/biometrics/screens/HelloScreen';
import { HomeScreen } from '../../features/biometrics/screens/HomeScreen';

import { BiometricStackName,BiometricStackParamList } from './types.ts';

const Stack = createStackNavigator<BiometricStackParamList>();

const options = { headerShown: false };

export const BiometricNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={BiometricStackName.Hello}
        component={HelloScreen}
        options={options}
      />
      <Stack.Screen
        name={BiometricStackName.Home}
        component={HomeScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};



import React from 'react';

import { useTheme } from '@contexts/ThemeContext';
import { HomeScreen } from '@features/biometrics/screens/HomeScreen';
import { PasswordScreen } from '@features/biometrics/screens/PasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';

import { getBiometricScreenOptions } from './options';
import { BiometricStackName, BiometricStackParamList } from './types.ts';

const Stack = createStackNavigator<BiometricStackParamList>();

export const BiometricNavigator = () => {
  const { colors } = useTheme();

  const screenOptions = getBiometricScreenOptions(colors);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={BiometricStackName.Password}
        component={PasswordScreen}
        options={screenOptions[BiometricStackName.Password]}
      />
      <Stack.Screen
        name={BiometricStackName.Home}
        component={HomeScreen}
        options={screenOptions[BiometricStackName.Home]}
      />
    </Stack.Navigator>
  );
};

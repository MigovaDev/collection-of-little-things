import React from 'react';

import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';

import { colors } from '../../constants/colors';
import { HomeScreen } from '../../features/biometrics/screens/HomeScreen';
import { PasswordScreen } from '../../features/biometrics/screens/PasswordScreen';

import { BiometricStackName,BiometricStackParamList } from './types.ts';

const Stack = createStackNavigator<BiometricStackParamList>();

const options: StackNavigationOptions = { headerShown: true, headerTitle: '', headerTintColor: colors.text.primary, headerStyle: {backgroundColor:  colors.background.dark}, cardStyle: {backgroundColor:  colors.background.dark} };

export const BiometricNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={BiometricStackName.Password}
        component={PasswordScreen}
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



import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';

import {colors} from "../../constants/colors.ts";
import { LandingScreen } from '../../features/main/screens/LandingScreen';
import { BiometricNavigator } from '../BiometricNavigator';

import { RootStackName,RootStackParamList } from './types.ts';

const Stack = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = { headerShown: false,  cardStyle: {backgroundColor:  colors.background.dark}, }

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

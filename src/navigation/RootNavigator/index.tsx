import React from 'react';

import { colors } from '@constants/colors';
import { LandingScreen } from '@features/main/screens/LandingScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { BiometricNavigator } from '../BiometricNavigator';

import { RootStackName, RootStackParamList } from './types.ts';

const Stack = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const mainTheme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background.dark,
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={mainTheme}>
      <Stack.Navigator>
        <Stack.Screen name={RootStackName.Landing} component={LandingScreen} options={options} />
        <Stack.Screen
          name={RootStackName.Biometric}
          component={BiometricNavigator}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

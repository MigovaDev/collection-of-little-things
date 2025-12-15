import React from 'react';

import { LandingScreen } from '@features/main/screens/LandingScreen';
import { ThemesScreen } from '@features/themas/screens/ThemesScreen';
import { useTheme } from '@hooks/useTheme';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BiometricNavigator } from '../BiometricNavigator';
import { getScreenOptions } from './options';
import { RootStackName, RootStackParamList } from './types.ts';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { colors } = useTheme();

  const mainTheme: ReactNavigation.Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background.dark,
    },
  };

  const screenOptions = getScreenOptions(colors);

  return (
    <NavigationContainer theme={mainTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={RootStackName.Landing}
          component={LandingScreen}
          options={screenOptions[RootStackName.Landing]}
        />
        <Stack.Screen
          name={RootStackName.Biometric}
          component={BiometricNavigator}
          options={screenOptions[RootStackName.Biometric]}
        />
        <Stack.Screen
          name={RootStackName.Themes}
          component={ThemesScreen}
          options={screenOptions[RootStackName.Themes]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

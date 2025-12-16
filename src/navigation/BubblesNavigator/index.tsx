import React from 'react';

import { BubblesCountScreen } from '@features/bubbles/screens/BubblesCountScreen';
import { BubblesScreen } from '@features/bubbles/screens/BubblesScreen';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { createStackNavigator } from '@react-navigation/stack';

import { getBubblesScreenOptions } from './options';
import { BubblesStackName, BubblesStackParamList } from './types';

const Stack = createStackNavigator<BubblesStackParamList>();

export const BubblesNavigator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const screenOptions = getBubblesScreenOptions(colors, t);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={BubblesStackName.BubblesCount}
        component={BubblesCountScreen}
        options={screenOptions[BubblesStackName.BubblesCount]}
      />
      <Stack.Screen
        name={BubblesStackName.Bubbles}
        component={BubblesScreen}
        options={screenOptions[BubblesStackName.Bubbles]}
      />
    </Stack.Navigator>
  );
};



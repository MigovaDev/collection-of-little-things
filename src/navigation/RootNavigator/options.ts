import { ThemeColors } from '@constants/themes';
import { StackNavigationOptions } from '@react-navigation/stack';

import { RootStackName } from './types';

export const getScreenOptions = (
  colors: ThemeColors,
): Record<RootStackName, StackNavigationOptions> => ({
  [RootStackName.Landing]: {
    headerShown: false,
    animation: 'slide_from_right',
  },
  [RootStackName.Biometric]: {
    headerShown: false,
    animation: 'slide_from_right',
  },
  [RootStackName.Themes]: {
    headerShown: true,
    headerTitle: '',
    headerTintColor: colors.text.primary,
    headerStyle: { backgroundColor: colors.background.dark },
    headerShadowVisible: false,
    animation: 'slide_from_right',
  },
});


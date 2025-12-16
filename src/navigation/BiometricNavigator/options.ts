import { ThemeColors } from '@constants/themes';
import { StackNavigationOptions } from '@react-navigation/stack';

import { BiometricStackName } from './types';

export const getBiometricScreenOptions = (
  colors: ThemeColors,
): Record<BiometricStackName, StackNavigationOptions> => ({
  [BiometricStackName.Password]: {
    headerShown: true,
    headerTitle: '',
    headerBackTitle: '',
    headerTintColor: colors.text.primary,
    headerStyle: { backgroundColor: colors.background.dark },
    headerShadowVisible: false,
  },
  [BiometricStackName.Home]: {
    headerShown: true,
    headerTitle: '',
    headerBackTitle: '',
    headerTintColor: colors.text.primary,
    headerStyle: { backgroundColor: colors.background.dark },
    headerShadowVisible: false,
  },
});


import { ThemeColors } from '@constants/themes';
import { StackNavigationOptions } from '@react-navigation/stack';

import { BubblesStackName } from './types';

export const getBubblesScreenOptions = (
  colors: ThemeColors,
): Record<BubblesStackName, StackNavigationOptions> => ({
  [BubblesStackName.BubblesCount]: {
    headerShown: true,
    headerTitle: '',
    headerTintColor: colors.text.primary,
    headerStyle: { backgroundColor: colors.background.dark },
    headerBackTitle: '',
    headerShadowVisible: false,
  },
  [BubblesStackName.Bubbles]: {
    headerShown: false,
  },
});



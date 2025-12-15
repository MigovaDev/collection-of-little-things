import { ThemeColors } from '@constants/themes';
import { TranslationKey } from '@constants/translations';
import { StackNavigationOptions } from '@react-navigation/stack';

import { RootStackName } from './types';

type Translate = (key: TranslationKey) => string;

export const getScreenOptions = (
  colors: ThemeColors,
  t: Translate,
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
    headerTitle: t('themes.title'),
    headerTintColor: colors.text.primary,
    headerStyle: { backgroundColor: colors.background.dark },
    headerShadowVisible: false,
    animation: 'slide_from_right',
  },
  [RootStackName.Languages]: {
    headerShown: true,
    headerTitle: t('languages.title'),
    headerTintColor: colors.text.primary,
    headerStyle: { backgroundColor: colors.background.dark },
    headerShadowVisible: false,
    animation: 'slide_from_right',
  },
});


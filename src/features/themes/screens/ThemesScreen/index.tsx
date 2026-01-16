import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeItem } from '@features/themes/components/ThemeItem';
import { themeOptions } from '@features/themes/constants';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { styles } from './styles';

export const ThemesScreen = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>{t('themes.title')}</Text>
        <View style={styles.themeContainer}>
          {themeOptions.map(option => <ThemeItem key={option.theme} option={option} />)}
        </View>
      </View>
    </SafeAreaView>
  );
};




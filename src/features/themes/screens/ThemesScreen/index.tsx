import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { screenHeight } from '@constants/screenDimensions';
import { Theme, themes } from '@constants/themes';
import { themeOptions } from '@features/themes/constants';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { styles } from './styles';

const AVAILABLE_HEIGHT = screenHeight * 0.7;
const PREVIEW_SIZE = Math.min(140, Math.max(80, (AVAILABLE_HEIGHT - 200) / 3));
const DOT_SIZE = Math.max(16, PREVIEW_SIZE * 0.17);

export const ThemesScreen = () => {
  const { theme, setTheme, colors } = useTheme();
  const { t } = useTranslation();

  const handleThemeChange = (newTheme: Theme) => setTheme(newTheme);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>{t('themes.title')}</Text>

        <View style={styles.themeContainer}>
          {themeOptions.map(option => {
            const themeColors = themes[option.theme];
            const isSelected = theme === option.theme;

            return (
              <View key={option.theme} style={styles.themeOption}>
                <TouchableOpacity
                  onPress={() => handleThemeChange(option.theme)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.themePreview,
                      {
                        width: PREVIEW_SIZE,
                        height: PREVIEW_SIZE,
                        backgroundColor: themeColors.background.dark,
                        borderColor: option.getBorderColor(isSelected, themeColors, colors),
                      },
                    ]}
                  >
                    <View
                      style={{
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        borderRadius: DOT_SIZE / 2,
                        backgroundColor: themeColors.text.primary,
                      }}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={[styles.themeName, { color: colors.text.primary }]}>
                  {t(option.labelKey)}
                </Text>
                <Text
                  style={[
                    styles.selectedLabel,
                    {
                      color: colors.text.success,
                      opacity: isSelected ? 1 : 0,
                    },
                  ]}
                >
                  {t('themes.selected')}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};




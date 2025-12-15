import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { screenHeight } from '@constants/screenDimensions';
import { Theme, ThemeColors, themes } from '@constants/themes';
import { useTheme } from '@hooks/useTheme';

import { styles } from './styles';

type ThemeOption = {
  theme: Theme;
  label: string;
  getBorderColor: (isSelected: boolean, themeColors: ThemeColors, currentColors: ThemeColors) => string;
};

const defaultBorderColor = themes[Theme.Dark].border.separator;

const themeOptions: ThemeOption[] = [
  {
    theme: Theme.Dark,
    label: 'Dark',
    getBorderColor: (isSelected, _themeColors, currentColors) =>
      isSelected ? currentColors.button.primary : defaultBorderColor,
  },
  {
    theme: Theme.Light,
    label: 'Light',
    getBorderColor: (isSelected, _themeColors, currentColors) =>
      isSelected ? currentColors.button.primary : defaultBorderColor,
  },
  {
    theme: Theme.Toxic,
    label: 'Toxic',
    getBorderColor: (isSelected, themeColors, _currentColors) =>
      isSelected ? themeColors.text.primary : defaultBorderColor,
  },
];

export const ThemesScreen = () => {
  const { theme, setTheme, colors } = useTheme();

  const handleThemeChange = (newTheme: Theme) => setTheme(newTheme);

  const availableHeight = screenHeight * 0.7;
  const previewSize = Math.min(140, Math.max(80, (availableHeight - 200) / 3));
  const dotSize = Math.max(16, previewSize * 0.17);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>Choose Theme</Text>

        <View style={styles.themeContainer}>
          {themeOptions.map((option) => {
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
                        width: previewSize,
                        height: previewSize,
                        backgroundColor: themeColors.background.dark,
                        borderColor: option.getBorderColor(isSelected, themeColors, colors),
                      },
                    ]}
                  >
                    <View
                      style={
                      {
                          width: dotSize,
                          height: dotSize,
                          borderRadius: dotSize / 2,
                          backgroundColor: themeColors.text.primary,
                        }}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={[styles.themeName, { color: colors.text.primary }]}>
                  {option.label}
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
                  Selected
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};


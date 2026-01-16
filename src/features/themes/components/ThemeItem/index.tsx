import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { themes } from '@constants/themes';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { screenHeight } from '@/constants/screenDimensions';

import { type ThemeOption } from '../../constants';
import { styles } from './styles';

type ThemeItemProps = {
  option: ThemeOption;
};

const AVAILABLE_HEIGHT = screenHeight * 0.7;
const PREVIEW_SIZE = Math.min(140, Math.max(80, (AVAILABLE_HEIGHT - 200) / 3));
const DOT_SIZE = Math.max(16, PREVIEW_SIZE * 0.17);

export const ThemeItem = ({ option }: ThemeItemProps) => {
  const { theme, setTheme, colors } = useTheme();
  const { t } = useTranslation();

  const themeColors = themes[option.theme];
  const isSelected = theme === option.theme;

  const onChangeTheme = () => setTheme(option.theme);

  return (
    <View style={styles.themeOption}>
      <TouchableOpacity activeOpacity={0.7} onPress={onChangeTheme}>
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
};

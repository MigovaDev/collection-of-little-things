import { Theme, ThemeColors, themes } from '@constants/themes';

type ThemeOption = {
  theme: Theme;
  labelKey: 'themes.dark' | 'themes.light' | 'themes.toxic';
  getBorderColor: (isSelected: boolean, themeColors: ThemeColors, currentColors: ThemeColors) => string;
};

const defaultBorderColor = themes[Theme.Dark].border.separator;

export const themeOptions: ThemeOption[] = [
  {
    theme: Theme.Dark,
    labelKey: 'themes.dark',
    getBorderColor: (isSelected, _themeColors, currentColors) =>
      isSelected ? currentColors.button.primary : defaultBorderColor,
  },
  {
    theme: Theme.Light,
    labelKey: 'themes.light',
    getBorderColor: (isSelected, _themeColors, currentColors) =>
      isSelected ? currentColors.button.primary : defaultBorderColor,
  },
  {
    theme: Theme.Toxic,
    labelKey: 'themes.toxic',
    getBorderColor: (isSelected, themeColors, _currentColors) =>
      isSelected ? themeColors.text.primary : defaultBorderColor,
  },
];




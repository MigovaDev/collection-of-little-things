import { Theme, ThemeColors, themes } from '@constants/themes';
import { useThemeStore } from '@store/themeStore';

type ThemeHook = {
  theme: Theme;
  colors: ThemeColors;
  setTheme: (theme: Theme) => void;
}; 

export const useTheme = (): ThemeHook => {
  const {theme, setTheme} = useThemeStore((state) => state);
  const colors = themes[theme];
  
  return { theme, colors, setTheme };
};

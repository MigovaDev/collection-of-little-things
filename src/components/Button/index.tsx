import React from 'react';

import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { ThemeColors } from '@constants/themes';
import { useTheme } from '@contexts/ThemeContext';

import { styles } from './styles';

export enum ButtonVariant {
  Default = 'default',
  Ghost = 'ghost',
}

type VariantConfig = {
  buttonStyle: (colors: ThemeColors) => StyleProp<ViewStyle>[];
  textStyle: (colors: ThemeColors) => StyleProp<TextStyle>[];
};

const variantConfigs: Record<ButtonVariant, VariantConfig> = {
  [ButtonVariant.Default]: {
    buttonStyle: (colors) => [
      styles.button,
      {
        width: '100%',
        backgroundColor: colors.button.background,
        borderColor: colors.button.border,
      },
    ],
    textStyle: (colors) => [styles.buttonText, { color: colors.button.text }],
  },
  [ButtonVariant.Ghost]: {
    buttonStyle: () => [
      styles.button,
      styles.buttonGhost,
      {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
    ],
    textStyle: (colors) => [styles.buttonTextGhost, { color: colors.text.secondary }],
  },
};

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  title,
  onPress,
  style,
  variant = ButtonVariant.Default,
}: ButtonProps) => {
  const { colors } = useTheme();
  const config = variantConfigs[variant];

  const buttonStyle = [...config.buttonStyle(colors), style];
  const textStyle = config.textStyle(colors);

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

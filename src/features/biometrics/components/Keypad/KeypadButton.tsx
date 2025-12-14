import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@contexts/ThemeContext';

import { styles } from './styles';

type KeypadButtonProps = {
  digit: string;
  onPress: (digit: string) => void;
};

export const KeypadButton = ({ digit, onPress }: KeypadButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.key, { backgroundColor: colors.button.background }]}
      onPress={() => onPress(digit)}
      activeOpacity={0.7}
    >
      <Text style={[styles.keyNumber, { color: colors.text.primary }]}>{digit}</Text>
    </TouchableOpacity>
  );
};

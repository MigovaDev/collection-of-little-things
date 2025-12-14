import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type KeypadButtonProps = {
  digit: string;
  onPress: (digit: string) => void;
};

export const KeypadButton = ({ digit, onPress }: KeypadButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.key}
      onPress={() => onPress(digit)}
      activeOpacity={0.7}
    >
      <Text style={styles.keyNumber}>{digit}</Text>
    </TouchableOpacity>
  );
};


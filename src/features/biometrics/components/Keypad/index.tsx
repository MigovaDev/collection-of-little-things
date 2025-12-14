import React from 'react';

import { View } from 'react-native';

import { KeypadButton } from './KeypadButton';
import { styles } from './styles';

const keypadDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

type KeypadProps = {
  onPressDigit: (digit: string) => void;
};

export const Keypad = ({ onPressDigit }: KeypadProps) => {
  return (
    <View style={styles.keypad}>
      {keypadDigits.map(digit => (
        <KeypadButton key={digit} digit={digit} onPress={onPressDigit} />
      ))}
    </View>
  );
};

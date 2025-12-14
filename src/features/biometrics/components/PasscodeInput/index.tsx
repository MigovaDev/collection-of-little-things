import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './styles';

type PasscodeInputProps = {
  codeLength: number;
  error?: string;
};

const dotsArray = [0, 1, 2, 3];

export const PasscodeInput = ({ codeLength, error }: PasscodeInputProps) => {
  return (
    <>
      <View style={styles.dotsRow}>
        {dotsArray.map(i => (
          <View key={i} style={[styles.dot, codeLength > i && styles.dotFilled]} />
        ))}
      </View>
      <Text style={styles.errorText}>{error ?? ' '}</Text>
    </>
  );
};

import React from 'react';

import { Text, View } from 'react-native';

import { useTheme } from '@hooks/useTheme';

import { styles } from './styles';

type PasscodeInputProps = {
  codeLength: number;
  error?: string;
};

const dotsArray = [0, 1, 2, 3];

export const PasscodeInput = ({ codeLength, error }: PasscodeInputProps) => {
  const { colors } = useTheme();

  return (
    <>
      <View style={styles.dotsRow}>
        {dotsArray.map(i => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor:
                  codeLength > i ? colors.ui.dot.active : colors.ui.dot.inactive,
              },
            ]}
          />
        ))}
      </View>
      <Text style={[styles.errorText, { color: colors.text.error }]}>{error ?? ' '}</Text>
    </>
  );
};

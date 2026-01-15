import React from 'react';

import { Animated, Text } from 'react-native';

import { useTheme } from '@hooks/useTheme';

import { styles } from './styles';

type ToastProps = {
  translateY: Animated.Value;
  opacity: Animated.Value;
  text: string;
};

export const Toast = ({ translateY, opacity, text }: ToastProps) => {
  const { colors } = useTheme();

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <Text style={[styles.toastText, { color: colors.text.success }]}>{text}</Text>
    </Animated.View>
  );
};


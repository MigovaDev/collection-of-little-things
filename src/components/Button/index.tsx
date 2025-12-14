import React from 'react';

import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'ghost';
};

export const Button = ({ title, onPress, style, variant = 'default' }: ButtonProps) => {
  const buttonStyle =
    variant === 'ghost' ? [styles.button, styles.buttonGhost, style] : [styles.button, style];
  const textStyle = variant === 'ghost' ? styles.buttonTextGhost : styles.buttonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

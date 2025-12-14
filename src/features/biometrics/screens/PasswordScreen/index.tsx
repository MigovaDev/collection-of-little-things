import React from 'react';

import { Animated, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ButtonVariant } from '@components/Button';
import { useTheme } from '@contexts/ThemeContext';
import { Keypad } from '@features/biometrics/components/Keypad';
import { PasscodeInput } from '@features/biometrics/components/PasscodeInput';
import { PasswordScreenNavigationProp } from '@navigation/BiometricNavigator/types';

import { styles } from './styles.ts';
import { usePasswordScreen } from './usePasswordScreen.ts';

export const PasswordScreen = (props: PasswordScreenNavigationProp) => {
  const { colors } = useTheme();
  const {
    code,
    error,
    translateY,
    isBiometricAvailable,
    panResponder,
    biometryType,
    onPressDigit,
    onDelete,
  } = usePasswordScreen(props);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <Animated.View
        style={[styles.content, { transform: [{ translateY: translateY.current }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { color: colors.text.primary }]}>
              {isBiometricAvailable && `Swipe up for ${biometryType} or \n `}Enter Passcode
            </Text>
            <PasscodeInput codeLength={code.length} error={error} />
          </View>

          <Keypad onPressDigit={onPressDigit} />
        </View>
        <View style={styles.bottomRow}>
          <Button title={'SOS'} onPress={() => 0} variant={ButtonVariant.Ghost} />
          <Button title={'Delete'} onPress={onDelete} variant={ButtonVariant.Ghost} />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

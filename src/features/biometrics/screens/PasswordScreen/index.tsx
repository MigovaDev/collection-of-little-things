import React from 'react';

import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PasswordScreenNavigationProp } from '../../../../navigation/BiometricNavigator/types.ts';
import { Keypad } from '../../components/Keypad';
import { PasscodeInput } from '../../components/PasscodeInput';

import { styles } from './styles.ts';
import { usePasswordScreen } from './usePasswordScreen.ts';

export const PasswordScreen = (props: PasswordScreenNavigationProp) => {
  const {
    code,
    error,
    translateY,
    isBiometricAvailable,
    panResponder,
    onPressDigit,
    onDelete,
    getBiometryDisplayName,
  } = usePasswordScreen(props);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.content, { transform: [{ translateY: translateY.current }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {isBiometricAvailable && `Swipe up for ${getBiometryDisplayName()} or \n `}Enter Passcode
            </Text>
            <PasscodeInput codeLength={code.length} error={error} />
          </View>

          <Keypad onPressDigit={onPressDigit} />
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.bottomAction}>SOS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.bottomAction}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};


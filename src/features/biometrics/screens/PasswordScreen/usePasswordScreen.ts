import { useEffect, useRef, useState } from 'react';

import { Animated, PanResponder, PanResponderInstance } from 'react-native';

import { useAlert } from '@components/Alert/AlertService';
import { screenHeight } from '@constants/screenDimensions';
import {
  BiometricStackName,
  PasswordScreenNavigationProp,
} from '@navigation/BiometricNavigator/types';
import { isSensorAvailable, simplePrompt } from '@sbaiahmed1/react-native-biometrics';

const springConfig = {
  toValue: 0,
  damping: 15,
  stiffness: 150,
  useNativeDriver: true,
};

const REQUIRED_CODE = '0000';

export const usePasswordScreen = ({ navigation }: PasswordScreenNavigationProp) => {
  const [biometryType, setBiometryType] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { alert } = useAlert();

  const translateY = useRef(new Animated.Value(0));
  const threshold = screenHeight * 0.15;

  const isBiometricAvailable =
    biometryType !== '' && biometryType !== 'Not Available' && biometryType !== 'Error';

  const resetAnimation = () => {
    Animated.spring(translateY.current, springConfig).start();
  };

  const checkBiometrySupport = async () => {
    try {
      const { available, biometryType: availableType } = await isSensorAvailable();
      if (available) {
        setBiometryType(availableType || 'Biometric');
      } else {
        setBiometryType('Not Available');
      }
    } catch (err) {
      console.error('Error checking biometry support:', err);
      setBiometryType('Error');
    }
  };

  const handleBiometricAuth = async () => {
    if (biometryType === 'Not Available' || biometryType === 'Error') {
      alert(
        'Biometric Authentication',
        'Biometric authentication is not available on this device.',
      );
      return;
    }

    try {
      const success = await simplePrompt('Authenticate');

      if (success) {
        navigation.replace(BiometricStackName.Home);
      } else {
        alert('Authentication Failed', 'Biometric authentication was cancelled or failed.');
      }
    } catch (err) {
      console.error('Biometric authentication error:', err);
      alert('Error', 'An error occurred during authentication.');
    }
  };

  const panResponder: PanResponderInstance = PanResponder.create({
    onMoveShouldSetPanResponder: (_evt, gestureState) =>
      isBiometricAvailable && Math.abs(gestureState.dy) > 8,
    onPanResponderMove: (_evt, gestureState) => {
      if (!isBiometricAvailable) return;
      const dy = Math.min(0, gestureState.dy);
      translateY.current.setValue(dy);
    },
    onPanResponderRelease: (_evt, gestureState) => {
      if (!isBiometricAvailable) return;
      const pulledUpBy = Math.max(0, -gestureState.dy);
      resetAnimation();

      if (pulledUpBy >= threshold) {
        handleBiometricAuth();
      }
    },
    onPanResponderTerminate: resetAnimation,
  });

  useEffect(() => {
    checkBiometrySupport();
  }, []);

  const onPressDigit = (digit: string) => {
    if (code.length >= 4) return;
    const next = `${code}${digit}`;
    setError('');
    setCode(next);

    if (next.length === 4) {
      setTimeout(() => {
        if (next === REQUIRED_CODE) {
          navigation.replace(BiometricStackName.Home);
        } else {
          setError('Incorrect Passcode');
          setCode('');
        }
      }, 120);
    }
  };

  const onDelete = () => {
    setCode(prev => (prev.length ? prev.slice(0, -1) : prev));
  };

  return {
    code,
    error,
    translateY,
    biometryType,
    isBiometricAvailable,
    panResponder,
    onPressDigit,
    onDelete,
  };
};

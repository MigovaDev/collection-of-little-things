import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAlert } from '@components/Alert/AlertService';
import { Button } from '@components/Button';
import { useTheme } from '@hooks/useTheme';
import { BiometricStackName, HomeScreenNavigationProp } from '@navigation/BiometricNavigator/types';

import { styles } from './styles.ts';

export const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {
  const { colors } = useTheme();
  const { alert } = useAlert();

  const handleLogout = () => {
    alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => navigation.replace(BiometricStackName.Password),
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <View style={styles.successContainer}>
          <Text style={styles.successIcon}>🎉</Text>
          <Text style={[styles.title, { color: colors.text.success }]}>Welcome!</Text>
          <Text style={[styles.subtitle, { color: colors.text.primary }]}>
            You have successfully authenticated using biometric authentication.
          </Text>
          <Text style={[styles.description, { color: colors.text.tertiary }]}>
            You are now in the secure area of the app. Your biometric authentication was successful
            and you can access all features.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title={'Logout'} onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
  );
};

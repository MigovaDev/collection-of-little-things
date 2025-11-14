import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAlert } from '../../../../components/Alert/AlertService.tsx';
import { BiometricStackName, HomeScreenNavigationProp } from '../../../../navigation/BiometricNavigator/types.ts';

import { styles } from './styles.ts';

export const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {
  const { alert } = useAlert();

  const handleLogout = () => {
    alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
            onPress: () => navigation.replace(BiometricStackName.Hello),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successContainer}>
          <Text style={styles.successIcon}>🎉</Text>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>
            You have successfully authenticated using biometric authentication.
          </Text>
          <Text style={styles.description}>
            You are now in the secure area of the app. Your biometric authentication was successful and you can access all features.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

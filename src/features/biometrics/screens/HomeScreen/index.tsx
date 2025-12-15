import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAlert } from '@components/Alert/AlertService';
import { Button } from '@components/Button';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { BiometricStackName, HomeScreenNavigationProp } from '@navigation/BiometricNavigator/types';

import { styles } from './styles.ts';

export const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {
  const { colors } = useTheme();
  const { alert } = useAlert();
  const { t } = useTranslation();

  const handleLogout = () => {
    alert(t('home.logout'), t('home.logoutConfirm'), [
      {
        text: t('common.cancel'),
        style: 'cancel',
      },
      {
        text: t('home.logout'),
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
          <Text style={[styles.title, { color: colors.text.success }]}>
            {t('home.welcome')}
          </Text>
          <Text style={[styles.subtitle, { color: colors.text.primary }]}>
            {t('home.subtitle')}
          </Text>
          <Text style={[styles.description, { color: colors.text.tertiary }]}>
            {t('home.description')}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title={t('home.logout')} onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
  );
};

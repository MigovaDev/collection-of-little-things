import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { LandingScreenNavigationProp, RootStackName } from '@navigation/RootNavigator/types';

import { styles } from './styles';

export const LandingScreen = ({ navigation }: LandingScreenNavigationProp) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const goToBiometric = () =>
    navigation.navigate(RootStackName.Biometric);

  const goToThemes = () =>
    navigation.navigate(RootStackName.Themes);

  const goToLanguages = () =>
    navigation.navigate(RootStackName.Languages);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>
          {t('landing.title')}
        </Text>
        <Button title={t('landing.goToBiometrics')} onPress={goToBiometric} />
        <Button title={t('landing.goToThemes')} onPress={goToThemes} />
        <Button title={t('landing.goToLanguages')} onPress={goToLanguages} />
      </View>
    </SafeAreaView>
  );
};

import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button';
import { useTheme } from '@contexts/ThemeContext';
import { LandingScreenNavigationProp, RootStackName } from '@navigation/RootNavigator/types';

import { styles } from './styles';

export const LandingScreen = ({ navigation }: LandingScreenNavigationProp) => {
  const { colors } = useTheme();

  const goToBiometric = () =>
    navigation.navigate(RootStackName.Biometric);

  const goToThemas = () =>
    navigation.navigate(RootStackName.Themes);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>
          Collection of little things
        </Text>
        <Button title={'Go to biometrics'} onPress={goToBiometric} />
        <Button title={'Go to themas'} onPress={goToThemas} />
      </View>
    </SafeAreaView>
  );
};

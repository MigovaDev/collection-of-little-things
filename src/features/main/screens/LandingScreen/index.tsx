import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button';
import { LandingScreenNavigationProp, RootStackName } from '@navigation/RootNavigator/types';

import { styles } from './styles';

export const LandingScreen = ({ navigation }: LandingScreenNavigationProp) => {
  const goToBiometric = () => {
    navigation.navigate(RootStackName.Biometric);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Collection of little things</Text>
        <Button title={'Go to biometrics'} onPress={goToBiometric} />
      </View>
    </SafeAreaView>
  );
};

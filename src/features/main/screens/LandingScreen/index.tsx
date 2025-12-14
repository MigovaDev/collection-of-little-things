import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {LandingScreenNavigationProp, RootStackName} from '../../../../navigation/RootNavigator/types';

import { styles } from './styles';

export const LandingScreen = ({navigation}: LandingScreenNavigationProp) => {

  const goToBiometric = () => {
    navigation.navigate(RootStackName.Biometric);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Collection of little things</Text>
        <TouchableOpacity style={styles.button} onPress={goToBiometric}>
          <Text style={styles.buttonText}>Go to biometrics</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



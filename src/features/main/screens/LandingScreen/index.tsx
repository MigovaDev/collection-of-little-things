import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackName } from '../../../../navigation/RootNavigator/types';

export const LandingScreen = () => {
  const navigation = useNavigation<any>();

  const goToBiometric = () => {
    navigation.navigate(RootStackName.Biometric);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Collection of little things</Text>
        <TouchableOpacity style={styles.button} onPress={goToBiometric}>
          <Text style={styles.buttonText}>Go to Hello Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



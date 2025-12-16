import React from 'react';

import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { LandingScreenNavigationProp, RootStackName } from '@navigation/RootNavigator/types';

import { styles } from './styles';

export const LandingScreen = ({ navigation }: LandingScreenNavigationProp) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const actions = [
      {
        title: t('landing.goToBiometrics'),
        onPress: () => navigation.navigate(RootStackName.BiometricsNavigator),
      },
      {
        title: t('landing.goToThemes'),
        onPress:  () => navigation.navigate(RootStackName.Themes),
      },
      {
        title: t('landing.goToLanguages'),
        onPress: () => navigation.navigate(RootStackName.Languages),
    },
    {
      title: t('landing.goToBubbles'),
      onPress: () => navigation.navigate(RootStackName.BubblesNavigator),
      },
  ];

  const renderItem: ListRenderItem<(typeof actions)[number]> = ({ item }) => (
    <Button title={item.title} onPress={item.onPress} />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>
          {t('landing.title')}
        </Text>
        <FlatList
          data={actions}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

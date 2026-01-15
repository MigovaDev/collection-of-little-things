import React from 'react';

import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button';
import {TranslationKey} from '@constants/translations.ts';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { LandingScreenNavigationProp, RootStackName } from '@navigation/RootNavigator/types';

import { styles } from './styles';

type Action = {
    title: TranslationKey,
    routeName: RootStackName
}

const actions: Action[] = [
    {
        title: 'landing.goToBiometrics',
        routeName: RootStackName.BiometricsNavigator,
    },
    {
        title: 'landing.goToThemes',
        routeName:  RootStackName.Themes,
    },
    {
        title: 'landing.goToLanguages',
        routeName: RootStackName.Languages,
    },
    {
        title: 'landing.goToBubbles',
        routeName: RootStackName.BubblesNavigator,
    },
    {
        title: 'landing.goToQRScanner',
        routeName: RootStackName.QRScanner,
    },
];

export const LandingScreen = ({ navigation }: LandingScreenNavigationProp) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const onActionPress = (routeName: RootStackName) => navigation.navigate(routeName)

  const renderItem = ({ item }: ListRenderItemInfo<Action>) => (
    <Button title={t(item.title)} onPress={() => onActionPress(item.routeName)}  />
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

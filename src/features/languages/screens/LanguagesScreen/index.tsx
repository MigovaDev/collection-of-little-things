import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supportedLanguages } from '@constants/languages';
import { LanguageItem } from '@features/languages/components/LanguageItem';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { styles } from './styles';

export const LanguagesScreen = () => {
  const { colors } = useTheme();
  const { language, setLanguage, t } = useTranslation();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text.primary }]}>{t('languages.title')}</Text>

        <View style={styles.list}>
          {supportedLanguages.map(option => {
            const isSelected = option === language;

            return (
              <LanguageItem
                key={option}
                language={option}
                isSelected={isSelected}
                onPress={() => setLanguage(option)}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};



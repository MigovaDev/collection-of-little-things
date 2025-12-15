import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Language } from '@constants/languages';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { styles } from './styles';

type LanguageItemProps = {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
};

const getLanguageLabelKey = (language: Language) => {
  switch (language) {
    case Language.Ru:
      return 'languages.russian';
    case Language.En:
      return 'languages.english';
    case Language.De:
      return 'languages.german';
    default:
      return 'languages.english';
  }
};

export const LanguageItem = ({ language, isSelected, onPress }: LanguageItemProps) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={[
        styles.item,
        {
          borderColor: isSelected ? colors.button.primary : colors.border.separator,
        },
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.itemLabel, { color: colors.text.primary }]}>
        {t(getLanguageLabelKey(language))}
      </Text>
      <Text
        style={[
          styles.selectedLabel,
          {
            color: colors.text.success,
            opacity: isSelected ? 1 : 0,
          },
        ]}
      >
        {t('languages.selected')}
      </Text>
    </TouchableOpacity>
  );
};



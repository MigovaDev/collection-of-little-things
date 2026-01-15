import React from 'react';

import { Text, View } from 'react-native';

import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';

import { styles } from './styles';

const corners = [
    { style: styles.topLeft },
    { style: styles.topRight },
    { style: styles.bottomLeft },
    { style: styles.bottomRight },
  ];

export const ScanOverlay = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.overlay}>
      <View style={styles.scanArea}>
        {corners.map((corner, index) => (
          <View
            key={index}
            style={[styles.corner, corner.style, { borderColor: colors.button.primary }]}
          />
        ))}
      </View>
      <Text style={[styles.instructionText, { color: colors.text.primary }]}>
        {t('qrscanner.instruction')}
      </Text>
    </View>
  );
};


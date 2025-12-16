import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ButtonVariant } from '@components/Button';
import { Bubble } from '@features/bubbles/components/Bubble';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { BubblesScreenNavigationProp } from '@navigation/BubblesNavigator/types';

import { styles } from './styles';
import { useBubblesScreen } from './useBubblesScreen';

export const BubblesScreen = ({ route, navigation }: BubblesScreenNavigationProp) => {
  const { count } = route.params;
  const { colors } = useTheme();
  const { t } = useTranslation();

  const { bubbles, handlePop, remaining } = useBubblesScreen({
    count,
    colors,
  });

  const handleBackToHome = () => navigation.goBack();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
      <View style={styles.content}>
        {bubbles.map(bubble => {
          if (bubble.popped) {
            return null;
          }

          return <Bubble key={bubble.config.id} bubble={bubble} onPop={handlePop} />;
        })}

        {remaining === 0 && bubbles.length > 0 && (
          <View style={styles.congratsContainer}>
            <Text
              style={[
                styles.congratsText,
                { color: colors.text.success },
              ]}
            >
              {t('bubbles.congrats')}
            </Text>
            <View style={styles.buttonContainer}>
              <Button variant={ButtonVariant.Ghost} title={t('bubbles.backToHome')} onPress={handleBackToHome} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

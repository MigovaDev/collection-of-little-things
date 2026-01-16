import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { useToast } from '@components/Toast/ToastService';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import Clipboard from '@react-native-clipboard/clipboard';

import { styles } from './styles';

type QRResultModalProps = {
  url: string;
  isVisible: boolean;
  onClose: () => void;
  onOpenLink: () => void;
};

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 }

export const QRResultModal= ({
  url,
  onClose,
  isVisible,
  onOpenLink,
}: QRResultModalProps) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { showToast } = useToast();

  const isValidUrl = /^https?:\/\//i.test(url);

  const handleCopy = async () => {
    await Clipboard.setString(url);
    showToast(t('qrscanner.copied'));
  };

  return (
    <Modal visible={isVisible} onClose={onClose}>
      <Text style={[styles.title, { color: colors.text.primary }]}>
        {t('qrscanner.scanResult')}
      </Text>
      <View style={styles.urlContainer}>
        <TouchableOpacity
          onPress={onOpenLink}
          disabled={!isValidUrl}
          style={styles.urlTextContainer}
        >
          <Text
            style={[
              styles.urlText,
              {
                color: isValidUrl ? colors.button.primary : colors.text.primary,
              },
            ]}
            numberOfLines={3}
          >
            {url}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCopy} hitSlop={hitSlop}>
          <Text style={[styles.copyIcon, { color: colors.text.primary }]}>⧉</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={onClose}
        title={t('common.cancel')}
      />
    </Modal>
  );
};


import React from 'react';

import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

import { Button, ButtonVariant } from '@components/Button';
import { useTheme } from '@hooks/useTheme';
import { useTranslation } from '@hooks/useTranslation';
import { QRScannerScreenNavigationProp } from '@navigation/RootNavigator/types';

import { QRResultModal } from '../../components/QRResultModal';
import { ScanOverlay } from '../../components/ScanOverlay';
import { styles } from './styles';
import { useQRScannerScreen } from './useQRScannerScreen';

export const QRScannerScreen = ({ navigation }: QRScannerScreenNavigationProp) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const device = useCameraDevice('back');

  const {
    scannedData,
    isModalVisible,
    hasPermission,
    codeScanner,
    handleCloseModal,
    handleOpenLink,
    handleBack,
  } = useQRScannerScreen(navigation);

  if (hasPermission === false || !device) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: colors.text.primary }]}>
            {hasPermission === false
              ? t('qrscanner.permissionDenied')
              : t('qrscanner.cameraNotAvailable')}
          </Text>
          <Button
            onPress={handleBack}
            style={styles.backButton}
            title={t('common.back')}
            variant={ButtonVariant.Ghost}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (hasPermission === null) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background.dark }]}>
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: colors.text.primary }]}>
            {t('qrscanner.requestingPermission')}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView
          edges={['top', 'bottom']}
          style={[styles.container, { backgroundColor: colors.shadow.black }]}
      >
        <View style={styles.cameraContainer}>
          <Camera
            device={device}
            style={styles.camera}
            isActive={!isModalVisible}
            codeScanner={codeScanner}
          />
          <ScanOverlay />
          <Button
            onPress={handleBack}
            style={styles.backButton}
            title={t('common.back')}
            variant={ButtonVariant.Ghost}
          />
        </View>
        <QRResultModal
          url={scannedData || ''}
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          onOpenLink={handleOpenLink}
        />
      </SafeAreaView>
    </>
  );
};


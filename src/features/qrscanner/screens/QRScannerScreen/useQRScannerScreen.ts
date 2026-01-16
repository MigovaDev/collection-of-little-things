import { useEffect, useState } from 'react';

import { Linking, Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { useCodeScanner } from 'react-native-vision-camera';

import { QRScannerScreenNavigationProp } from '@navigation/RootNavigator/types';

import { requestPermission } from '@/utils/permissions';

export const useQRScannerScreen = (navigation: QRScannerScreenNavigationProp['navigation']) => {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      if (codes.length > 0 && codes[0].value) {
        const value = codes[0].value;
        setScannedData(value);
        setIsModalVisible(true);
      }
    },
  });
  const checkPermission = async () => {
    const granted = await requestPermission(
      Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
    );
    setHasPermission(granted);
  };

  useEffect(() => {
   
    checkPermission();
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setScannedData(null);
  };

  const handleOpenLink = async () => {
    if (scannedData) {
      const isUrl = await Linking.canOpenURL(scannedData);
      if (isUrl) {
        await Linking.openURL(scannedData);
      }
      handleCloseModal();
    }
  };

  const handleBack = () => navigation.goBack();

  return {
    scannedData,
    isModalVisible,
    hasPermission,
    codeScanner,
    handleCloseModal,
    handleOpenLink,
    handleBack,
  };
};


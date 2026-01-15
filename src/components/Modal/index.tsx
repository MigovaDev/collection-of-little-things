import React from 'react';

import {Modal as RNModal, ModalProps, TouchableWithoutFeedback, View} from 'react-native';

import { useTheme } from '@hooks/useTheme';

import { styles } from './styles';

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animationType?: ModalProps['animationType'];
};

export const Modal = ({
  visible,
  onClose,
  children,
  animationType = 'fade',
}: CustomModalProps) => {
  const { colors } = useTheme();

  return (
    <RNModal visible={visible} transparent animationType={animationType} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, { backgroundColor: colors.overlay.dark }]}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContainer, { backgroundColor: colors.background.dark }]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

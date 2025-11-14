import React from 'react';

import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { styles } from './styles.ts';

interface AlertButton {
  text: string;
  style?: 'default' | 'cancel' | 'destructive';
  onPress?: () => void;
}

interface AlertProps {
  visible: boolean;
  title?: string;
  message?: string;
  buttons?: AlertButton[];
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  visible,
  title,
  message,
  buttons,
  onClose,
}) => {
  const handleButtonPress = (button: AlertButton) => {
    if (button.onPress) {
      button.onPress();
    }
    onClose();
  };

  const getButtonStyle = (style?: string) => {
    switch (style) {
      case 'destructive':
        return styles.destructiveButton;
      case 'cancel':
        return styles.cancelButton;
      default:
        return styles.defaultButton;
    }
  };

  const getButtonTextStyle = (style?: string) => {
    switch (style) {
      case 'destructive':
        return styles.destructiveButtonText;
      case 'cancel':
        return styles.cancelButtonText;
      default:
        return styles.defaultButtonText;
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.alertContainer}>
              {title && <Text style={styles.title}>{title}</Text>}
              {message && <Text style={styles.message}>{message}</Text>}

              <View style={[
                styles.buttonContainer,
                buttons?.length === 2 ? styles.buttonContainerHorizontal : styles.buttonContainerVertical
              ]}>
                {buttons?.map((button, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    style={[
                      styles.button,
                      getButtonStyle(button.style),
                      buttons.length === 2 ? styles.buttonHorizontal : styles.buttonVertical,
                      index > 0 && buttons.length > 2 && styles.buttonSeparatorVertical,
                      index > 0 && buttons.length === 2 && styles.buttonSeparatorHorizontal,
                    ]}
                    onPress={() => handleButtonPress(button)}
                  >
                    <Text style={getButtonTextStyle(button.style)}>
                      {button.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

import React from 'react';

import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { useTheme } from '@contexts/ThemeContext';

import { styles } from './styles.ts';

type AlertButton = {
  text: string;
  style?: 'default' | 'cancel' | 'destructive';
  onPress?: () => void;
};

type AlertProps = {
  visible: boolean;
  title?: string;
  message?: string;
  buttons?: AlertButton[];
  onClose: () => void;
};

export const Alert: React.FC<AlertProps> = ({ visible, title, message, buttons, onClose }) => {
  const { colors } = useTheme();

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
        return [styles.destructiveButtonText, { color: colors.button.destructive }];
      case 'cancel':
        return [styles.cancelButtonText, { color: colors.button.primary }];
      default:
        return [styles.defaultButtonText, { color: colors.button.primary }];
    }
  };

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, { backgroundColor: colors.overlay.dark }]}>
          <TouchableWithoutFeedback>
            <View style={[styles.alertContainer, { backgroundColor: colors.background.light }]}>
              {title && <Text style={[styles.title, { color: colors.text.dark }]}>{title}</Text>}
              {message && <Text style={[styles.message, { color: colors.text.dark }]}>{message}</Text>}
              <View
                style={[
                  styles.buttonContainer,
                  { borderTopColor: colors.border.separator },
                  buttons?.length === 2
                    ? styles.buttonContainerHorizontal
                    : styles.buttonContainerVertical,
                ]}
              >
                {buttons?.map((button, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    style={[
                      styles.button,
                      getButtonStyle(button.style),
                      buttons.length === 2 ? styles.buttonHorizontal : styles.buttonVertical,
                      index > 0 &&
                        buttons.length > 2 && [
                          styles.buttonSeparatorVertical,
                          { borderTopColor: colors.border.separator },
                        ],
                      index > 0 &&
                        buttons.length === 2 && [
                          styles.buttonSeparatorHorizontal,
                          { borderLeftColor: colors.border.separator },
                        ],
                    ]}
                    onPress={() => handleButtonPress(button)}
                  >
                    <Text style={getButtonTextStyle(button.style)}>{button.text}</Text>
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

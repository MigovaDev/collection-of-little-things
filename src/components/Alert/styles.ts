import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay.dark,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  alertContainer: {
    backgroundColor: colors.background.light,
    borderRadius: 14,
    minWidth: 270,
    maxWidth: width - 40,
    shadowColor: colors.shadow.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text.dark,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 4,
  },
  message: {
    fontSize: 13,
    color: colors.text.dark,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    lineHeight: 18,
  },
  buttonContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border.separator,
  },
  buttonContainerHorizontal: {
    flexDirection: 'row',
  },
  buttonContainerVertical: {
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  buttonHorizontal: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  buttonVertical: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  buttonSeparatorVertical: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border.separator,
  },
  buttonSeparatorHorizontal: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: colors.border.separator,
  },
  defaultButton: {
    backgroundColor: colors.background.transparent,
  },
  defaultButtonText: {
    fontSize: 17,
    color: colors.button.primary,
    fontWeight: '400',
  },
  cancelButton: {
    backgroundColor: colors.background.transparent,
  },
  cancelButtonText: {
    fontSize: 17,
    color: colors.button.primary,
    fontWeight: '600',
  },
  destructiveButton: {
    backgroundColor: colors.background.transparent,
  },
  destructiveButtonText: {
    fontSize: 17,
    color: colors.button.destructive,
    fontWeight: '400',
  },
});

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  alertContainer: {
    borderRadius: 14,
    minWidth: 270,
    maxWidth: width - 40,
    shadowColor: '#000',
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
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 4,
  },
  message: {
    fontSize: 13,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    lineHeight: 18,
  },
  buttonContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
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
  },
  buttonSeparatorHorizontal: {
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
  defaultButton: {
    backgroundColor: 'transparent',
  },
  defaultButtonText: {
    fontSize: 17,
    fontWeight: '400',
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '600',
  },
  destructiveButton: {
    backgroundColor: 'transparent',
  },
  destructiveButtonText: {
    fontSize: 17,
    fontWeight: '400',
  },
});

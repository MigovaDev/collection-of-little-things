import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.button.background,
    borderColor: colors.button.border,
  },
  buttonGhost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  buttonText: {
    color: colors.button.text,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextGhost: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: '400',
  },
});

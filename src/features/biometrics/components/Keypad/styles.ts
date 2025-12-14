import { StyleSheet } from 'react-native';

import { colors } from '@constants/colors';

export const styles = StyleSheet.create({
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginTop: 24,
    paddingHorizontal: 20,
  },
  key: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: colors.button.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyNumber: {
    color: colors.text.primary,
    fontSize: 28,
    fontWeight: '700',
  },
});

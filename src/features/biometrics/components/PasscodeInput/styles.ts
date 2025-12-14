import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  dotsRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.ui.dot.inactive,
  },
  dotFilled: {
    backgroundColor: colors.ui.dot.active,
  },
  errorText: {
    color: colors.text.error,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

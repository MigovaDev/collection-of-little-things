import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.8,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    color: colors.text.primary,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
  },
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
  keyLetters: {
    color: colors.text.tertiary,
    fontSize: 10,
    marginTop: 2,
    letterSpacing: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bottomAction: {
    color: colors.text.secondary,
    fontSize: 14,
  },
  errorText: {
    color: colors.text.error,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

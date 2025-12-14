import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.9,
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

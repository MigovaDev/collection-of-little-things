import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: colors.text.primary,
    fontSize: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.button.background,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.button.border,
  },
  buttonText: {
    color: colors.button.text,
    fontSize: 16,
    fontWeight: '600',
  },
});



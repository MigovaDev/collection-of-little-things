import { StyleSheet } from 'react-native';

import { colors } from '@constants/colors';

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
});

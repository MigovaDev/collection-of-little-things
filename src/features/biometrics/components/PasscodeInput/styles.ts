import { StyleSheet } from 'react-native';

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
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

import { StyleSheet } from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyNumber: {
    fontSize: 28,
    fontWeight: '700',
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  congratsContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 24
  },
  congratsText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center'
  },
});



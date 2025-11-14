import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    color: '#fff',
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
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  dotFilled: {
    backgroundColor: '#fff',
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
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyNumber: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  keyLetters: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    marginTop: 2,
    letterSpacing: 1,
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bottomAction: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});

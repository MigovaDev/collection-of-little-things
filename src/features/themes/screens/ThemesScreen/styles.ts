import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 0.9,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  themeContainer: {
    gap: 20,
    marginBottom: 32,
  },
  themeOption: {
    alignItems: 'center',
    gap: 8,
  },
  themePreview: {
    borderRadius: 16,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeName: {
    fontSize: 18,
    fontWeight: '600',
  },
  selectedLabel: {
    fontSize: 14,
    fontWeight: '500',
    height: 20,
  },
});




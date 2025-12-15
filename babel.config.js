module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@services': './src/services',
          '@store': './src/store',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};

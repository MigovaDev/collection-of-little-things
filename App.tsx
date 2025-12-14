import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AlertProvider } from '@components/Alert/AlertService';
import { ThemeProvider } from '@contexts/ThemeContext';
import { RootNavigator } from '@navigation/RootNavigator';

function App() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <AlertProvider>
          <RootNavigator />
        </AlertProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;

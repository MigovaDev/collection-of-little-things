import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AlertProvider } from '@components/Alert/AlertService';
import { ToastProvider } from '@components/Toast/ToastService';
import { RootNavigator } from '@navigation/RootNavigator';

function App() {
  return (
    <GestureHandlerRootView>
      <AlertProvider>
        <ToastProvider>
          <RootNavigator />
        </ToastProvider>
      </AlertProvider>
    </GestureHandlerRootView>
  );
}

export default App;

import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AlertProvider } from '@components/Alert/AlertService';
import { RootNavigator } from '@navigation/RootNavigator';

function App() {
  return (
    <GestureHandlerRootView>
      <AlertProvider>
        <RootNavigator />
      </AlertProvider>
    </GestureHandlerRootView>
  );
}

export default App;

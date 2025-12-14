import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AlertProvider } from './src/components/Alert/AlertService';
import { RootNavigator } from './src/navigation/RootNavigator';

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

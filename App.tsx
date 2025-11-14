import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootNavigator } from './src/navigation/RootNavigator';
import { AlertProvider } from './src/components/Alert/AlertService';

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

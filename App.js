import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/index';
import { NativeBaseProvider } from 'native-base';
import { SSRProvider } from '@react-aria/ssr';

function App(){
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <SSRProvider>
        <Navigation />
        </SSRProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;

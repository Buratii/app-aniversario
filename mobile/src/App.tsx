import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';

import Routes from './routes/auth.routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#333' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;

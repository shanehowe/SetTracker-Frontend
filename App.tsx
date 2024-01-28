import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Router } from './routes/Router';
import { AuthProvidor } from './contexts/AuthContext';
import { theme } from './theme/theme';

import React from 'react';

export default function App() {

  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === "dark" ? theme.dark : theme.dark;

  return (
    <AuthProvidor>
      <PaperProvider theme={paperTheme}>
          <Router />
          <StatusBar style="auto" />
      </PaperProvider>
    </AuthProvidor>
  );
};

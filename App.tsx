import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Router } from './routes/Router';
import { AuthProvidor } from './contexts/AuthContext';

import React from 'react';

export default function App() {

  return (
    <AuthProvidor>
      <PaperProvider>
          <Router />
          <StatusBar style="auto" />
      </PaperProvider>
    </AuthProvidor>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { AppNavigator } from './app-navigator';
import { initiateDB } from './src/database/database';

export default function App() {
  initiateDB();
  
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

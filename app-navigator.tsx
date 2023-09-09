import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/home.screen';
import { AddSheetView } from './src/screens/add-sheet.screen';
import { SheetScreenView } from './src/screens/sheet-view.screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cursed Nights" component={HomeScreen} />
      <Stack.Screen name="Ficha" component={AddSheetView} />
      <Stack.Screen name="Visualizar Ficha" component={SheetScreenView} /> 
    </Stack.Navigator>
  );
};

export { AppNavigator };
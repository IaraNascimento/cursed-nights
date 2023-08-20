import React from "react";
import { Button, StyleSheet, View } from 'react-native';

interface IMenu {
  onAddSheet: () => void
}

const Menu = (props: IMenu) => {  
  return (
    <View style={styles.container}>
      <Button 
        title="+ Adicionar Ficha" 
        onPress={() => props.onAddSheet()}/>
    </View>
  );
}

export default Menu

const styles = StyleSheet.create({
  container: {
    width: '100%', minHeight: 30, height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
});
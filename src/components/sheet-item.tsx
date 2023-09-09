import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ISheet } from "../models/sheet.model";

interface ISheetProps {
  data: ISheet,
  navigation: any
}

const SheetItem = (props: ISheetProps) => {  
  const onPress = () => {
    props.navigation.navigate('Visualizar Ficha', { data: props.data })
  }

  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress} >
      <Text style={styles.text}>{props.data.title}</Text>
    </TouchableOpacity>
  );
}

export default SheetItem

const styles = StyleSheet.create({
  container: {
    width: '100%', minHeight: 30, height: 'auto',
    color: 'tomato',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderColor: 'tomato',
    padding: 10,
  },
  text: {
    color: 'tomato',
    width: '100%',
  }
});
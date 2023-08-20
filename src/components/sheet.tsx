import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ISheet } from "../models/sheet.model";

interface ISheetProps {
  data: ISheet
}

const Sheet = (props: ISheetProps) => {  
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{props.data.title}</Text>
    </View>
  );
}

export default Sheet

const styles = StyleSheet.create({
  container: {
    width: '100%', minHeight: 30, height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'black',
    width: '100%',
  }
});
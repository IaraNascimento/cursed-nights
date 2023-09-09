import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as DocumentPicker from 'expo-document-picker';
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { toastConfig } from "./toastConfig";

interface IMenu {
  navigation: any,
}

const Menu = (props: IMenu) => {
  const onPress = async () => {
      const result = await DocumentPicker.getDocumentAsync();
      
      if (!result || !result.assets || !result.assets.length) Toast.show({
        type: "errorToast",
        text1: 'Houve algum erro com a importação',
        onPress: () => Toast.hide(),
      })
      else {
        props.navigation.navigate('Ficha', { uri: result.assets[0].uri });
      }

  }
  
  return (
    <View style={styles.container}>
      <Toast config={toastConfig} />
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}>
          <Icon name="upload" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default Menu

const styles = StyleSheet.create({
  container: {
    width: '100%', minHeight: 30, height: 'auto',
    color: 'tomato',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'tomato',
    shadowOpacity: .1,
    shadowOffset: {
      width: 0.4,
      height: 3
    }
  }
});
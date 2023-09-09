import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ISheet } from "../models/sheet.model";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteSheet } from "../database/database";

const SheetScreenView = ({ navigation, route }: { navigation: any; route: any }) => {
  const { data }: { data: ISheet } = route.params;
  const onDelete = () => {
    deleteSheet(data.id);
  }

  const onEdit = () => {
    navigation.navigate('Ficha', { data })
  }

  console.log(data);
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.textView}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.textView}>
        <TouchableOpacity style={styles.button}>
          <Icon name="edit" size={22} color="tomato" onPress={onEdit} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="trash" size={22} color="tomato" onPress={onDelete}/>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.textView}>
      <Text style={styles.text}>Raça</Text>
      <Text style={styles.text}>{data.race}</Text>
    </View>
    
    {data.clan && (
      <View style={styles.textView}>
        <Text style={styles.text}>Clã</Text>
        <Text style={styles.text}>{data.clan}</Text>
      </View>
    )}
    
    <View style={styles.textView}>
      <Text style={styles.text}>Personagem de Jogador</Text>
      <BouncyCheckbox
            style={styles.checkBox}
            fillColor="tomato"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "tomato" }}
            isChecked={data.isPC}
            disabled
          />
    </View>
    
    <View style={styles.textView}>
      <Text style={styles.text}>Ativo</Text>
      <BouncyCheckbox
            style={{...styles.checkBox }}
            fillColor="tomato"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "tomato" }}
            isChecked={data.isActive}
            disabled
          />
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato',
  },
  text: {
    fontSize: 15,
    color: 'tomato',
  },
  checkBox: {
    width: 25,
    margin: 0,
    padding: 0,
  },
  textView: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {}
});

export { SheetScreenView };
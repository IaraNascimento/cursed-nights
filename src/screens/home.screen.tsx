import { StyleSheet, SafeAreaView } from "react-native";
import SheetList from "../components/sheet-list";
import Menu from "../components/menu";
import React, { useEffect, useState } from "react";
import { CLANS, ISheet, RACES } from "../models/sheet.model";
import { db } from "../database/database";

const HomeScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const [data, setData] = useState<ISheet[]>([{
    clan: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: "id-4518741",
    isActive: false,
    isPC: true,
    race: RACES.Others,
    title: "Asd",
    uri: "",
  },
  {
    clan: CLANS.Brujah,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: "id-4518740",
    isActive: true,
    isPC: false,
    race: RACES.Kindred,
    title: "Celine",
    uri: "",
  }])

  const readSheets = () => {
    const getAllCharactersQuery = 'SELECT * FROM sheets;';
    db.transaction(tx => {
      tx.executeSql(getAllCharactersQuery, [], (_, { rows }) => {
        setData(rows._array);
        console.log(JSON.stringify(data));
      });
    });
  };

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     readSheets()
  //     console.log('New data', data);
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

  return (
  <SafeAreaView style={styles.container}>
    <SheetList data={data} navigation={navigation} />
    <Menu navigation={navigation}/>
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
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
  },
});

export { HomeScreen };
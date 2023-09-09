import React, { useState } from "react"
import { 
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { BLOODLINES, CLANS, ISheet, RACES } from "../models/sheet.model";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Select } from "../components/select";
import Toast from 'react-native-toast-message';
import { toastConfig } from "../components/toastConfig";
import { db, insertSheet, updateSheet } from "../database/database";

const AddSheetView = ({ route, navigation }: { route: any, navigation: any }) => {
  const [isPC, setPC] = useState(true);
  const [race, setRace] = useState(RACES.Others);
  const [clan, setClan] = useState<CLANS | BLOODLINES | undefined>(undefined);
  const [title, setTitle] = useState('')
  const { uri, data }: { uri: string; data: ISheet } = route.params;
  const [foundSheets, setFoundSheets] = useState<ISheet[]>([]);
  
  const getByTitle = () => {
    const query = 'SELECT FROM sheets WHERE title = ?;';

    db.transaction(tx => {
      tx.executeSql(query, [title], (_, { rows }) => {
        console.log(rows._array);
        setFoundSheets(rows._array);
      });
    });
  }

  const onSave = () => {
    getByTitle();
    if ((!data && foundSheets.length) || (data && title !== data.title && foundSheets.length)) {
      Toast.show({
        type: 'errorToast',
        text1: 'Título já existe',
        onPress: () => Toast.hide(),
      });

      return;
    }

      const newData: ISheet = {
        id: 'id-' + Math.floor(Math.random() * 10000000),
        title,
        isPC,
        clan,
        race,
        uri: data ? data.uri : uri,
        createdAt: data ? data.createdAt : new Date(),
        updatedAt: new Date(),
        isActive: true,
      }

      if (!title) {
        Toast.show({
          type: 'errorToast',
          text1: 'Título não pode ser vazio',
          onPress: () => Toast.hide(),
        });

        return;
      }

      if (race === RACES.Kindred && !clan) {
        Toast.show({
          type: 'errorToast',
          text1: 'Selecione um clã',
          onPress: () => Toast.hide(),
        });

        return;
      }

      if (data) {
        updateSheet(newData);
      } else {
        insertSheet(newData);
      }

      console.log(newData);
      navigation.navigate('Cursed Nights');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Toast
        config={toastConfig}
      />

        <View style={styles.content}>
          <Text style={styles.label}>Título da ficha:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            multiline={false}
            numberOfLines={10}
            placeholder="Título da ficha"
          />
        </View>

        <View style={styles.isPC}>
          <Text style={styles.label}>Personagem de jogador?</Text>
          <BouncyCheckbox
            style={{position: "absolute", top: '50%', bottom: '50%', left: '60%', height: 12.5}}
            fillColor="tomato"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "tomato" }}
            isChecked={isPC}
            onPress={setPC}
          />
        </View>

        <View>
          <Text style={styles.label}>Raça:</Text>
          <Select
            value={race}
            setValue={setRace}
            items={RACES}
          />
        </View>

        {race && race === RACES.Kindred && (<View>
          <Text style={styles.label}>Clã:</Text>
          <Select
            value={clan}
            setValue={setClan}
            items={{...BLOODLINES, ...CLANS}}
            placeholder="Selecione um clã"
          />
        </View>)}

        <View style={styles.menu} >
          <TouchableOpacity
                  style={styles.button}
                  onPress={onSave}
                >
                  <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export { AddSheetView }

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    overflow: "scroll",
  },
  content: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    color: 'tomato',
    // backgroundColor: '#fff',
  },
  menu: {
    display: 'flex',
    width: '100%', height: 60,
    paddingLeft: 30,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  input: {
    height: 'auto',
    borderWidth: 1,
    padding: 10,
    color: 'tomato',
    borderColor: 'tomato'
  },
  label: {
    padding: 10,
    paddingBottom: 0,
    color: 'tomato'
  },
  colors: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  color: {
    width: 30, height: 30,
    marginRight: 20,
    borderRadius: 3,
  },
  button: {
    height: 20,
    width: 100,
  },
  buttonText: {
    fontSize: 18,
    color: '#tomato'
  },
  isPC: {
    display: 'flex',
    flexDirection: 'row',
  }
});
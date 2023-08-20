import React, { useState } from "react"
import { Modal, StyleSheet, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { BLOODLINES, CLANS, ISheet, RACES } from "../models/sheet.model";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Select } from "../components/select";

interface IAddSheetProps {
  isVisible: boolean
  onClose: () => void
  onSave: (data: any) => void
  data?: ISheet
}

const AddSheetView = (props: IAddSheetProps) => {
  const [isPC, setPC] = useState(true);
  const [race, setRace] = useState(RACES.Others);
  const [clan, setClan] = useState<CLANS | BLOODLINES | null>(null);
  const title = props.data ? 'Editar Ficha' : 'Adicionar Ficha'
  const [sheetTitle, setText] = useState(props.data?.title || '')


  const onSave = () => {
    if (props.data) {
      const newData = {
        ...props.data,
        title: sheetTitle
      }
      props.onSave(newData)
    } else {
      if (sheetTitle.trim().length) {
        props.onClose()
        return
      }
      const newData = {
        id: 'id-' + Math.floor(Math.random() * 10000000),
        title: sheetTitle,
        isPC,
        clan,
        race,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
      }
      props.onSave(newData)
    }
  }

  return (
    <Modal visible={props.isVisible} style={styles.modal} 
        animationType="slide" 
        transparent={true}
        >
      <KeyboardAvoidingView style={styles.container} >
      <Text style={styles.title}>{title}</Text>

        <View style={styles.content}>
          <Text style={styles.label}>Título da ficha:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={props.data?.title}
            multiline={false}
            numberOfLines={10}
            placeholder="Título da ficha"
          />
        </View>

        <View>
          <Text style={styles.label}>Personagem de jogador?</Text>
          <BouncyCheckbox
            fillColor="black"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "black" }}
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
          />
        </View>)}

        <View style={styles.menu} >
          <TouchableOpacity
                  style={styles.button}
                  onPress={() => props.onClose()}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
                  style={styles.button}
                  onPress={onSave}
                >
                  <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default AddSheetView

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  container: {
    width: '100%', 
    height: '100%',
    paddingTop: 100,
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  menu: {
    display: 'flex',
    width: '100%', height: 60,
    paddingLeft: 30,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  input: {
    height: 'auto',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    padding: 10,
    paddingBottom: 0,
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
    color: '#007fff'
  }
});
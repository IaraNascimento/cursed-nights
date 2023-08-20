import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Menu from './src/components/menu';
import SheetList from './src/components/sheet-list';
import {ISheet} from './src/models/sheet.model';
import AddSheetView from './src/views/add-sheet.view';

export default function App() {
  const [data, setData] = useState<ISheet[]>([])
  const [isEditSheetVisible, setIsEditSheetVisible] = useState(false)

  const onAddSheet = () => {   
    setIsEditSheetVisible(true)
  }

  const onCloseEditSheet = () => {
    setIsEditSheetVisible(false)
  }

  const onSaveSheet = (data: ISheet) => {
    setData((d) => [...d, data])
    setIsEditSheetVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cursed Nights</Text>
      <SheetList data={data} />
      <Menu onAddSheet={onAddSheet}/>

      <AddSheetView isVisible={isEditSheetVisible} 
        onClose={onCloseEditSheet}
        onSave={onSaveSheet}
      />
    </SafeAreaView>
  );
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
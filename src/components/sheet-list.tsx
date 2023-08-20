import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { ISheet } from "../models/sheet.model";
import Sheet from "./sheet";

interface ISheetListProps {
  data: ISheet[]
}

const SheetList = (props: ISheetListProps) => {
  return (
    <FlatList 
        style={styles.container}
        data={props.data}
        renderItem={
          (item: any) => {
            return (
              <Sheet data={item.item} />
            )
          }
        }
        keyExtractor={(item, index) => item.id}
      />
  );
}

export default SheetList

const styles = StyleSheet.create({
  container: {
    // height: '100%', maxHeight: '100%',
    height: 500,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
});

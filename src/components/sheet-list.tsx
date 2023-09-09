import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { ISheet } from "../models/sheet.model";
import SheetItem from "./sheet-item";

interface ISheetListProps {
  data: ISheet[],
  navigation: any,
}

const SheetList = (props: ISheetListProps) => {
  return (
    <FlatList 
        style={styles.container}
        data={props.data}
        renderItem={
          (item: any) => {
            return (
              <SheetItem data={item.item} navigation={props.navigation} />
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
    flexDirection: 'column',
    overflow: 'scroll',
  },
});

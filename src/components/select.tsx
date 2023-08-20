import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface ISelectProps {
  items: { [key: string]: string };
  value: any;
  setValue: (value: any) => void;
};

const Select = (props: ISelectProps) => {
  const options = Object.values(props.items).map((label) => {
    return { label, value: label };
  });

  const [items, setItems] = useState(options);
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={props.value}
      items={items}
      setOpen={setOpen}
      setValue={props.setValue}
      setItems={setItems}
      style={pickerSelectStyles}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export { Select };
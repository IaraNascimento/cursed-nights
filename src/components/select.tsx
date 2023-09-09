import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface ISelectProps {
  items: { [key: string]: string };
  value: any;
  setValue: (value: any) => void;
  placeholder?: string;
};

const Select = (props: ISelectProps) => {
  let options = Object.values(props.items).map((label) => {
    return { label, value: label };
  });
  options = options.sort((a, b) => {
    var textA = a.label.toUpperCase();
    var textB = b.label.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })

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
      style={pickerSelectStyles.inputAndroid}
      placeholder={props.placeholder}
    />
  );
};

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    color: 'tomato',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    color: 'tomato',

    
    paddingRight: 30, // to ensure the text is never behind the icon
  },
};

export { Select };
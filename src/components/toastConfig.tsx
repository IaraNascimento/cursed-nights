import { Text } from 'react-native';
import { View } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';

const toastConfig = {
  errorToast: ({ text1, props }: ToastConfigParams<any>) => (
    <View style={{
      height: 40,
      backgroundColor: 'white',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      opacity: 100,
      position: "absolute",
      right: 10,
    }}>
      <Text>{text1}</Text>
    </View>
  ),
};

export { toastConfig };
import { Alert } from 'react-native';

export const alert = (title, msg) => {
  Alert.alert(
    `${title}`,
    `${msg}`,
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false }
  );
};

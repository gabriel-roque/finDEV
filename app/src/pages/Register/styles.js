import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    height: '80%',
    width: '100%',
    alignItems: 'center'
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#bababa',
    borderColor: 'black',
    borderRadius: 25,
    fontSize: 20,
    width: 300,
    padding: 15,
    margin: 15
  },
  boxLocation: {
    backgroundColor: '#212121',
    marginTop: 20,
    padding: 10
  },
  textDark: {
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    fontWeight: 'bold',
    backgroundColor: '#7D40E7',
    width: 100,
    padding: 15,
    borderRadius: 10
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

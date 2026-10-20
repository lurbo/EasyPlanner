import { StyleSheet, View, Text } from 'react-native';

export default function index() {
  return (
    <View style={styles.containerGlavni}>
      <Text style={styles.text}>index page</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  containerGlavni: {
    flex: 1,
    backgroundColor: 'grey',
  },

  text: {
    textAlign: 'center',
    color: '#fff',
  }
});
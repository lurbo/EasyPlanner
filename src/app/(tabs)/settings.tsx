import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Settings() {
  return (
    <View style={styles.containerGlavni}>
      <Text style={styles.text}>Settings page</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  containerGlavni: {
    flex: 1,
    backgroundColor: 'grey',
  },

  text: {
    color: '#fff',
  }
});

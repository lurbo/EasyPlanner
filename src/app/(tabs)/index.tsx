import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.containerGlavni}>
      <Text style={styles.text}>Main page</Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  containerGlavni: {
    flex: 1,
    backgroundColor: '#002446',
  },

  text: {
    color: '#fff',
  },

  
});

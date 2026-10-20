import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import {useState} from 'react';
import { Link } from 'expo-router';

const shraniDogodek = () => {

}

const settings = () => {
  const [ime, setIme] = useState('');
  const [datum, setDatum] = useState('');
  const [ura, setUra] = useState('');

  return (
    <View style={styles.container} >
      <Text style={styles.naslov}>Nov dogodek </Text>

      
      <Text style={styles.label}>Ime dogodka</Text>
      <TextInput
      placeholder="Ime dogodka"
      value={ime}s
      onChangeText={setIme}
      style={styles.text} 
      />

      <Text style={styles.label}>Datum dogodka</Text>
      <TextInput
      placeholder="DD:MM:YYYY"
      value={datum}
      onChangeText={setDatum}
      style={styles.text} 
      />

      <Text style={styles.label}>Ura dogodka</Text>
      <TextInput
      placeholder="HH:MM"
      value={ura}
      onChangeText={setUra}
      style={styles.text}
      />

      <Pressable
      style={styles.gumb}
      onPress={shraniDogodek}>

        </Pressable>


    </View>
  );
};

export default settings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#adb9c5',
  },
  naslov: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginTop: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  gumb: {
    backgroundColor: '#1684ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
  },
  gumbBesedilo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import {useState} from 'react';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Settings = () => {              //naredi funkcijo za settings
  const [ime, setIme] = useState(''); //spremenljivka za ime dogodka in za njegov set
  const [datum, setDatum] = useState(''); //spremenljivka za datum dogodka in za njegov set
  const [ura, setUra] = useState(''); //spremenljivka za uro dogodka in za njen set

  const shraniDogodek = async () => { //po https://react-native-async-storage.github.io/2.0/API/

  const podatki = await AsyncStorage.getItem('dogodki'); //pridobi podatke

  let dogodki;
  if (podatki){
    dogodki = JSON.parse(podatki);
  }
  else {
    dogodki = [];
  }

  dogodki.push({ //izvozi
    ime: ime,
    datum: datum,
    ura: ura
  });

  await AsyncStorage.setItem('dogodki', JSON.stringify(dogodki)); //iz tabele v text

  setIme(''); //vrne v prvotno vrednost oz izbrise iz vnosnega polja
  setDatum('');
  setUra('');
  };

  return (
    <View style={styles.container} >
      <Text style={styles.naslov}>Nov dogodek </Text>

      
      <Text style={styles.label}>Ime dogodka</Text>
      <TextInput
      placeholder="Ime dogodka"
      value={ime}
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
        <Text style={styles.gumbBesedilo}>
          Shrani dogodek
        </Text>
      </Pressable>

    </View>
  );
};

export default Settings;

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

  text: {
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
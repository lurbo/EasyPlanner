import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router'; //za izvajanje kode vsakic ob prikazu
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {

  const [dogodki, setDogodki] = useState([]); //naredi spremenljivko za stanje, zaenkrat prazen seznam

  const naloziDogodke = async () => {            //funkcija replicirana po https://react-native-async-storage.github.io/2.0/API/
    const podatki = await AsyncStorage.getItem('dogodki'); //dobi podatke z imenom dogodki iz async storage
    if (podatki) {
      setDogodki(JSON.parse(podatki)); //iz json navadnega texta (string) spremeni v JS seznam
    }
  };

  useFocusEffect( //vsakic ko se screen odpre
    useCallback(() => { //ko se enkrat nalozi se ne ponovno nalaga – resil preobremenjenost ram
    naloziDogodke(); //uporabi zgornjo funkcijo
  }, [])
);

  const izbrisiDogodek = async (index) => { //funkcija za izbris dogodkov | sprejme index (iz seznama)
    const podatki = await AsyncStorage.getItem('dogodki'); //enako kot zgoraj dobi podatke
    let seznam; //naredi spremenljivko
    if (podatki){ //ce obstajajo
      seznam = JSON.parse(podatki);
    }
    else {
      seznam = []; //prazen
    }

    seznam.splice(index, 1); //izbrise izbran index in enega '1'
    await AsyncStorage.setItem('dogodki', JSON.stringify(seznam)); //JS seznam nazaj v text za json

    setDogodki(seznam); //prikaze
    }

  return (
  <ScrollView style={styles.containerGlavni}> 

      <Text style={styles.naslov}>
        Naslednji dogodki
      </Text>

      {/*Iz dogodkov z map gre čez vse elemente. v "dogodeK" dobi trenuten podatek, v "index" pa njegovo zap. st.*/}
      {dogodki.map((dogodek, index) => (
        <View style={styles.kartica} key={index}>

          <View style={styles.vrstica}>
            <Text style={styles.ime}>{dogodek.ime}</Text>
              <Pressable onPress={() => izbrisiDogodek(index)}> 
                <Text style={styles.x}>X</Text>
              </Pressable>
              {/*Gumb*/}
          </View>
        <Text>{dogodek.datum}</Text>
        <Text>{dogodek.ura}</Text>
      </View>
    ))}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerGlavni: {
    flex: 1,
    backgroundColor: 'grey',
  },

  naslov: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },

  kartica: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  vrstica: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },

  x: {
  color: 'red',
  fontSize: 22,
  fontWeight: 'bold',
  padding: 5,
},
});
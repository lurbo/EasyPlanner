import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index() {

  const [dogodki, setDogodki] = useState([]);

  const naloziDogodke = async () => {
    const podatki = await AsyncStorage.getItem('dogodki');

    if (podatki) {
      setDogodki(JSON.parse(podatki));
    }
  };

  useFocusEffect(
  useCallback(() => {
    naloziDogodke();
  }, [])
);

  const izbrisiDogodek = async (index) => {
    const podatki = await AsyncStorage.getItem('dogodki');
    const seznam = podatki ? JSON.parse(podatki) : [];
    seznam.splice(index, 1);
    await AsyncStorage.setItem('dogodki', JSON.stringify(seznam));
  setDogodki(seznam);
  }

  return (
       <ScrollView style={styles.containerGlavni}>

      <Text style={styles.naslov}>
        Naslednji dogodki
      </Text>

      {dogodki.map((dogodek, index) => (
        <View style={styles.kartica} key={index}>

    <View style={styles.vrstica}>
      <Text style={styles.ime}>{dogodek.ime}</Text>

      <Pressable onPress={() => izbrisiDogodek(index)}>
        <Text style={styles.x}>X</Text>
      </Pressable>
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
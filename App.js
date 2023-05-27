import { useState } from 'react';
import {  StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [notifiy  , changeNotify ]  = useState("");
  const [person, setPerson] = useState([
    { name: "Person", id :  0 },
    { name: "Person", id :  1 },
    { name: "Person", id :  2 },
    { name: "Person", id :  3 },
    { name: "Person", id :  4 },
    { name: "Person", id :  5 },
    { name: "Person", id :  6 },
    { name: "Person", id :  7 },
    { name: "person", id :  8 }
  ])

  const changeNameF = (personID) => {
    setPerson((previousPersons) => {
      return previousPersons.filter(previousPerson => previousPerson.id != personID ) 
    })

    changeNotify(`Person ID ${personID} has been removed`);

  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.boldText}> All Person </Text>
      </View>

      <View style={styles.navbar}>
        <Text style={styles.disply}> {notifiy} </Text>
      </View>

      <FlatList
        data={person}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => changeNameF(item.id)}>
            <Text style={styles.item}>{item.name}. ID {item.id} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "pink",
  },
  navbar: {
  backgroundColor: "pink",
  height: 40,
  alignItems: "center",
  justifyContent: "center"
  },
  boldText : {
    fontSize: 20,
    fontWeight: "bold"
  },
  disply: {
    color: "red"
  }
 
});

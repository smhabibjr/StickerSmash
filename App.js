import { useState } from 'react';
import {  StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [personName  , setName ]  = useState("");

  const changeNameF = (itemIndex) => {
    setName(`Item ${itemIndex} has been clicked`);
  }

  const [person, setPerson] = useState([
    { name: "item",  id : 1},
    { name: "item", id :  2 },
    { name: "item", id :  3 },
    { name: "item", id :  4 },
    { name: "item", id :  5 },
    { name: "item", id :  6 },
    { name: "item", id :  7 },
    { name: "item", id :  8 },
    { name: "item", id :  9 }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.boldText}> All items </Text>
      </View>

      <View style={styles.navbar}>
        <Text style={styles.disply}> {personName} </Text>
      </View>

      <FlatList
        data={person}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => changeNameF(index)}>
            <Text style={styles.item}>{item.name} {index} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
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

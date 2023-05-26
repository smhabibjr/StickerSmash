# StickerSmash
### Listing item inside a scrollView using map
````
import { useState } from 'react';
import {  StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [person, setPerson] = useState([
    {name: "Habib",  id : 1},
    { name: "Habib", id :  2 },
    { name: "Habib", id :  3 },
    { name: "Habib", id :  4 },
    { name: "Habib", id :  5 },
    { name: "Habib", id :  6 },
    { name: "Habib", id :  7 },
    { name: "Habib", id :  8 },
    { name: "Habib", id :  9 }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.boldText}> All items </Text>
      </View>

      <FlatList
        data={person}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name} </Text>
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
  }
 
});


````

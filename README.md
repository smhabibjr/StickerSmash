# StickerSmash
### Listing item inside a scrollView using map
````
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [person, setPerson] = useState([
    {name: "Habib", key: 1},
    { name: "Habib", key: 2 },
    { name: "Habib", key: 3 },
    { name: "Habib", key: 4 },
    { name: "Habib", key: 5 },
    { name: "Habib", key: 6 },
    { name: "Habib", key: 7 },
    { name: "Habib", key: 8 },
    { name: "Habib", key: 9 },
    { name: "Habib", key: 10 },
    { name: "Habib", key: 11 },
  ])


  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.boldText}> All item </Text>
      </View>

      <View>
        <ScrollView>

          {person.map((singleItem) => {
            return (
              <View key={singleItem.key}>
                <Text style={styles.item}>{singleItem.name} </Text>
              </View>
            )
          })}

        </ScrollView>
      </View>
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

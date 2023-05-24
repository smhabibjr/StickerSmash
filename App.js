import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: "Habib", key: 1},
    { name: "Abir", key: 2 },
    { name: "Hamza", key: 3 },
    { name: "Ali", key: 4 },
    { name: "Sakib", key: 5 },
    { name: "Mas", key: 6 },
    { name: "Mas", key: 7 },
    { name: "Mas", key: 8 },
    { name: "Mas", key: 9 },
    { name: "Mas", key: 10 },
    { name: "Mas", key: 11 },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}> {item.name} </Text>
            </View>
          )
        })}
      </ScrollView>
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
    padding:20,
    backgroundColor: "pink",
    fontSize: 24
  }
});

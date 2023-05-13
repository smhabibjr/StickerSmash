import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [name , setName] = useState("Habib");
  const [person, changePerson] = useState({name: "Abir", age: 44})

  const changeName = () => {
    setName("Muhammad Habib");
    changePerson({name:"Muhammad", age: 55})
  }

  return (
    <View style={styles.container}>
    
        <Text> My name is {name}</Text>
        <Text> My friend name is {person.name}. He is {person.age} years old.</Text>


      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={changeName} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
  }
});

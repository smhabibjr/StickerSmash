import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name , changeDefaultValue ]  = useState("");
  const [age, changeAge] = useState("")
  const changeNameF = (value) => {
    changeDefaultValue(value)
  } 
  const changeAgeF = (value) => {
    changeAge(value)
  }

  return (
    <View style={styles.container}>

      <TextInput 
      style={styles.inputTextField}
        onChangeText={(val) => changeNameF(val)}
        placeholder='e.g: Habib'
     />
      <TextInput
        style={styles.inputTextField}
        onChangeText={(val) => changeAgeF(val)}
        placeholder='e.g: 45'
        keyboardType='numeric'
      />
      <Text style={styles.textBold}>Your name is {name}, age {age}</Text>
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
  textBold: {
    fontWeight: "bold",
    fontSize: 20
  },
  inputTextField: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5
  }
});

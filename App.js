import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name , setName] = useState("Habib");
  const [person, changePerson] = useState({name: "Abir", age: 44})
  const [user, changeUser] = useState(["Abir Hasan", 55, "Bangladesh"])

  const changeName = () => {
    setName("Muhammad Habib");
    changePerson({name:"Muhammad", age: 55})
    changeUser(["only habib", 22, "Germany"])
  }

  const onchangeTrigger = (inputedValue)=> {
    setName(inputedValue);
  }

  return (
    <View style={styles.container}>
    
    <View>
      <TextInput 
      style={styles.textInputField} 
      placeholder='Type your name'
          onChangeText={(value) => onchangeTrigger(value)}
      />
    </View>

    <Text style={styles.marginButtom}> My name is <Text style={styles.textBold}>{name}</Text> </Text>
      
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
  marginButtom : {
    marginTop:20
  },
  textBold: {
    fontWeight: "bold"
  },
  textInputField: {
    borderWidth: 1,
    padding: 10
  }
});

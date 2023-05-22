# StickerSmash
### Input text field and onChangeText event
````
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

````

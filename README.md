# StickerSmash
### How to apply inline css in Text element
````
      <Text style={{color: "red", borderColor: "black", borderWidth: 1}}>this is the text element with inline css</Text>
````
### How to apply internal object css
````
export default function App() {
  const text_elment2 = {
    color: "green", 
    borderColor: "red", 
    borderWidth: 1 ,
    paddding: 5, 
    margin: 5
  }
  return (
    <View>
      <Text style={text_elment2}>this is the text element with internal style object css</Text>
    </View>
  );
}

````
### How to apply style object in react element
````
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "red", borderColor: "black", borderWidth: 1}}>this is the text element with inline css</Text>
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
});

````

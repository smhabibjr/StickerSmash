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

### How to apply external css in React native element

#### Step:1 create a external js file e.g customStyle.js and then define your style object like below
````
module.exports = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    boldText : {
        fontWeight: "bold",
        fontSize: 15
    },
    elementBorder:{
        borderWidth: 1,
        borderColor: "black"
    }
}

````
#### Step 2: import that file external file to your component where you want to use.

````
import customStyle from './assets/css/customStyle'
export default function App() {
  return (
    <View style={customStyle.container}>
      <Text style={customStyle.boldText} >this is the text element with inline css</Text>
    </View>
  );
}

````
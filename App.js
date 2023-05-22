import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import customStyle from './assets/css/customStyle'
export default function App() {
  return (
    <View style={customStyle.container}>
      <Text style={customStyle.boldText} >this is the text element with inline css</Text>
    </View>
  );
}


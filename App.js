import casual from './assets/casual_dog.png'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source = {casual} 
      style = {{ width: 330, height: 330}}
      />
        <Text style = {styles.msg}>ótimo dia!</Text>
        <Text style = {styles.msg2}>Como deseja acesar?</Text>
          <TouchableOpacity >

          </TouchableOpacity>
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
  msg: {
    fontSize: 45,
  }
});

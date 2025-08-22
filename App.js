import casual from './assets/casual_dog.png';
import google from './assets/Google.png';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acesse from './src/Acesse';
 
const Stack = createNativeStackNavigator();

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image
      source = {casual} 
      style = {{ width: 300, height: 300}}
      />
      <Text style = {styles.msg}>ótimo dia!</Text>
      <Text style = {styles.msg2}>Como deseja acessar?</Text>
      <TouchableOpacity style = {styles.botao} 
        onPress={() => navigation.navigate('Login')}>
          <Image
          source = {google} 
          style = {styles.google}
          />

          <Text> Como deseja acessar?</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.botao2} 
        onPress={() => navigation.navigate('Login')}>
          <Text> Outras opções?</Text>
      </TouchableOpacity>
    </View>

  );
}

  export default function App() {
   return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Acesse} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    fontSize: 45,
  },
  msg2: {
  },
  botao: {
    backgroundColor: '#14c871',
    borderRadius: 10,
    borderColor: 'black',
    margin: 10,
    padding: 18,
    width: 330,
    alignItems: 'center', 
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  botao2: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#14c871',
    margin: 10,
    padding: 18,
    width: 330,
    alignItems: 'center',
    borderWidth: 1,
  },
  google: {
    width: 30, 
    height: 30,
  },
});

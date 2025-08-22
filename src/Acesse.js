import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Acesse() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrar, setLembrar] = useState(false);
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>com E-mail e senha</Text>
 
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
      />
 
      <Text style={styles.label}>Senha</Text>
      <View style={styles.senha}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Digite sua senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Icon name={mostrarSenha ? "eye-off" : "eye"} size={20} color={'#888'}/>
        </TouchableOpacity>
      </View>
 
      <View style={styles.esqueci}>
      <View style={styles.lembrarContainer}>
        <TouchableOpacity 
          style={[
            styles.checkbox, 
            lembrar && { backgroundColor: '#14c871' }
          ]}
          onPress={() => setLembrar(!lembrar)}
        >   
          {lembrar && <Icon name="checkmark" size={16} color="#fff" />}
        </TouchableOpacity>
          <Text>Lembrar senha</Text>
      </View>
        <TouchableOpacity>
          <Text style={styles.esqueciTexto}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={[styles.buttonText, { color: "#000000" }]}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
 
      <Text style={styles.ou}>Ou continue com</Text>
 
      <View style={styles.icons}>
        <Image source={Google} style={styles.icon} />
        <Image source={Facebook} style={styles.icon} />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    marginBottom: 20,
  },
  label: {
    marginTop: 22,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f0f2ff",
    padding: 18,
    borderRadius: 8,
    marginTop: 5,
  },
  senha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2ff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  esqueci: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent:"space-between"
  },
  lembrarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  esqueciTexto: {
    fontWeight: "500",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#14c871",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#fff",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button1: {
    backgroundColor: "#14c871",
    padding: 19,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#14c871",
    padding: 19,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  ou: {
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
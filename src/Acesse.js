import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Google from '../assets/Google.png';
import Facebook from '../assets/Facebook.png';
 
export default function Acesse() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
 
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Digite sua senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Icon name={mostrarSenha ? "eye-off" : "eye"} size={20} color="#888" />
        </TouchableOpacity>
      </View>
 
      <View style={styles.optionsRow}>
        <TouchableOpacity style={styles.link}>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWhite}>
          <Text style={[styles.buttonText, { color: "#00A859" }]}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
 
      <Text style={styles.orText}>Ou continue com</Text>
 
      <View style={styles.socialRow}>
        <Image source={Google} style={styles.socialIcon} />
        <Image source={Facebook} style={styles.socialIcon} />
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
    marginTop: 15,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f0f2ff",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2ff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
  },
  link: {
    color: "#00A859",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonGreen: {
    backgroundColor: "#00A859",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  buttonWhite: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#00A859",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
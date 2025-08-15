import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import google from './assets/Google.png';
import facebook from './assets/Facebook.png';
export default function App() {
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 const [lembrar, setLembrar] = useState(false);
 return (
<View style={styles.container}>
<Text style={styles.titulo}>Acesse</Text>
<Text style={styles.subtitulo}>com E-mail e senha</Text>
<Text style={styles.label}>E-mail</Text>
<TextInput
       style={styles.input}
       placeholder="Digite seu E-mail"
       value={email}
       onChangeText={setEmail}
     />
<Text style={styles.label}>Senha</Text>
<TextInput
       style={styles.input}
       placeholder="Digite sua senha"
       secureTextEntry
       value={senha}
       onChangeText={setSenha}
     />
<View style={styles.row}>
<TouchableOpacity
         style={styles.checkboxRow}
         onPress={() => setLembrar(!lembrar)}
>
<View style={[styles.checkbox, lembrar && styles.checkboxAtivo]} />
<Text style={styles.checkboxTexto}>Lembrar senha</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={styles.link}>Esqueci minha senha</Text>
</TouchableOpacity>
</View>
<View style={styles.botoes}>
<TouchableOpacity style={styles.btnAcessar}>
<Text style={styles.txtAcessar}>Acessar</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btnCadastrar}>
<Text style={styles.txtCadastrar}>Cadastrar</Text>
</TouchableOpacity>
</View>
<Text style={styles.ou}>Ou continue com</Text>
<View style={styles.social}>
<TouchableOpacity>
<Image source={google} style={styles.logo} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={facebook} style={styles.logo} />
</TouchableOpacity>
</View>
</View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   padding: 25,
 },
 titulo: {
   fontSize: 28,
   fontWeight: 'bold',
   marginTop: 20,
 },
 subtitulo: {
   color: '#555',
   marginBottom: 20,
 },
 label: {
   marginTop: 15,
   fontWeight: 'bold',
 },
 input: {
   backgroundColor: '#f2f2f2',
   borderRadius: 8,
   padding: 12,
   marginTop: 5,
 },
 row: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: 10,
 },
 checkboxRow: {
   flexDirection: 'row',
   alignItems: 'center',
 },
 checkbox: {
   width: 18,
   height: 18,
   borderRadius: 4,
   borderWidth: 1,
   borderColor: '#14c871',
   marginRight: 6,
 },
 checkboxAtivo: {
   backgroundColor: '#14c871',
 },
 checkboxTexto: {
   color: '#333',
 },
 link: {
   color: '#333',
 },
 botoes: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: 25,
 },
 btnAcessar: {
   flex: 1,
   backgroundColor: '#14c871',
   padding: 15,
   borderRadius: 8,
   alignItems: 'center',
   marginRight: 5,
 },
 txtAcessar: {
   color: '#fff',
   fontWeight: 'bold',
 },
 btnCadastrar: {
   flex: 1,
   borderColor: '#14c871',
   borderWidth: 1,
   padding: 15,
   borderRadius: 8,
   alignItems: 'center',
   marginLeft: 5,
 },
 txtCadastrar: {
   color: '#14c871',
   fontWeight: 'bold',
 },
 ou: {
   textAlign: 'center',
   color: '#777',
   marginVertical: 20,
 },
 social: {
   flexDirection: 'row',
   justifyContent: 'center',
   gap: 20,
 },
 logo: {
   width: 40,
   height: 40,
   resizeMode: 'contain',
   marginHorizontal: 15,
 },
});
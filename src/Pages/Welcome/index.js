import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import timaoImage from './assets/timao.png';


export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containertimão}>
        <Animatable.Image
           animation="flipInY"
           source={timaoImage}
           style={styles.logo}
           resizeMode='contain'
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Organize e armazene suas tarefas mais rápido!</Text>
        <Text style={styles.text}>Faça login para começar</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containertimão: {
    flex: 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16, // Valor absoluto ou relativo à largura do dispositivo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
  },
  button: {
    // Removido 'position: 'absolute''
    backgroundColor: '#3498db', // Cor modificada para um azul mais padrão
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    marginVertical: 20, // Adicionado um espaçamento vertical
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Cor do texto do botão ajustada para garantir legibilidade
  },
});



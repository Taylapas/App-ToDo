import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

    <View style={styles.containertimao}>
    <Animatable.Image
    animation="flipInY"
      source={require('..\\..\\assets\\timao.png')}
      style={{width:'100%'}}
      resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Organize e armazene suas tarefas mais rápido!</Text>
        <Text style={styles.text}>Faça login para começar</Text>
        </Animatable.View>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containertimao: {
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
    paddingStart: '5%',
    paddingEnd: '5%'
   
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
    position:'absolute',
    backgroundColor: '#3498db', // Cor modificada para um azul mais padrão
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom:'5%',
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Cor do texto do botão ajustada para garantir legibilidade
  },
});






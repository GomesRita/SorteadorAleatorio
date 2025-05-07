import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [sorteados, setSorteados] = useState<number[]>([]);

  let numeros: number[] = []
  const gerador = (): any =>{
    for (let i = 0; i <= 5; i++){
      const num: number = Math.floor(Math.random() * 60) *1
      if(!numeros.includes(num)){
        numeros.push(num)
      } else {
        i-- 
        //Caso o número seja repetido o i descresce -1 para garantir que sejam sorteados 6 valores
      }
    }
    setSorteados(numeros);
  }

  return (
    <View style={styles.container}>
      <View  style={styles.data} >
      {sorteados !== null && sorteados.map((item, index) => (
        <Text style={styles.value} key={index}>{item}</Text>
      ))}
      </View>
      <Button title='Sortear' onPress={gerador}></Button>
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
  data:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 600,
    paddingButton: 10
  },
  value:{
    borderRadius:100,
    borderColor:'#2196f3',
    borderWidth: 1,
    margin: 20,
    padding: 20,
    backgroundColor: '#2196f3',
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    color: '#ffffff'
  }
});

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
      }
    }
    setSorteados(numeros);
  }

  return (
    <View style={styles.container}>
      {sorteados !== null && sorteados.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
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
});

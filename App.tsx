import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  let sorteados: number[] = []
  const gerador = (): any =>{
    for (let i = 0; i <= 6; i++){
      const num: number = Math.random()
      if(sorteados.includes(num)){
        i = i - 1
      }
      else{
        sorteados.push(num)
      }
    }
    return sorteados;
  }

  return (
    <View style={styles.container}>
      {sorteados !== null && <Text>{sorteados}</Text>}
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

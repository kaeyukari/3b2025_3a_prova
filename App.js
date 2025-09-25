import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>3º Bimestre</Text>
      <Text style={styles.txt}>3A</Text>
      <Text style={styles.txt}>Prova</Text>
      <Text style={styles.nome}>Karen Yukari</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d668f',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffff',
    
  },
  txt: {
    color: '#fff', 
  },
  nome: {
    color: '#80acf2', 
  },
});

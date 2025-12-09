import { Text, View } from 'react-native';
import { styles } from "./style"

import Title from "../Title"
import Form from '../Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a calculadora IMC!!!!</Text>
      <Title></Title>
      <Form></Form>
    </View>
  );
}


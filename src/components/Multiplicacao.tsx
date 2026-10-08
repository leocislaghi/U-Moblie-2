import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

interface MultiplicacaoProps {
  valor1: number;
  valor2: number;
  valor3: number;
}

export default function Multiplicacao({ valor1, valor2, valor3 }: MultiplicacaoProps) {
  const resultado = valor1 * valor2 * valor3;

  const mostrarMultiplicacao = () => {
    Alert.alert(
      "Resultado da Multiplicação",
      `Valores: ${valor1}, ${valor2}, ${valor3}\nResultado: ${valor1} x ${valor2} x ${valor3} = ${resultado}`
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Multiplicação de Valores</Text>
      
      <Text style={styles.textoConta}>
        Valores: {valor1}, {valor2}, {valor3}
      </Text>
      <Text style={styles.textoConta}>
        Conta: {valor1} x {valor2} x {valor3} = ?
      </Text>

      <Pressable style={styles.botao} onPress={mostrarMultiplicacao}>
        <Text style={styles.textoBotao}>Calcular / Mostrar Resultado</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  textoConta: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  botao: {
    backgroundColor: '#ffc107',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
});
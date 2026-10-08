import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

interface AlunoProps {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
}

export default function Aluno({ nome, idade, turma, nota1, nota2 }: AlunoProps) {
  const media = (nota1 + nota2) / 2;

  const mostrarDadosAluno = () => {
    Alert.alert(
      "Dados do Aluno",
      `\nIdade: ${idade} anos\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media.toFixed(1)}`
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>Aluno: {nome}</Text>

      <Pressable style={styles.botao} onPress={mostrarDadosAluno}>
        <Text style={styles.textoBotao}>Exibir Dados e Média</Text>
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
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  botao: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
import { Text, View } from "react-native";

type AlunoProps = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

export default function Aluno(props: AlunoProps) {
  const media = (props.nota1 + props.nota2) / 2;

  return (
    <View>
      <Text>Dados do Aluno:</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade} anos</Text>
      <Text>Turma: {props.turma}</Text>
      <Text>Nota 1: {props.nota1}</Text>
      <Text>Nota 2: {props.nota2}</Text>
      <Text>Media: {media.toFixed(1)}</Text>
    </View>
  );
}
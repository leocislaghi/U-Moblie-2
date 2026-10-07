import { Text, View } from "react-native";

type FuncionarioProps = {
  nome: string;
  idade: number;
  setor: string;
};

export default function Funcionario(props: FuncionarioProps) {
  return (
    <View>
      <Text>Dados do Funcionario:</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade} anos</Text>
      <Text>Setor: {props.setor}</Text>
    </View>
  );
}
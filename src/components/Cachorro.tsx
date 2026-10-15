import { Pressable, Text, View } from "react-native";

type CachorroProps = {
  nome: string;
  raca?: string;
  index: number;
  onSelecionar: (index: number) => void;
}

export default function Cachorro(props: CachorroProps) {
  return (
    <View>
      <Text>Cachorro: {props.nome}</Text>
      {
        props.raca
        &&
        <Text>Raça: {props.raca}</Text>
      }

      <Pressable
        onPress={() => { props.onSelecionar(props.index) }}>
        <Text>SELECIONAR</Text>
      </Pressable>
    </View>
  )
}
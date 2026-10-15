import ExemploStyle_Text from "@/components/ExemploStyle_Text";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function TelaStyleText() {
  return (
    <View>
      <Pressable onPress={() => { router.navigate('/telaStyleText' as any); }}>
        <Text>Ir para Exemplo Style Text</Text>
      </Pressable>
      <ExemploStyle_Text />
    </View>
  );
}
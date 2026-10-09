import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TelaTres() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BEM VINDO</Text>
      <Text>LEONARDO</Text>

      <Pressable style={styles.botao}>
        <Text>COMPRAR</Text>
      </Pressable>

      <Pressable style={styles.botaoSair}>
        <Text>SAIR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-around", alignItems: "center", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold" },
  botao: { borderWidth: 1, padding: 10 },
  botaoSair: { borderWidth: 1, padding: 10, width: "100%", alignItems: "center" }
});
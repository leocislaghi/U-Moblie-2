import { StyleSheet, Text, View } from "react-native";

export default function TelaUm() {
  return (
    <View style={styles.container}>
      {/* Topo ajustado para ter altura fixa e alinhar os botões à direita sem esticar */}
      <View style={styles.topo}>
        <Text style={styles.botao}>3</Text>
        <Text style={styles.botao}>2</Text>
        <Text style={styles.botao}>1</Text>
      </View>
      <View style={styles.baixo}>
        <Text style={styles.texto}>HELLO WORLD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topo: { 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    alignSelf: "flex-end", // Impede que a caixa estique na largura toda
    padding: 10,
    gap: 5 // Espaçamento entre os números
  },
  baixo: { flex: 1, justifyContent: "center", alignItems: "center" },
  botao: { 
    borderWidth: 1, 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    textAlign: "center" 
  },
  texto: { fontSize: 20, fontWeight: "bold" }
});
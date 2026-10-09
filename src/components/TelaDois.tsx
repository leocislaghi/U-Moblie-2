import { StyleSheet, Text, View } from "react-native";

export default function TelaDois() {
  return (
    <View style={styles.container}>
      <View style={styles.cima}>
        <Text>TERCEIRO</Text>
        <Text>SEGUNDO</Text>
        <Text>PRIMEIRO</Text>
      </View>
      <View style={styles.baixo}>
        <Text style={styles.botao}>3</Text>
        <Text style={styles.botao}>2</Text>
        <Text style={styles.botao}>1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cima: { flex: 1, justifyContent: "space-around", alignItems: "center" },
  baixo: { flex: 1, justifyContent: "center", alignItems: "center" },
  botao: { borderWidth: 1, padding: 5, marginVertical: 5 }
});
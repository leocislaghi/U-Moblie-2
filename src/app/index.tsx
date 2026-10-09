import TelaDois from "@/components/TelaDois";
import TelaTres from "@/components/TelaTres";
import TelaUm from "@/components/TelaUm";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [telaAtiva, setTelaAtiva] = useState(1);

  return (
    <View style={styles.container}>
      {/* Menu de botões no topo para alternar as telas */}
      <View style={styles.menu}>
        <Pressable 
          style={[styles.botao, telaAtiva === 1 && styles.botaoAtivo]} 
          onPress={() => setTelaAtiva(1)}
        >
          <Text style={telaAtiva === 1 && styles.textoAtivo}>Tela 1</Text>
        </Pressable>

        <Pressable 
          style={[styles.botao, telaAtiva === 2 && styles.botaoAtivo]} 
          onPress={() => setTelaAtiva(2)}
        >
          <Text style={telaAtiva === 2 && styles.textoAtivo}>Tela 2</Text>
        </Pressable>

        <Pressable 
          style={[styles.botao, telaAtiva === 3 && styles.botaoAtivo]} 
          onPress={() => setTelaAtiva(3)}
        >
          <Text style={telaAtiva === 3 && styles.textoAtivo}>Tela 3</Text>
        </Pressable>
      </View>

      {/* Renderização condicional da tela ativa */}
      <View style={styles.conteudo}>
        {telaAtiva === 1 && <TelaUm />}
        {telaAtiva === 2 && <TelaDois />}
        {telaAtiva === 3 && <TelaTres />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: "#fff" },
  menu: { flexDirection: "row", justifyContent: "space-around", padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  botao: { paddingVertical: 8, paddingHorizontal: 15, borderWidth: 1, borderColor: "#888", borderRadius: 5 },
  botaoAtivo: { backgroundColor: "#007AFF", borderColor: "#007AFF" },
  textoAtivo: { color: "#fff", fontWeight: "bold" },
  conteudo: { flex: 1 }
});
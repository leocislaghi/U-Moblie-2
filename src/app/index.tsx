import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput } from "react-native";

import Aluno from "@/components/Aluno";
import Cachorro from "@/components/Cachorro";
import Funcionario from "@/components/Funcionario";
import Gato from "@/components/Gato";
import Multiplicacao from "@/components/Multiplicacao";
import Pessoa from "@/components/Pessoa";

export default function Index() {
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);

  const acionarPopUp = () => {
    Alert.alert("Outro botão");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pessoa />

      <Pressable onPress={acionarPopUp}>
        <Text>Boa noite.</Text>
      </Pressable>

      <Pressable
        onPress={(evento) => {
          Alert.alert(`Campo: ${campo}`);
          console.log(evento);
        }}>
        <Text>Boa noite.</Text>
      </Pressable>

      <Gato />

      <Cachorro nome="Orelha" raca="pitbul" />

      <Funcionario
        nome="Leonardo"
        idade={17}
        setor="Tecnologia da Informacao"
      />

      <Aluno
        nome="Leonardo"
        idade={17}
        turma="3 Ano"
        nota1={8.0}
        nota2={9.5}
      />

       <Image source={{uri: ("https://img.magnific.com/fotos-premium/globo-da-terra-a-noite-elementos-desta-imagem-fornecidos-pela-nasa-renderizacao-3d_924688-4494.jpg?semt=ais_hybrid&w=740&q=80")}} style={{width: 200, height: 200}}/>

      <Multiplicacao valor1={2} valor2={4} valor3={5} />

      <TextInput
        placeholder="Digite algo..."
        value={campo}
        onChangeText={(text) => { setCampo(text); }}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />

      <Switch
        value={ativado}
        onValueChange={(valor) => { setAtivado(valor); }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
});
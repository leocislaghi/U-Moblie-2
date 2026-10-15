import { useState } from "react";
import { Alert, FlatList, Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";

import Aluno, { AlunoType } from "@/components/Aluno";
import Cachorro from "@/components/Cachorro";
import Funcionario from "@/components/Funcionario";
import Gato from "@/components/Gato";
import Multiplicacao from "@/components/Multiplicacao";
import Pessoa from "@/components/Pessoa";

// Definição dos dados fornecidos
const aluno1: AlunoType = { nome: 'Ana', idade: 10, turma: '22', nota1: 10, nota2: 8 };
const aluno2: AlunoType = { nome: 'Carlos', idade: 11, turma: '22', nota1: 7, nota2: 6 };
const aluno3: AlunoType = { nome: 'Cláudio', idade: 10, turma: '23', nota1: 7.5, nota2: 9 };
const aluno4: AlunoType = { nome: 'Renato', idade: 11, turma: '23', nota1: 6, nota2: 5 };

const lista: AlunoType[] = [aluno1, aluno2, aluno3, aluno4];

export default function Index() {
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);

  const acionarPopUp = () => {
    Alert.alert("Outro botão");
  };

  return (
    <FlatList
      data={lista}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Aluno
          nome={item.nome}
          idade={item.idade}
          turma={item.turma}
          nota1={item.nota1}
          nota2={item.nota2}
        />
      )}
      ListHeaderComponent={
        <View style={styles.headerFooterContainer}>
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

          <Cachorro nome="Orelha" raca="Caramelo" />

          <Funcionario
            nome="Gabriel Mello"
            idade={17}
            setor="Tecnologia da Informacao"
          />
        </View>
      }
      ListFooterComponent={
        <View style={styles.headerFooterContainer}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjK3cRbdtQTCkW_ifOEjQ9ddExudLPwwBE-MViVRBLtYJbOf7zWTnHnHR&s=10'
            }}
            style={{ width: 200, height: 200, resizeMode: "stretch" }}
          />

          <Multiplicacao valor1={2} valor2={4} valor3={5} />

          <TextInput
            placeholder="Digite algo.ggg.."
            value={campo}
            onChangeText={(text) => { setCampo(text); }}
            style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
          />

          <Switch
            value={ativado}
            onValueChange={(valor) => { setAtivado(valor); }}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: "center",
  },
  headerFooterContainer: {
    alignItems: "center",
  },
});
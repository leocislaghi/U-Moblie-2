import Aluno from "@/components/Aluno";
import Cachorro from "@/components/Cachorro";
import Funcionario from "@/components/Funcionario";
import Gato from "@/components/Gato";
import Multiplicacao from "@/components/Multiplicacao";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Boa noite.</Text>

      <Gato />
      <Cachorro nome="Orelha" raca="pitbul" />

      <Funcionario 
        nome="Leonardo Cislaghi" 
        idade={17} 
        setor="Tecnologia da Informacao" 
      />

      <Aluno 
        nome="Leonardo Cislaghi" 
        idade={17} 
        turma="2 Ano B" 
        nota1={8.5} 
        nota2={7.5} 
      />

      <Multiplicacao 
        valor1={2} 
        valor2={4} 
        valor3={5} 
      />
      <TextInput placeholder="Digite algo..."/>
      <Image source={{uri: ("https://img.magnific.com/fotos-premium/globo-da-terra-a-noite-elementos-desta-imagem-fornecidos-pela-nasa-renderizacao-3d_924688-4494.jpg?semt=ais_hybrid&w=740&q=80")}} style={{width: 200, height: 200}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
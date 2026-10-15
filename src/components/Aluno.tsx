import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type AlunoType = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

export default function Aluno({ nome, idade, turma, nota1, nota2 }: AlunoType) {
  const media = (nota1 + nota2) / 2;
  const status = media >= 7 ? "Aprovado" : "Reprovado";

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Dados do Aluno</Text>
      <Text style={styles.texto}><Text style={styles.label}>Nome:</Text> {nome}</Text>
      <Text style={styles.texto}><Text style={styles.label}>Idade:</Text> {idade} anos</Text>
      <Text style={styles.texto}><Text style={styles.label}>Turma:</Text> {turma}</Text>
      <Text style={styles.texto}><Text style={styles.label}>Nota 1:</Text> {nota1}</Text>
      <Text style={styles.texto}><Text style={styles.label}>Nota 2:</Text> {nota2}</Text>

      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTexto}>
          Média Final: {media.toFixed(1)} - <Text style={status === "Aprovado" ? styles.aprovado : styles.reprovado}>{status}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: 280,
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  texto: {
    fontSize: 14,
    marginVertical: 2,
  },
  label: {
    fontWeight: 'bold',
  },
  resultadoContainer: {
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  aprovado: {
    color: 'green',
  },
  reprovado: {
    color: 'red',
  },
});
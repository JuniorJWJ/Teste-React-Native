import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface TarefaInputProps {
  valorTitulo: string; // Valor do campo de título
  valorTexto: string; // Valor do campo de texto
  onChangeTitulo: (texto: string) => void; // Função para atualizar o título
  onChangeTexto: (texto: string) => void; // Função para atualizar o texto
  onSubmit: () => void; // Função para submeter
}

export function TarefaInput({valorTitulo, valorTexto,  onChangeTitulo,  onChangeTexto,  onSubmit,}: TarefaInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={valorTitulo}
        onChangeText={onChangeTitulo}
        placeholder="Digite o título da tarefa"
      />
      <TextInput
        style={styles.input}
        value={valorTexto}
        onChangeText={onChangeTexto}
        placeholder="Digite o texto da tarefa"
      />
      <TouchableOpacity style={styles.botao} onPress={onSubmit}>
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column', // Alterado para coluna
    marginBottom: 20,
  },
  input: {
    width: '100%', // Garante que os inputs tenham a mesma largura
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Adicionado para separar os inputs verticalmente
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end', // Alinha o botão à direita
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 24,
  },
});
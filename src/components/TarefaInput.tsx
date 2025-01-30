import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface TarefaInputProps {
  valor: string;
  onChangeText: (texto: string) => void;
  onSubmit: () => void;
}

export function TarefaInput({valor, onChangeText, onSubmit}: TarefaInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={onChangeText}
        placeholder="Digite uma nova tarefa"
      />
      <TouchableOpacity style={styles.botao} onPress={onSubmit}>
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 24,
  },
}); 
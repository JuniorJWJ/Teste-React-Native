import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Button} from 'react-native';
import {Tarefa} from '../types/Tarefa';

type Props = {
  tarefa: Tarefa;
  onToggle: (id: string) => void;
  onPress: () => void;
};

export function TarefaItem({tarefa, onToggle, onPress}: Props): React.JSX.Element {
  return (
    <TouchableOpacity 
      onPress={() => onToggle(tarefa.id)}
      style={styles.container}
    >
      <View style={styles.tarefaContainer}>
        <View style={[
          styles.checkbox,
          tarefa.concluida && styles.checkboxConcluida
        ]} />
        <View style={styles.conteudoContainer}>
          <Text style={[
            styles.titulo,
            tarefa.concluida && styles.textoConcluido
          ]}>
            {tarefa.titulo}
          </Text>
          <Text style={[
            styles.texto,
            tarefa.concluida && styles.textoConcluido
          ]}>
            {tarefa.texto}
          </Text>
        </View>
        <Button title="Detalhes" onPress={onPress} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginVertical: 5,
  },
  tarefaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 10,
  },
  checkboxConcluida: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  conteudoContainer: {
    flex: 1,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: '#666',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
}); 